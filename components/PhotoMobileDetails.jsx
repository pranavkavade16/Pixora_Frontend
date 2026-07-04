import { useState } from "react";
import { Plus, Share2, Star, Trash2, X } from "lucide-react";
import { formatDate } from "../utils/formatDate";

export default function PhotoMobileDetails({
  photo,
  favorite,
  onToggleFavorite,
  tags,
  onRemoveTag,
  onAddTag,
}) {
  const [newTag, setNewTag] = useState("");

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

  const handleAddTag = () => {
    if (!newTag.trim()) return;

    const tag = newTag.startsWith("#") ? newTag : `#${newTag}`;

    onAddTag(tag);
    setNewTag("");
  };

  return (
    <section
      className="
        h-full
        overflow-y-auto
        bg-[#faf9f7]
      "
    >
      <div className="px-6 py-7">
        {/* =====================================
            HEADER
        ===================================== */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1
              className="
                text-[52px]
                font-medium
                leading-[0.92]
                tracking-tighter
                text-[#111110]
              "
            >
              Ethereal
              <br />
              Symmetry
              <br />
              #04
            </h1>

            <p
              className="
                mt-5
                text-[17px]
                leading-[1.6]
                text-[#5f5e5b]
              "
            >
              Captured in unknown location,
              <br />• {formatDate(photo?.createdAt)}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={onToggleFavorite}
              className={`
                flex h-12 w-12
                items-center justify-center
                rounded-xl
                border

                ${
                  favorite
                    ? "border-[#f59e0b]/30 bg-[#fef3c7]"
                    : "border-[#e5e4e1] bg-white"
                }
              `}
            >
              <Star
                size={20}
                fill={favorite ? "currentColor" : "none"}
                className={favorite ? "text-[#f59e0b]" : "text-[#5f5e5b]"}
              />
            </button>

            <button
              type="button"
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-xl
                border border-[#e5e4e1]
                bg-white
                text-[#5f5e5b]
              "
            >
              <Share2 size={20} />
            </button>

            <button
              type="button"
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-xl
                border border-[#e5e4e1]
                bg-white
                text-[#dc2626]
              "
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        {/* =====================================
            TAGS
        ===================================== */}
        <div className="mt-10">
          <div className="flex flex-wrap gap-2">
            {photo?.tags?.map((tag) => (
              <div
                key={tag}
                className="
                  inline-flex
                  items-center
                  gap-1

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
                h-11
                flex-1

                rounded-xl
                border border-[#e5e4e1]

                bg-white

                px-4

                text-sm

                outline-none
              "
            />

            <button
              type="button"
              onClick={handleAddTag}
              className="
                flex h-11
                items-center gap-2

                rounded-xl

                bg-[#4241bc]

                px-4

                text-sm
                text-white
              "
            >
              <Plus size={16} />
              Add
            </button>
          </div>
        </div>

        {/* =====================================
            METADATA
        ===================================== */}
        <div
          className="
            mt-10

            grid
            grid-cols-2
            gap-x-8
            gap-y-7

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
                  tracking-[0.14em]
                  text-[#a8a7a4]
                "
              >
                {item.label}
              </p>

              <p
                className="
                  mt-2

                  text-[24px]
                  font-medium
                  leading-none

                  text-[#111110]
                "
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* =====================================
            EXTRA SPACE
        ===================================== */}
        <div className="h-10" />
      </div>
    </section>
  );
}
