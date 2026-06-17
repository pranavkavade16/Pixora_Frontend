import { useState } from "react";
import { X, ImagePlus, User, Star } from "lucide-react";

const UploadPhotoModal = ({ isOpen, onClose, onUpload }) => {
  const [tags, setTags] = useState(["Portrait", "Editorial"]);

  const [tagInput, setTagInput] = useState("");
  const [personName, setPersonName] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  if (!isOpen) return null;

  const removeTag = (tag) => {
    setTags((current) => current.filter((item) => item !== tag));
  };

  const addTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();

      if (!tags.includes(tagInput.trim())) {
        setTags((prev) => [...prev, tagInput.trim()]);
      }

      setTagInput("");
    }
  };

  return (
    <div
      className="
        fixed inset-0 z-100
        flex items-center justify-center
        bg-black/50
        backdrop-blur-sm
        p-4
      "
    >
      <div
        className="
          w-full
          max-w-170

          rounded-3xl
          bg-white

          shadow-2xl

          overflow-hidden
        "
      >
        {/* Header */}

        <div
          className="
            flex items-center justify-between
            px-6 py-5
          "
        >
          <h2
            className="
              text-[32px]
              font-medium
              text-[#111110]
            "
          >
            Upload Photo
          </h2>

          <button
            onClick={onClose}
            className="
              text-[#464553]
              hover:text-black
            "
          >
            <X size={32} />
          </button>
        </div>

        {/* Body */}

        <div
          className="
            px-6 pb-6

            max-h-[70vh]
            overflow-y-auto
          "
        >
          {/* Dropzone */}

          <label
            className="
              flex
              cursor-pointer
              flex-col
              items-center
              justify-center

              rounded-[20px]
              border-2
              border-dashed
              border-[#c7c4d6]

              px-6
              py-12

              text-center

              transition-all

              hover:bg-[#f8f7ff]
            "
          >
            <input
              type="file"
              className="hidden"
              accept=".jpg,.jpeg,.png,.webp"
            />

            <div
              className="
                mb-5
                flex h-20 w-20
                items-center
                justify-center

                rounded-full
                bg-[#e2dfff]
              "
            >
              <ImagePlus size={34} className="text-[#4241bc]" />
            </div>

            <p
              className="
                text-[28px]
                font-medium
                text-[#111110]
              "
            >
              Drag and drop your photo here
            </p>

            <p
              className="
                mt-2
                text-[20px]
                text-[#5f5e5b]
              "
            >
              PNG, JPG, or WEBP up to 20MB
            </p>

            <button
              type="button"
              className="
                mt-8

                rounded-xl
                border border-[#e5e4e1]

                px-8 py-4

                text-[18px]
                font-medium

                hover:bg-[#f4f3f1]
              "
            >
              Browse files
            </button>
          </label>

          {/* Tags */}

          <div className="mt-8">
            <label
              className="
                mb-2 block
                text-lg
                text-[#464553]
              "
            >
              Tags
            </label>

            <div
              className="
                flex flex-wrap gap-2

                rounded-xl
                border border-[#e5e4e1]

                p-3
              "
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    flex items-center gap-1

                    rounded-lg
                    bg-[#e2dfff]

                    px-3 py-2

                    text-[#4241bc]
                  "
                >
                  {tag}

                  <button onClick={() => removeTag(tag)}>
                    <X size={14} />
                  </button>
                </span>
              ))}

              <input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={addTag}
                placeholder="Add tag..."
                className="
                  flex-1
                  min-w-30
                  border-none
                  outline-none
                "
              />
            </div>
          </div>

          {/* Person Name */}

          <div className="mt-6">
            <label
              className="
                mb-2 block
                text-lg
                text-[#464553]
              "
            >
              Person Name
            </label>

            <div className="relative">
              <User
                size={20}
                className="
                  absolute
                  left-4 top-1/2
                  -translate-y-1/2
                  text-[#777585]
                "
              />

              <input
                value={personName}
                onChange={(e) => setPersonName(e.target.value)}
                placeholder="Who is in this photo?"
                className="
                  h-14
                  w-full

                  rounded-xl
                  border border-[#e5e4e1]

                  pl-12 pr-4

                  outline-none

                  focus:border-[#4241bc]
                "
              />
            </div>
          </div>

          {/* Favorite */}

          <div
            className="
              mt-6

              flex items-center
              justify-between

              rounded-xl
              border border-[#e5e4e1]

              bg-[#f4f3f1]

              p-4
            "
          >
            <div
              className="
                flex items-center gap-3
              "
            >
              <Star size={24} className="text-[#f59e0b]" />

              <span className="text-lg">Mark as favorite</span>
            </div>

            <button
              type="button"
              onClick={() => setIsFavorite(!isFavorite)}
              className={`
                relative h-7 w-14 rounded-full transition-all
                ${isFavorite ? "bg-[#4241bc]" : "bg-gray-300"}
              `}
            >
              <span
                className={`
                  absolute top-1 left-1
                  h-5 w-5 rounded-full bg-white transition-all
                  ${isFavorite ? "translate-x-7" : ""}
                `}
              />
            </button>
          </div>
        </div>

        {/* Footer */}

        <div
          className="
            px-6 pb-6
            flex flex-col gap-3
          "
        >
          <button
            onClick={onUpload}
            className="
              h-14

              rounded-xl

              bg-[#4241bc]

              text-lg
              font-semibold
              text-white

              hover:bg-[#3533b0]
            "
          >
            Upload Photo
          </button>

          <button
            onClick={onClose}
            className="
              h-12

              text-lg
              text-[#5f5e5b]
            "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPhotoModal;
