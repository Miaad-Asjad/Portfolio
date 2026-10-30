
import { useState } from "react";
import { Check, Copy, LogOut, X } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

export default function AdminReviews() {
  const [password, setPassword] = useState("");
  const [adminToken, setAdminToken] = useState("");
  const [projectName, setProjectName] = useState("");
  const [inviteUrl, setInviteUrl] = useState("");
  const [reviews, setReviews] = useState([]);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function api(path, options = {}) {
    const response = await fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(adminToken ? { Authorization: `Bearer ${adminToken}` } : {}),
        ...options.headers,
      },
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong.");
    }

    return data;
  }

  async function login(event) {
    event.preventDefault();
    setError("");
    setNotice("");
    setBusy(true);

    try {
      const data = await fetch(`${API_URL}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      }).then(async (response) => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || "Login failed.");
        return result;
      });

      setAdminToken(data.token);
      setPassword("");
      setNotice("Logged in successfully.");
      await loadReviews(data.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  async function loadReviews(token = adminToken) {
    setError("");

    try {
      const response = await fetch(`${API_URL}/admin/reviews`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Could not load reviews.");

      setReviews(data.reviews || []);
    } catch (err) {
      setError(err.message);
    }
  }

  async function createInvitation(event) {
    event.preventDefault();
    setError("");
    setNotice("");
    setInviteUrl("");
    setBusy(true);

    try {
      const data = await api("/admin/invitations", {
        method: "POST",
        body: JSON.stringify({ projectName }),
      });

      setInviteUrl(data.reviewUrl);
      setProjectName("");
      setNotice("Invitation created. Send it privately to your client.");
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  async function copyInvite() {
    try {
      await navigator.clipboard.writeText(inviteUrl);
      setNotice("Invitation link copied.");
    } catch {
      setNotice("Copy failed. Select and copy the link manually.");
    }
  }

  async function updateStatus(id, status) {
    setError("");
    setNotice("");
    setBusy(true);

    try {
      await api(`/admin/reviews/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });

      setReviews((current) => current.filter((review) => review._id !== id));
      setNotice(status === "approved" ? "Review approved and published." : "Review rejected.");
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  function logout() {
    setAdminToken("");
    setReviews([]);
    setInviteUrl("");
    setNotice("Logged out.");
    setError("");
  }

  if (!API_URL) {
    return <p className="p-8">Set VITE_API_URL in client/.env first.</p>;
  }

  if (!adminToken) {
    return (
      <main className="min-h-screen bg-[#FBF0F2] px-5 py-16">
        <form onSubmit={login} className="mx-auto max-w-md rounded-3xl border border-rose-200 bg-cream p-8">
          <p className="hand text-2xl text-cherry">Private space ♡</p>
          <h1 className="display mt-2 text-4xl">Admin login</h1>
          <label htmlFor="adminPassword" className="mt-6 block text-sm font-medium">
            Admin password
          </label>
          <input
            id="adminPassword"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-2 w-full rounded-xl border border-rose-200 bg-white px-4 py-3"
          />
          {error && <p role="alert" className="mt-3 text-sm text-red-700">{error}</p>}
          <button disabled={busy} className="mt-5 rounded-full bg-cherry px-6 py-3 font-semibold bg-[#96324A] text-white disabled:opacity-60">
            {busy ? "Logging in..." : "Log in"}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FBF0F2] px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="hand text-2xl text-cherry">Your little review desk ♡</p>
            <h1 className="display mt-1 text-4xl">Review dashboard</h1>
          </div>
          <button onClick={logout} className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-2 text-sm">
            <LogOut size={16} /> Log out
          </button>
        </div>

        <form onSubmit={createInvitation} className="mt-8 rounded-3xl border border-rose-200 bg-cream p-6">
          <h2 className="text-lg font-semibold">Invite a client</h2>
          <p className="mt-2 text-sm text-ink/60">Enter the project name to create a single-use link that expires in seven days.</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
              maxLength={100}
              placeholder="e.g. Arab Oasis"
              className="min-w-0 flex-1 rounded-xl border border-rose-200 bg-white px-4 py-3"
            />
            <button disabled={busy} className="rounded-full bg-cherry px-5 py-3 font-semibold bg-[#96324A] text-white disabled:opacity-60">
              Create link
            </button>
          </div>

          {inviteUrl && (
            <div className="mt-4 rounded-xl border border-rose-200 bg-white p-4">
              <p className="break-all text-sm">{inviteUrl}</p>
              <button type="button" onClick={copyInvite} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cherry">
                <Copy size={15} /> Copy invitation
              </button>
            </div>
          )}
        </form>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold">Pending reviews ({reviews.length})</h2>
          <button onClick={() => loadReviews()} className="rounded-full border border-rose-200 bg-white px-4 py-2 text-sm">
            Refresh
          </button>
        </div>

        {reviews.length === 0 ? (
          <div className="mt-4 rounded-3xl border border-dashed border-rose-300 bg-white/75 p-8 text-center text-sm text-ink/60">
            No pending reviews right now.
          </div>
        ) : (
          <div className="mt-4 grid gap-4">
            {reviews.map((review) => (
              <article key={review._id} className="rounded-3xl border border-rose-200 bg-cream p-6">
                <p className="text-xs uppercase tracking-wider text-cherry">{review.projectName}</p>
                <h3 className="mt-2 text-lg font-semibold">{review.clientName}</h3>
                <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-ink/70">{review.message}</p>
                <p className="mt-3 text-xs text-ink/45">
                  Permission to publish: {review.permissionToPublish ? "Yes" : "No"}
                </p>
                <div className="mt-5 flex gap-3">
                  <button
                    disabled={busy || !review.permissionToPublish}
                    onClick={() => updateStatus(review._id, "approved")}
                    className="inline-flex items-center gap-2 rounded-full bg-cherry px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
                  >
                    <Check size={15} /> Approve
                  </button>
                  <button
                    disabled={busy}
                    onClick={() => updateStatus(review._id, "rejected")}
                    className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-semibold"
                  >
                    <X size={15} /> Reject
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {error && <p role="alert" className="mt-5 text-sm text-red-700">{error}</p>}
        {notice && <p role="status" className="mt-5 text-sm text-green-700">{notice}</p>}
      </div>
    </main>
  );
}
