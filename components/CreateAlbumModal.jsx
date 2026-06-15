import { LockKeyholeOpen } from "lucide-react";
import { useState } from "react";
import useAlbumContext from "../context/AlbumContext";

const MAX_ALBUM_NAME = 80;

function CreateAlbumModal({ open = true, onClose, onCreate }) {
  const [isCreateAlbumOpen, closeCreateAlbum] = useAlbumContext();
  const [albumName, setAlbumName] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  if (!isCreateAlbumOpen) {
    return null;
  }

  const submitAlbum = (event) => {
    event.preventDefault();
    onCreate?.({
      name: albumName.trim(),
      description: description.trim(),
      public: isPublic,
    });
  };

  const counterClassName =
    albumName.length >= MAX_ALBUM_NAME
      ? "album-counter limit"
      : "album-counter";

  return (
    <div className="create-album-modal" role="presentation">
      <button
        className="create-album-backdrop"
        type="button"
        aria-label="Close new album dialog"
        onClick={closeCreateAlbum}
      />

      <section
        className="create-album-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="create-album-title"
      >
        <header className="create-album-header">
          <h2 id="create-album-title">New Album</h2>
        </header>

        <form className="create-album-form" onSubmit={submitAlbum}>
          <label className="create-album-field">
            <span>Album Name</span>
            <input
              type="text"
              value={albumName}
              onChange={(event) => setAlbumName(event.target.value)}
              maxLength={MAX_ALBUM_NAME}
              placeholder="e.g. Summer Portraits 2024"
              autoFocus
            />
            <em className={counterClassName}>
              {albumName.length} / {MAX_ALBUM_NAME}
            </em>
          </label>

          <label className="create-album-field">
            <span>Description (Optional)</span>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Briefly describe the contents of this album..."
              rows="3"
            />
          </label>

          <label className="public-album-row">
            <span className="public-album-icon" aria-hidden="true">
              <LockKeyholeOpen size={36} strokeWidth={1.7} />
            </span>
            <span className="public-album-copy">
              <strong>Public Album</strong>
              <small>Visible to anyone with the link</small>
            </span>
            <input
              type="checkbox"
              checked={isPublic}
              onChange={(event) => setIsPublic(event.target.checked)}
              aria-label="Public album"
            />
            <span className="public-album-switch" aria-hidden="true" />
          </label>

          <div className="create-album-actions">
            <button
              className="create-album-submit"
              type="submit"
              disabled={!albumName.trim()}
            >
              Create Album
            </button>
            <button
              className="create-album-cancel"
              type="button"
              onClick={onClose}
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
