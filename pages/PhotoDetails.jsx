import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Edit3,
  Image as ImageIcon,
  Plus,
  Send,
  Share2,
  Star,
  Trash2,
  X,
  ZoomIn,
} from "lucide-react";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDbrqpP89D9jmcV-vWRPSytgs05wN4rTezUgsmKjjEqGqVSoVolK4o62HVUtQci-c-FQcUBnBy5LAXNnqD2uwofnT6PVE0kg-9-bxYiKD6_z7QkpbIrrPAnWDy50uigz3-KipkCc34meUGFV8dGZiRjzHyrT396bxfpogazwQru5t-To8qwXXiEQ38IZduEyUoWPK6gx_EL3NPuJW4qDKmMEmB18UtJJNobBnlFXZ5t8JxWf9sM9Rl8zPwwWMIc_yxJ3Gv2hUcnW-i5";

const initialTags = ["#minimalism", "#architecture", "#editorial"];

const comments = [
  {
    initials: "ED",
    name: "Elena Drago",
    time: "2h ago",
    text: "The composition here is breathtaking. The balance of light and shadow is perfect.",
    avatarBg: "bg-[#e5e2de]",
  },
  {
    initials: "MK",
    name: "Marcus Keat",
    time: "5h ago",
    text: "Great use of negative space.",
    avatarBg: "bg-[#e2dfff]",
  },
];

function TagPill({ label, onRemove }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-[#e5e4e1] bg-[#f4f3f1] px-3 py-1 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
      <span className="text-[13px] text-[#464553]">{label}</span>
      <button
        type="button"
        aria-label={`Remove ${label}`}
        onClick={onRemove}
        className="flex h-4 w-4 items-center justify-center text-[16px] leading-none text-[#a8a7a4] transition-colors hover:text-[#dc2626]"
      >
        <X size={16} strokeWidth={2} />
      </button>
    </div>
  );
}

