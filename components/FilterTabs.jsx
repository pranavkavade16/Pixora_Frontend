export function FilterTabs() {
  return (
    <div
      role="tablist"
      aria-label="Album filters"
      className="
        flex items-center
        border-b border-[#e5e4e1]

        max-[767px]:gap-[14px]
        max-[767px]:overflow-x-auto
        max-[767px]:border-b-0
        max-[767px]:[scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
      "
    >
      <button
        type="button"
        role="tab"
        aria-selected="true"
        className="
          min-w-[110px]
          h-[54px]
          px-6
          text-[13px]
          text-[#4241bc]
          border-b-2 border-[#4241bc]
          bg-transparent

          max-[767px]:min-w-auto
          max-[767px]:h-7
          max-[767px]:rounded-full
          max-[767px]:border-0
          max-[767px]:bg-[#4241bc]
          max-[767px]:px-[22px]
          max-[767px]:text-[11px]
          max-[767px]:text-white
        "
      >
        <span className="max-[767px]:hidden">All Albums</span>
        <span className="hidden max-[767px]:inline">All</span>
      </button>

      <button
        type="button"
        role="tab"
        aria-selected="false"
        className="
          min-w-[110px]
          h-[54px]
          px-6
          text-[13px]
          text-[#5f5e5b]
          border-b-2 border-transparent
          bg-transparent

          max-[767px]:min-w-auto
          max-[767px]:h-7
          max-[767px]:rounded-full
          max-[767px]:border-0
          max-[767px]:bg-[#efeeec]
          max-[767px]:px-[22px]
          max-[767px]:text-[11px]
          max-[767px]:text-[#464553]
        "
      >
        <span className="max-[767px]:hidden">Shared with me</span>
        <span className="hidden max-[767px]:inline">Shared</span>
      </button>

      <button
        type="button"
        role="tab"
        aria-selected="false"
        className="
          min-w-[110px]
          h-[54px]
          px-6
          text-[13px]
          text-[#5f5e5b]
          border-b-2 border-transparent
          bg-transparent

          max-[767px]:min-w-auto
          max-[767px]:h-7
          max-[767px]:rounded-full
          max-[767px]:border-0
          max-[767px]:bg-[#efeeec]
          max-[767px]:px-[22px]
          max-[767px]:text-[11px]
          max-[767px]:text-[#464553]
        "
      >
        My Albums
      </button>
    </div>
  );
}
