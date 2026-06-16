import { Star } from "lucide-react";

const PhotoCard = ({ photo, selected, onToggle }) => {
  return (
    <button
      type="button"
      onClick={() => onToggle(photo.id)}
      aria-pressed={selected}
      className={`
        group relative aspect-4/3
        overflow-hidden rounded-md
        border border-[rgba(17,17,16,0.14)]
        bg-[linear-gradient(135deg,#edf7f7,#e5e4e1)]
        p-0 text-left

        active:scale-[0.985]

        ${selected ? "" : ""}
      `}
    >
      {/* Image */}
      <img
        src={photo.src}
        alt={photo.title}
        loading="lazy"
        className="
          absolute inset-0 z-2
          h-full w-full object-cover
          transition-transform duration-420
          group-hover:scale-[1.045]

          max-[767px]:group-hover:scale-100
        "
      />

      {/* Fallback */}
      <span
        aria-hidden="true"
        className="
          absolute inset-0 z-1
          flex items-start
          p-2.25
          text-[20px]
          leading-tight
          text-[#111110]
        "
      >
        {photo.title}
      </span>

      {/* Overlay */}
      <span
        className={`
          absolute inset-0 z-3
          transition-colors duration-150
          ${selected ? "bg-black/10" : "bg-transparent group-hover:bg-black/10"}
        `}
      />

      {/* Favorite */}
      <span
        className={`
          absolute top-3.5 right-3.5 z-4
          flex items-center justify-center
          rounded-full
          transition-all duration-150

          ${
            photo.favorite
              ? `
                opacity-100 scale-100
                text-[#f59e0b]
              `
              : `
                opacity-0 scale-90
                text-[#343434]
                group-hover:opacity-100
                group-hover:scale-100
              `
          }

          h-8.75 w-8.75
          bg-white/90
          shadow-[0_2px_8px_rgba(0,0,0,0.16)]

          max-[767px]:h-10.5
          max-[767px]:w-10.5
          max-[767px]:opacity-100
          max-[767px]:scale-100
          max-[767px]:bg-black/25
          max-[767px]:text-white
        `}
      >
        <Star size={20} fill={photo.favorite ? "currentColor" : "none"} />
      </span>
    </button>
  );
};

export default PhotoCard;