function CommentItem({ comment }) {
  return (
    <div className="flex gap-3">
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${comment.avatarBg} text-[10px] font-bold text-[#1a1c1b]`}
      >
        {comment.initials}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[13px] font-semibold text-[#111110]">
            {comment.name}
          </span>
          <span className="text-[12px] text-[#a8a7a4]">{comment.time}</span>
        </div>
        <p className="mt-0.5 text-[14px] leading-[1.5] text-[#464553]">
          {comment.text}
        </p>
      </div>
    </div>
  );
}

function PhotoDetailPage() {
  const [favorite, setFavorite] = useState(false);
  const [tags, setTags] = useState(initialTags);
  const [comment, setComment] = useState("");

  const metrics = useMemo(
    () => [
      { label: "ISO", value: "100" },
      { label: "Aperture", value: "f/2.8" },
      { label: "Shutter", value: "1/250s" },
      { label: "Camera", value: "Sony A7R IV" },
    ],
    [],
  );

  return (
    <main className="fixed inset-0 z-50 flex h-screen flex-col overflow-hidden bg-[#faf9f7] text-[#111110]">
      {/* Top viewing area */}
      <section className="relative flex-[0_0_60vh] overflow-hidden bg-black md:flex-[1_1_auto] md:h-[calc(100vh-400px)] md:min-h-[500px] md:flex-none">
        <button
          type="button"
          aria-label="Close"
          className="absolute left-6 top-6 z-20 text-white/70 transition-transform duration-150 hover:text-white active:scale-95 md:left-6 md:top-6"
        >
          <X size={32} strokeWidth={1.8} />
        </button>

        <button
          type="button"
          aria-label="Previous image"
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-3 text-white/90 backdrop-blur-md transition-all active:scale-90 hover:bg-white/10 md:left-8"
        >
          <ChevronLeft size={28} strokeWidth={1.8} />
        </button>

        <button
          type="button"
          aria-label="Next image"
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-3 text-white/90 backdrop-blur-md transition-all active:scale-90 hover:bg-white/10 md:right-8"
        >
          <ChevronRight size={28} strokeWidth={1.8} />
        </button>

        <div className="flex h-full w-full items-center justify-center p-6 md:p-12">
          <img
            src={HERO_IMAGE}
            alt="Ethereal Symmetry #04"
            className="max-h-full max-w-full rounded-xl object-contain shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        <div className="absolute bottom-6 right-6">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-[13px] text-white backdrop-blur-md transition-all hover:bg-white/20"
          >
            <ZoomIn size={18} strokeWidth={1.8} />
            Full Screen
          </button>
        </div>
      </section>

      {/* Bottom details panel */}
      <section className="flex-1 overflow-y-auto border-t border-[#e5e4e1] bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:h-[400px] md:flex-none">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-4 py-8 md:grid-cols-12 md:px-12">
          {/* Left column */}
          <div className="flex min-w-0 flex-col gap-6 md:col-span-7 lg:col-span-8">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <h1 className="max-w-[7ch] text-[22px] font-medium tracking-[-0.02em] text-[#111110] md:max-w-none md:text-[28px] md:leading-[1.2]">
                  Ethereal Symmetry #04
                </h1>
                <p className="mt-1 text-[15px] leading-[1.65] text-[#464553]">
                  Captured in Kyoto, Japan • Oct 12, 2023
                </p>
              </div>

              <div className="flex shrink-0 gap-3">
                <button
                  type="button"
                  onClick={() => setFavorite((v) => !v)}
                  className={`inline-flex h-14 items-center gap-2 rounded-xl border px-5 transition-all ${
                    favorite
                      ? "border-[#f59e0b]/30 bg-[#f59e0b]/5"
                      : "border-[#e5e4e1] bg-white hover:bg-[#f4f3f1]"
                  }`}
                >
                  <Star
                    size={22}
                    fill={favorite ? "currentColor" : "none"}
                    className={favorite ? "text-[#f59e0b]" : "text-[#474553]"}
                  />
                  <span className="hidden text-[15px] text-[#474553] sm:inline">
                    Favorite
                  </span>
                </button>

                <button
                  type="button"
                  aria-label="Share"
                  className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-[#e5e4e1] bg-white text-[#474553] transition-all hover:bg-[#f4f3f1]"
                >
                  <Share2 size={20} strokeWidth={1.9} />
                </button>

                <button
                  type="button"
                  aria-label="Delete"
                  className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-[#e5e4e1] bg-white text-[#dc2626] transition-all hover:bg-[#f4f3f1]"
                >
                  <Trash2 size={20} strokeWidth={1.9} />
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 py-2">
              {tags.map((tag) => (
                <TagPill
                  key={tag}
                  label={tag}
                  onRemove={() =>
                    setTags((current) => current.filter((t) => t !== tag))
                  }
                />
              ))}

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-dashed border-[#e5e4e1] px-3 py-1 text-[#a8a7a4] transition-colors hover:border-[#4241bc] hover:text-[#4241bc]"
              >
                <Plus size={16} strokeWidth={2} />
                <span className="text-[13px]">Add Tag</span>
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6 border-t border-[#e5e4e1] pt-6 md:grid-cols-4">
              {metrics.map((item) => (
                <div key={item.label}>
                  <p className="mb-1 text-[12px] uppercase tracking-[0.12em] text-[#a8a7a4]">
                    {item.label}
                  </p>
                  <p className="text-[20px] font-medium leading-none text-[#111110]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="flex min-w-0 flex-col gap-6 md:col-span-5 md:border-l md:border-[#e5e4e1] md:pl-6 lg:col-span-4">
            <h2 className="text-[20px] font-medium leading-[1.3] text-[#111110]">
              Engagement
            </h2>

            <div className="max-h-48 overflow-y-auto pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col gap-4">
                {comments.map((item) => (
                  <CommentItem key={item.name} comment={item} />
                ))}
              </div>
            </div>

            <div className="mt-auto border-t border-[#e5e4e1] pt-4">
              <div className="relative">
                <input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full rounded-xl border border-[#e5e4e1] bg-[#f4f3f1] px-4 py-3 pr-12 text-[15px] text-[#111110] outline-none transition-all placeholder:text-[#2f3130] focus:ring-2 focus:ring-[#4241bc]/20"
                />
                <button
                  type="button"
                  aria-label="Send comment"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-[#4241bc] transition-all hover:bg-[#5b5bd6]/10"
                >
                  <Send size={18} strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PhotoDetailPage;
