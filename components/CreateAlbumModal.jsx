import { LockKeyholeOpen } from "lucide-react";
import { useState } from "react";
import useAlbumContext from "../context/AlbumContext";
import { useAddAlbum } from "../features/albums/hooks/useAddAlbum";

const MAX_ALBUM_NAME = 80;

function CreateAlbumModal({ onClose, onCreate }) {
  const { isCreateAlbumOpen, closeCreateAlbum } = useAlbumContext();
  const { handleAddAlbum, loading } = useAddAlbum();

  const [albumName, setAlbumName] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  if (!isCreateAlbumOpen) return null;

  const submitAlbum = (event) => {
    event.preventDefault();
    console.log("Clicked");

    handleAddAlbum?.({
      name: albumName.trim(),
      description: description.trim(),
      ownerId: "6a31773c0dc54daa4bd9902e",
      sharedUsers: [],
    });
  };

  const isLimitReached = albumName.length >= MAX_ALBUM_NAME;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-4.5"
      role="presentation"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close new album dialog"
        onClick={closeCreateAlbum}
        className="absolute inset-0 bg-black/50 backdrop-blur-[5px]"
      />

      {/* Modal */}
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="create-album-title"
        className="
          relative z-10
          w-full max-w-125
          max-h-[calc(100vh-36px)]
          overflow-auto
          rounded-2xl
          border border-[#e5e4e1]
          bg-white
          shadow-[0_18px_48px_rgba(0,0,0,0.2)]
        "
      >
        {/* Header */}
        <header className="border-b border-[#e5e4e1] px-8 py-7 sm:px-8 sm:py-6">
          <h2
            id="create-album-title"
            className="text-[30px] font-semibold tracking-[-0.03em] leading-none text-[#111110]"
          >
            New Album
          </h2>
        </header>

        {/* Form */}
        <form onSubmit={submitAlbum} className="grid gap-6 p-8 sm:p-8">
          {/* Album Name */}
          <label className="grid gap-2.5">
            <span className="text-[15px] text-[#2d2c3d]">Album Name</span>

            <input
              type="text"
              autoFocus
              value={albumName}
              maxLength={MAX_ALBUM_NAME}
              placeholder="e.g. Summer Portraits 2024"
              onChange={(e) => setAlbumName(e.target.value)}
              className="
                h-14
                w-full
                rounded-[10px]
                border border-[#e5e4e1]
                px-4.5
                text-base
                outline-none
                transition-colors
                placeholder:text-[#a6a4a0]
                focus:border-[#d8d6d2]
              "
            />

            <em
              className={`justify-self-end text-sm not-italic ${
                isLimitReached ? "text-red-600" : "text-[#8f8d89]"
              }`}
            >
              {albumName.length} / {MAX_ALBUM_NAME}
            </em>
          </label>

          {/* Description */}
          <label className="grid gap-2.5">
            <span className="text-[15px] text-[#2d2c3d]">
              Description (Optional)
            </span>

            <textarea
              rows={3}
              value={description}
              placeholder="Briefly describe the contents of this album..."
              onChange={(e) => setDescription(e.target.value)}
              className="
                min-h-28
                w-full
                resize-none
                rounded-[10px]
                border border-[#e5e4e1]
                px-4.5
                py-4
                text-base
                outline-none
                placeholder:text-[#a6a4a0]
                focus:border-[#d8d6d2]
              "
            />
          </label>

          {/* Public Album */}
          <div className="grid min-h-13 grid-cols-[34px_1fr_58px] items-center gap-3">
            <span className="flex items-center justify-center text-[#5f5e5b]">
              <LockKeyholeOpen size={30} strokeWidth={1.7} />
            </span>

            <span className="flex flex-col gap-1">
              <strong className="text-base font-medium text-[#111110]">
                Public Album
              </strong>

              <small className="truncate text-sm text-[#5f5e5b]">
                Visible to anyone with the link
              </small>
            </span>

            <button
              type="button"
              aria-pressed={isPublic}
              aria-label="Public album"
              onClick={() => setIsPublic((prev) => !prev)}
              className={`
                relative flex h-8.5 w-14.5
                items-center rounded-full p-0.75
                transition-all
                ${isPublic ? "bg-[#4241bc]" : "bg-[#e9e8e6]"}
              `}
            >
              <span
                className={`
                  h-7 w-7 rounded-full bg-white
                  shadow-md transition-transform
                  ${isPublic ? "translate-x-6" : "translate-x-0"}
                `}
              />
            </button>
          </div>

          {/* Actions */}
          <div className="grid gap-3 pt-2">
            <button
              type="submit"
              disabled={!albumName.trim()}
              className="
                h-13.5
                w-full
                rounded-[10px]
                bg-[#4241bc]
                text-base
                font-semibold
                text-white
                transition
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              Create Album
            </button>

            <button
              type="button"
              onClick={onClose}
              className="
                h-10
                w-full
                rounded-[10px]
                text-base
                text-[#5f5e5b]
                hover:bg-gray-50
              "
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default CreateAlbumModal;
