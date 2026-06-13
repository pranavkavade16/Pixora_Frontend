import {
  Search,
  Plus,
  MoreVertical,
  Share2,
  Image as ImageIcon,
} from "lucide-react";
const AlbumCard = ({ album }) => {
  return (
    <article className="album-card">
      <div className="album-mosaic">
        {album.images.map((img, index) =>
          img ? (
            <img key={index} src={img} alt="" />
          ) : (
            <div key={index} className="empty-slot">
              <ImageIcon size={28} />
            </div>
          ),
        )}

        {album.shared && <span className="shared-badge">SHARED</span>}
      </div>

      <div className="album-info">
        <div className="album-top">
          <div>
            <h3>{album.title}</h3>
            <p>{album.description}</p>
          </div>

          <button>
            <MoreVertical size={18} />
          </button>
        </div>

        <span className="album-count">{album.count} PHOTOS</span>
      </div>
    </article>
  );
};

export default AlbumCard;
