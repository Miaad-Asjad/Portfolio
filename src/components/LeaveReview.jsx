
import { useState } from "react";
import { Heart, Send } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

export default function LeaveReview() {
  const token = new URLSearchParams(window.location.search).get("token");

  const [clientName, setClientName] = useState("");
  const [message, setMessage] = useState("");
  const [permission, setPermission] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setNotice("");
    setError("");

    if (!token) {
      setError("This invitation link is missing or invalid.");
      return;
    }

    if (!API_URL) {
      setError("The review service is not configured yet.");
      return;
    }

    setSending(true);

    try {
      const response = await fetch(`${API_URL}/reviews/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          clientName,
          message,
          permissionToPublish: permission,
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Submission failed.");

      setNotice(data.message);
      setClientName("");
      setMessage("");
      setPermission(false);
    } catch (err) {
      setError(err.message || "Unable to submit your review.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#FBF0F2] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-xl rounded-[2rem] border border-rose-200 bg-cream p-7 shadow-sm sm:p-10">
        <Heart className="text-cherry" size={28} />

        <p className="hand mt-5 text-2xl text-cherry">A little thank you ♡</p>
        <h1 className="display mt-2 text-4xl">Share your experience.</h1>
        <p className="mt-4 text-sm leading-7 text-ink/65">
          Your honest feedback helps me learn and improve. Please share your
          own experience of working with me.
        </p>

        {!token ? (
          <p className="mt-6 rounded-xl bg-blush p-4 text-sm text-ink">
            Please open the personal review invitation link you received.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="clientName">
                Your name
              </label>
              <input
                id="clientName"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                required
                minLength={2}
                maxLength={80}
                className="w-full rounded-xl border border-rose-200 bg-white px-4 py-3 outline-none focus:border-cherry"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="message">
                Your review
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                minLength={10}
                maxLength={1200}
                rows={6}
                className="w-full resize-y rounded-xl border border-rose-200 bg-white px-4 py-3 outline-none focus:border-cherry"
                placeholder="Tell me about your experience..."
              />
            </div>

            <label className="flex items-start gap-3 text-sm leading-6 text-ink/70">
              <input
                type="checkbox"
                checked={permission}
                onChange={(e) => setPermission(e.target.checked)}
                required
                className="mt-1 accent-[#B63E5A]"
              />
              I give permission for this review, my name, and the project name
              to appear publicly on Miaad’s portfolio.
            </label>

            {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
            {notice && <p role="status" className="text-sm text-green-700">{notice}</p>}

            <button
  type="submit"
  disabled={sending || !permission}
  className="inline-flex items-center gap-2 rounded-full bg-cherry px-6 py-3 font-semibold bg-[#96324A] text-white transition disabled:cursor-not-allowed ">

              <Send size={16} />
              {sending ? "Sending..." : "Submit review"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
