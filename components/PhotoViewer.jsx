// src/components/photo-detail/PhotoViewer.jsx

import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PhotoViewer({
  image,
  title,
  onPrevious,
  onNext,
}) {
  const navigate = useNavigate();

  return (
    <section
      className="
        relative
        h-[45vh]
        min-h-80

        bg-black

        md:h-[52vh]
        lg:h-[58vh]
        xl:h-[60vh]
      "
    >
      {/* =========================
          CLOSE BUTTON
      ========================= */}
      <button
        type="button"
        aria-label="Close photo"
        onClick={() => navigate(-1)}
        className="
          absolute
          left-4
          top-4
          z-30

          flex
          h-11
          w-11
          items-center
          justify-center

          rounded-full

          bg-black/30
          text-white

          backdrop-blur-sm

          transition-all
          duration-200

          hover:bg-black/50
          active:scale-95

          md:left-6
          md:top-6
        "
      >
        <X
          size={24}
          strokeWidth={2}
        />
      </button>

      {/* =========================
          PREVIOUS BUTTON
      ========================= */}
      <button
        type="button"
        aria-label="Previous photo"
        onClick={onPrevious}
        className="
          absolute
          left-3
          top-1/2
          z-20

          hidden
          -translate-y-1/2

          items-center
          justify-center

          rounded-full

          bg-white/10
          p-3

          text-white

          backdrop-blur-sm

          transition-all
          duration-200

          hover:bg-white/20
          active:scale-95

          md:flex
          lg:left-6
        "
      >
        <ChevronLeft
          size={28}
          strokeWidth={1.8}
        />
      </button>

      {/* =========================
          NEXT BUTTON
      ========================= */}
      <button
        type="button"
        aria-label="Next photo"
        onClick={onNext}
        className="
          absolute
          right-3
          top-1/2
          z-20

          hidden
          -translate-y-1/2

          items-center
          justify-center

          rounded-full

          bg-white/10
          p-3

          text-white

          backdrop-blur-sm

          transition-all
          duration-200

          hover:bg-white/20
          active:scale-95

          md:flex
          lg:right-6
        "
      >
        <ChevronRight
          size={28}
          strokeWidth={1.8}
        />
      </button>

      {/* =========================
          IMAGE CONTAINER
      ========================= */}
      <div
        className="
          flex
          h-full
          w-full
          items-center
          justify-center

          px-4
          py-6

          md:px-10
          md:py-10

          lg:px-16
        "
      >
        <img
          src={image}
          alt={title}
          loading="eager"
          className="
            h-full
            max-h-[90%]

            w-auto
            max-w-full

            object-contain

            rounded-xl

            shadow-[0_20px_60px_rgba(0,0,0,0.35)]

            transition-transform
            duration-500

            hover:scale-[1.01]
          "
        />
      </div>

      {/* =========================
          FULL SCREEN BUTTON
      ========================= */}
      <div
        className="
          absolute
          bottom-4
          right-4

          md:bottom-6
          md:right-6
        "
      >
        <button
          type="button"
          className="
            inline-flex
            items-center
            gap-2

            rounded-xl

            bg-white/10

            px-4
            py-3

            text-sm
            text-white

            backdrop-blur-md

            transition-all
            duration-200

            hover:bg-white/20
            active:scale-95
          "
        >
          <Maximize2
            size={18}
            strokeWidth={2}
          />

          <span className="hidden sm:inline">
            Full Screen
          </span>
        </button>
      </div>

      {/* =========================
          MOBILE PHOTO INDEX
      ========================= */}
      <div
        className="
          absolute
          bottom-4
          left-1/2

          -translate-x-1/2

          rounded-full

          bg-black/50

          px-3
          py-1

          text-xs
          text-white

          backdrop-blur-sm

          md:hidden
        "
      >
        1 / 24
      </div>
    </section>
  );
}