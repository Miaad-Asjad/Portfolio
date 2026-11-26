import { useEffect, useState } from "react";
import { Heart, MessageCircleHeart, Quote, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const API_URL = import.meta.env.VITE_API_URL;

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const message = review.message || "";
  const isLong = message.trim().length > 170;

  return (
    <Reveal className="h-full">
      <article className="soft-card flex h-full flex-col justify-between rounded-[1.6rem] p-6">
        <div>
          <Quote size={20} className="text-rose-300" />

          <p
            className={`display mt-3.5 text-lg leading-snug text-ink/90 sm:text-xl ${
              expanded ? "" : "line-clamp-4"
            }`}
          >
            “{message}”
          </p>

          {isLong && (
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-2.5 text-xs font-medium text-cherry underline-offset-4 hover:underline"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>

        <div className="mt-5 border-t border-rose-100 pt-4">
          <p className="text-sm font-semibold text-ink">{review.clientName}</p>
          <p className="mt-0.5 text-xs text-ink/55">
            {review.projectName} · Client review
          </p>
        </div>
      </article>
    </Reveal>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(Boolean(API_URL));

  useEffect(() => {
    if (!API_URL) {
      setLoading(false);
      return;
    }

    let active = true;

    fetch(`${API_URL}/api/reviews`)
      .then((response) => {
        if (!response.ok) throw new Error("Could not load reviews");
        return response.json();
      })
      .then((data) => {
        if (active) {
          setReviews(Array.isArray(data) ? data : data.reviews || []);
        }
      })
      .catch(() => {
        if (active) setReviews([]);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="reviews" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="04"
          eyebrow="Kind words, when they're real"
          title={
            <>
              A little love from the{" "}
              <span className="italic text-cherry">
                people I work with.
              </span>
            </>
          }
          subtitle="Every review here comes from a real client and is shared with their permission."
        />

        {loading ? (
          <div className="rounded-3xl border border-rose-200 bg-white p-10 text-center text-sm text-ink/60">
            Gathering kind words…
          </div>
        ) : reviews.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review._id || review.id} review={review} />
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-dashed border-rose-300 bg-white/75 px-6 py-12 text-center sm:px-12 sm:py-16">
              <span className="absolute right-8 top-5 rotate-12 text-4xl text-rose-200">
                ♡
              </span>

              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blush text-cherry">
                <MessageCircleHeart size={25} />
              </span>

              <p className="hand mt-5 text-3xl text-cherry">
                this space is saving a seat...
              </p>

              <h3 className="display mt-2 text-2xl sm:text-3xl">
                For real words from real people.
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-ink/60">
                I only publish feedback from actual clients who have agreed
                to share their words. When I have permission to share their
                words, you’ll find them here.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-xs text-cherry">
                <Sparkles size={14} />
                Authenticity over a full page
              </div>
            </div>
          </Reveal>
        )}

        <p className="mt-5 flex items-center justify-center gap-2 text-xs text-ink/45">
          <Heart size={13} /> Real feedback only. Always with permission.
        </p>
      </div>
    </section>
  );
}