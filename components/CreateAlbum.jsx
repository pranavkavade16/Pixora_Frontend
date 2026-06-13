import {
  Search,
  Plus,
  MoreVertical,
  Share2,
  Image as ImageIcon,
} from "lucide-react";
const CreateAlbumCard = () => {
  return (
    <article className="album-card create-card">
      <div className="create-placeholder">
        <ImageIcon size={48} />
        <span>Start new collection</span>
      </div>

      <div className="album-info">
        <div className="album-top">
          <div>
            <h3>Untitled Album</h3>
            <p>Awaiting your first curated memories.</p>
          </div>

          <button>
            <MoreVertical size={18} />
          </button>
        </div>

        <span className="album-count">0 PHOTOS</span>
      </div>
    </article>
  );
};

export default CreateAlbumCard;
