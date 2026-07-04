import { useState } from "react";
import { Plus, Share2, Star, Trash2, Send, X } from "lucide-react";
import { formatDate } from "../utils/formatDate";
import useAddTags from "../features/photos/hooks/useAddTags";

export default function PhotoDesktopDetails({
  photo,
  favorite,
  onToggleFavorite,
  tags,
  comments,
  setImage,
  onRemoveTag,
  onAddTag,
  onAddComment,
}) {
  const { handleAddTags, loading } = useAddTags();
  console.log("setImage:", setImage);
  const [newTag, setNewTag] = useState("");
  const [comment, setComment] = useState("");

  const metadata = [
    {
      label: "ISO",
      value: "100",
    },
    {
      label: "Aperture",
      value: "f/2.8",
    },
    {
      label: "Shutter",
      value: "1/250s",
    },
    {
      label: "Camera",
      value: "Sony A7R IV",
    },
  ];

  const addTag = async () => {
    if (!newTag.trim()) return;

    const tag = newTag.startsWith("#") ? newTag : `#${newTag}`;

    const updatedTags = [...photo.tags, tag];
    console.log(updatedTags);
    const response = await handleAddTags(photo._id, updatedTags);

    if (response) {
      setImage((prev) => ({
        ...prev,
        data: { ...prev.data, tags: updatedTags },
      }));
    }
    setNewTag("");
  };

  const handleComment = () => {
    if (!comment.trim()) return;

    onAddComment(comment);
    setComment("");
  };

  return (
    <section
      className="
        h-full
        overflow-y-auto
        border-t border-[#e5e4e1]
        bg-white
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-350
          grid-cols-12
          gap-10

          px-8
          py-8
        "
      >
        {/* ==========================================
            LEFT SIDE
        ========================================== */}
        <div className="col-span-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1
                className="
                  text-[34px]
                  font-medium
                  leading-[1.1]
                  tracking-[-0.03em]
                  text-[#111110]
                "
              >
                {photo?.name}
              </h1>

              <p
                className="
                  mt-2
                  text-[15px]
                  text-[#5f5e5b]
                "
              >
                Captured in unknow location • {formatDate(photo?.createdAt)}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Favorite */}
              <button
                type="button"
                onClick={onToggleFavorite}
                className={`
                  flex h-12 items-center gap-2
                  rounded-xl border px-4
                  transition-all

                  ${
                    favorite
                      ? "border-[#f59e0b]/30 bg-[#fef3c7]"
                      : "border-[#e5e4e1] bg-white"
                  }
                `}
              >
                <Star
                  size={18}
                  fill={favorite ? "currentColor" : "none"}
                  className={favorite ? "text-[#f59e0b]" : "text-[#5f5e5b]"}
                />

                <span className="text-sm">Favorite</span>
              </button>

              {/* Share */}
              <button
                type="button"
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-xl border border-[#e5e4e1]
                  text-[#5f5e5b]
                "
              >
                <Share2 size={18} />
              </button>

              {/* Delete */}
              <button
                type="button"
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-xl border border-[#e5e4e1]
                  text-[#dc2626]
                "
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              {photo?.tags?.map((tag) => (
                <div
                  key={tag}
                  className="
                    inline-flex items-center gap-1
                    rounded-full
                    border border-[#e5e4e1]
                    bg-[#f4f3f1]
                    px-3 py-1.5
                  "
                >
                  <span
                    className="
                      text-[13px]
                      text-[#464553]
                    "
                  >
                    {tag}
                  </span>

                  <button
                    type="button"
                    onClick={() => onRemoveTag(tag)}
                    className="text-[#a8a7a4]"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>

            {/* Add tag */}
            <div className="mt-4 flex gap-2">
              <input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add tag"
                className="
                  h-10 w-55
                  rounded-xl border border-[#e5e4e1]
                  px-3
                  text-sm
                  outline-none
                "
              />

              <button
                type="button"
                onClick={addTag}
                className="
                  flex h-10 items-center gap-2
                  rounded-xl
                  bg-[#4241bc]
                  px-4
                  text-sm text-white
                "
              >
                <Plus size={16} />
                Add
              </button>
            </div>
          </div>

          {/* Metadata */}
          <div
            className="
              mt-10
              grid grid-cols-4
              gap-6
              border-t border-[#e5e4e1]
              pt-8
            "
          >
            {metadata.map((item) => (
              <div key={item.label}>
                <p
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.12em]
                    text-[#a8a7a4]
                  "
                >
                  {item.label}
                </p>

                <p
                  className="
                    mt-2
                    text-[22px]
                    font-medium
                    text-[#111110]
                  "
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            RIGHT SIDE
        ========================================== */}
        <div
          className="
            col-span-4
            border-l border-[#e5e4e1]
            pl-8
          "
        >
          <h2
            className="
              text-[22px]
              font-medium
              text-[#111110]
            "
          >
            Engagement
          </h2>

          {/* Comments */}
          <div
            className="
              mt-6
              max-h-65
              overflow-y-auto
              space-y-5
            "
          >
            {photo?.comments?.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <div
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-full
                    text-[11px]
                    font-bold
                  "
                  style={{
                    backgroundColor: comment.avatarBg,
                  }}
                >
                  {comment.initials}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        text-sm
                        font-medium
                      "
                    >
                      {comment.name}
                    </span>

                    <span
                      className="
                        text-xs
                        text-[#a8a7a4]
                      "
                    >
                      {comment.time}
                    </span>
                  </div>

                  <p
                    className="
                      mt-1
                      text-sm
                      leading-relaxed
                      text-[#464553]
                    "
                  >
                    {comment.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Comment input */}
          <div className="mt-8">
            <div className="relative">
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                className="
                  h-12 w-full
                  rounded-xl
                  border border-[#e5e4e1]
                  bg-[#f4f3f1]

                  pl-4 pr-12
                  text-sm

                  outline-none
                "
              />

              <button
                type="button"
                onClick={handleComment}
                className="
                  absolute
                  right-2 top-1/2
                  -translate-y-1/2

                  flex h-8 w-8
                  items-center justify-center

                  text-[#4241bc]
                "
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
