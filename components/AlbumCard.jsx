import {
  Camera,
  Image as ImageIcon,
  MoreHorizontal,
  MoreVertical,
  Share2,
} from "lucide-react";

export function AlbumCard({ album, variant = "desktop" }) {
  return (
    <article className={album.empty ? "album-card empty-album" : "album-card"}>
      <AlbumMosaic album={album} />
      <div className="album-card-body">
        <div className="album-title-line">
          <h2>{album.title}</h2>
          <button type="button" aria-label={`More options for ${album.title}`}>
            {variant === "mobile" ? (
              <MoreHorizontal size={21} />
            ) : (
              <MoreVertical size={22} />
            )}
          </button>
        </div>
        <p>{album.description}</p>
        <div className="album-card-meta">
          <span className="shared-pill-wrap">
            {album.shared && (
              <span className="shared-pill">
                <Share2 size={13} />
                Shared
              </span>
            )}
            <span>{album.count}</span>
          </span>
          {album.time && <time>{album.time}</time>}
        </div>
      </div>
    </article>
  );
}

function AlbumMosaic({ album }) {
  if (album.empty) {
    return (
      <div className="album-mosaic empty-mosaic">
        <Camera size={50} />
        <span>Start new collection</span>
      </div>
    );
  }

  return (
    <div className="album-mosaic">
      {album.images.map((src, index) =>
        src ? (
          <div className="mosaic-cell" key={`${album.title}-${index}`}>
            <img
              src={src}
              alt={`${album.title} preview ${index + 1}`}
              loading="lazy"
            />
            {album.shared && index === 0 && (
              <span className="desktop-shared-badge">Shared</span>
            )}
          </div>
        ) : (
          <div
            className="mosaic-cell placeholder-cell"
            key={`${album.title}-${index}`}
          >
            <ImageIcon size={24} />
          </div>
        ),
      )}
    </div>
  );
}
