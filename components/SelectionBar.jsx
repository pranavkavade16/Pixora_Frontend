import { X, Share2, ArrowDownToLine, Trash2 } from "lucide-react";

const SelectionBar = ({ count, onClear }) => {
  return (
    <aside
      aria-live="polite"
      className={`
        fixed right-0 left-0 z-[30]
        transition-all duration-200

        bottom-[30px]
        pointer-events-none
        opacity-0
        translate-y-6

        ${count > 0 ? "pointer-events-auto opacity-100 translate-y-0" : ""}

        max-[767px]:bottom-0
        max-[767px]:opacity-100
        max-[767px]:translate-y-full

        ${count > 0 ? "max-[767px]:translate-y-0" : ""}
      `}
    >
      <div
        className="
          mx-auto
          flex min-h-[73px]
          w-[min(842px,calc(100%-48px))]
          items-center justify-between

          rounded-full
          border border-[#171817]
          bg-[#2f3130]
          px-7

          text-white
          shadow-[0_18px_38px_rgba(0,0,0,0.16)]

          max-[767px]:min-h-[86px]
          max-[767px]:w-full
          max-[767px]:rounded-none
          max-[767px]:border-0
          max-[767px]:px-[30px]
          max-[767px]:py-[14px]
          max-[767px]:shadow-none
        "
      >
        {/* Count */}
        <div
          className="
            flex min-w-[220px] items-center gap-1.5 text-[17px]

            after:ml-[19px]
            after:block
            after:h-[31px]
            after:w-px
            after:bg-white/20
            after:content-['']

            max-[767px]:min-w-0
            max-[767px]:gap-4
            max-[767px]:text-[21px]
            max-[767px]:after:hidden
          "
        >
          {/* Mobile Close */}
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear selection"
            className="hidden max-[767px]:flex"
          >
            <X size={31} />
          </button>

          <strong
            className="
              text-[18px]

              max-[767px]:text-[21px]
              max-[767px]:font-normal
            "
          >
            {count}
          </strong>

          <span className="max-[767px]:hidden">photos selected</span>

          <span className="hidden max-[767px]:inline">selected</span>
        </div>

        {/* Actions */}
        <div
          className="
            flex items-center gap-[23px]

            max-[767px]:gap-[31px]
          "
        >
          <button
            type="button"
            className="
              flex items-center gap-2.5
              text-sm text-white/90

              max-[767px]:flex-col
              max-[767px]:gap-1
              max-[767px]:text-[12px]
              max-[767px]:font-bold
              max-[767px]:uppercase
              max-[767px]:tracking-[0.08em]
            "
          >
            <Share2 size={21} />
            <span>Share</span>
          </button>

          <button
            type="button"
            className="
              flex items-center gap-2.5
              text-sm text-white/90

              max-[767px]:flex-col
              max-[767px]:gap-1
              max-[767px]:text-[12px]
              max-[767px]:font-bold
              max-[767px]:uppercase
              max-[767px]:tracking-[0.08em]
            "
          >
            <ArrowDownToLine size={21} />

            <span className="max-[767px]:hidden">Download</span>

            <span className="hidden max-[767px]:inline">Save</span>
          </button>

          <button
            type="button"
            className="
              flex items-center gap-2.5
              text-sm text-[#ff6868]

              max-[767px]:flex-col
              max-[767px]:gap-1
              max-[767px]:text-[12px]
              max-[767px]:font-bold
              max-[767px]:uppercase
              max-[767px]:tracking-[0.08em]
              max-[767px]:text-[#ffd7d7]
            "
          >
            <Trash2 size={21} />
            <span>Delete</span>
          </button>

          {/* Desktop Close */}
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear selection"
            className="
              ml-4
              border-l border-white/20
              pl-6
              text-white/50

              max-[767px]:hidden
            "
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SelectionBar;
