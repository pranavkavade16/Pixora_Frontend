import {
  Camera,
  Image as ImageIcon,
  MoreHorizontal,
  MoreVertical,
  Share2,
} from "lucide-react";

export function AlbumCard({ album, variant = "desktop" }) {
  return (
    <article
      className={`
        overflow-hidden rounded-[10px] bg-white
        transition-all duration-150
        ${
          album.empty
            ? "border border-transparent"
            : "border border-transparent hover:border-[#e5e4e1] hover:shadow-sm hover:-translate-y-px"
        }
      `}
    >
      <AlbumMosaic album={album} />

      <div className="p-3 pb-3.5">
        <div className="flex items-start justify-between gap-4">
          <h2 className="truncate text-base font-medium leading-[1.35] text-[#111110]">
            {album.title}
          </h2>

          <button
            type="button"
            aria-label={`More options for ${album.title}`}
            className="flex h-7 w-7 items-center justify-center text-[#5f5e5b]"
          >
            {variant === "mobile" ? (
              <MoreHorizontal size={21} />
            ) : (
              <MoreVertical size={22} />
            )}
          </button>
        </div>

        <p className="mt-1 mb-2.5 truncate text-xs leading-[1.45] text-[#5f5e5b]">
          {album.description}
        </p>

        <div className="flex items-center justify-between gap-4 text-[11px] text-[#a8a7a4]">
          <span className="flex items-center gap-2">
            {album.shared && (
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-[11px] text-green-600">
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
      <div
        className="
          flex aspect-4/3 flex-col items-center justify-center gap-4
          rounded-lg border-2 border-dashed border-[#e5e4e1]
          bg-[#f4f3f1] text-[#8b8997]
        "
      >
        <Camera size={50} />
        <span className="text-[13px] text-[#464553]">
          Start new collection
        </span>
      </div>
    );
  }

  return (
    <div
      className="
        relative grid aspect-4/3
        grid-cols-2 grid-rows-2
        gap-0.75
        overflow-hidden rounded-lg
        bg-[#efeeec]
        m-1
      "
    >
      {album.images.map((src, index) =>
        src ? (
          <div
            key={`${album.title}-${index}`}
            className="relative overflow-hidden bg-[#f4f3f1]"
          >
            <img
              src={src}
              alt={`${album.title} preview ${index + 1}`}
              loading="lazy"
              className="
                h-full w-full object-cover
                transition-transform duration-300
                hover:scale-105
              "
            />

            {album.shared && index === 0 && (
              <span
                className="
                  absolute left-2 top-2 z-10
                  rounded-full
                  bg-white/80
                  px-3 py-2
                  text-[10px] font-bold uppercase
                  tracking-wider
                  backdrop-blur-md
                "
              >
                Shared
              </span>
            )}
          </div>
        ) : (
          <div
            key={`${album.title}-${index}`}
            className="
              flex items-center justify-center
              bg-[#f4f3f1]
              text-[#8b8997]
            "
          >
            <ImageIcon size={24} />
          </div>
        )
      )}
    </div>
  );
}