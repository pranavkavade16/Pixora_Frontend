function PhotoCard({ photo, selected, onToggle }) {
  return (
    <button
      className={selected ? "photo-card selected" : "photo-card"}
      type="button"
      onClick={() => onToggle(photo.id)}
      aria-pressed={selected}
    >
      <img src={photo.src} alt={photo.title} loading="lazy" />
      <span className="image-fallback" aria-hidden="true">
        {photo.title}
      </span>
      <span className="photo-overlay" />
      <span
        className={photo.favorite ? "favorite-badge active" : "favorite-badge"}
      >
        <Star size={20} fill={photo.favorite ? "currentColor" : "none"} />
      </span>
    </button>
  );
}
