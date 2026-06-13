import PhotoCard from "./PhotoCard";
const PhotoGrid = ({
  photos: desktopPhotos,
  mobilePhotos,
  selected,
  onToggle,
}) => {
  return (
    <>
      <section
        className="photo-grid desktop-grid"
        aria-label="Summer 2026 photo grid"
      >
        {desktopPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            selected={selected.has(photo.id)}
            onToggle={onToggle}
          />
        ))}
      </section>
      <section
        className="photo-grid mobile-grid"
        aria-label="Ethereal Coastlines photo grid"
      >
        {mobilePhotos.slice(0, 4).map((photo, index) => (
          <PhotoCard
            key={`mobile-${photo.id}`}
            photo={{
              ...photo,
              id: photo.id + 100,
              favorite: index === 1 || photo.favorite,
            }}
            selected={selected.has(photo.id + 100)}
            onToggle={onToggle}
          />
        ))}
      </section>
    </>
  );
};

export default PhotoGrid;
