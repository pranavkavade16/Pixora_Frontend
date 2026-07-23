import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FullScreenViewer = ({ photo }) => {
  const navigate = useNavigate();

  return (
    <div
      className="
            fixed
            inset-0
            z-[100]

            bg-black

            overflow-hidden

            group
        "
    >
      <button
        onClick={() => navigate(-1)}
        className="
                absolute

                top-8
                right-8

                z-50

                text-white/70

                hover:text-white
            "
      >
        <X size={34} />
      </button>

      <div
        className="
                flex

                h-full

                items-center
                justify-center

                px-20
            "
      >
        <img
          src={photo.imageUrl}
          alt={photo.name}
          className="
                    max-h-[90vh]
                    max-w-[90vw]

                    object-contain
                "
        />
      </div>
    </div>
  );
};

export default FullScreenViewer;
