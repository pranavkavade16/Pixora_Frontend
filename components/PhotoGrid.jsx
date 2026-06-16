import PhotoCard from "./PhotoCard";

const PhotoGrid = ({
  photos: desktopPhotos,
  mobilePhotos,
  selected,
  onToggle,
}) => {
  return (
    <>
      {/* Desktop / Tablet Grid */}
      <section
        aria-label="Summer 2026 photo grid"
        className="
          grid
          grid-cols-4
          gap-4.5

          max-[1100px]:grid-cols-3
          max-[767px]:hidden
        "
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

      {/* Mobile Grid */}
      <section
        aria-label="Ethereal Coastlines photo grid"
        className="
          hidden

          max-[767px]:grid
          max-[767px]:grid-cols-2
          max-[767px]:gap-3.25
        "
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
