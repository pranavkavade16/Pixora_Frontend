import { Star, SlidersHorizontal, ChevronDown } from "lucide-react";

const FilterBar = () => {
  const chips = ["All", "Favorites", "Beach", "Architecture"];

  const mobileChips = [
    "All",
    "Favorites",
    "Iceland",
    "Blue Hour",
    "2024",
    "Panoramic",
  ];

  return (
    <section
      className="
        mb-8
        flex items-center justify-between gap-4.5
        border-y border-[#e5e4e1]
        py-5

        md:sticky md:top-[100px] md:z-15
        md:-mx-6 md:block
        md:border-t-0
        md:bg-[#faf9f7]/95
        md:px-6
        md:py-4.5
        md:backdrop-blur-md

        lg:static lg:m-0 lg:flex
        lg:bg-transparent lg:px-0 lg:py-5
      "
    >
      {/* Desktop Chips */}
      <div className="hidden items-center gap-2 lg:flex">
        {chips.map((chip) => (
          <button
            key={chip}
            type="button"
            className={
              chip === "All"
                ? `
                  inline-flex h-9 items-center
                  rounded-full bg-[#4241bc]
                  px-5 text-sm text-white
                `
                : `
                  inline-flex h-9 items-center
                  rounded-full bg-[#efeeec]
                  px-5 text-sm text-[#262624]
                `
            }
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Mobile Chips */}
      <div
        className="
          flex gap-3 overflow-x-auto pb-2
          scrollbar-none
          lg:hidden
        "
      >
        {mobileChips.map((chip) => (
          <button
            key={chip}
            type="button"
            className={
              chip === "All"
                ? `
                  inline-flex h-12.5 items-center gap-2
                  rounded-full bg-[#4241bc]
                  px-6 text-base text-white
                  whitespace-nowrap
                `
                : `
                  inline-flex h-12.5 items-center gap-2
                  rounded-full bg-[#efeeec]
                  px-6 text-base text-[#686562]
                  whitespace-nowrap
                `
            }
          >
            {chip === "Favorites" && <Star size={18} />}
            {chip}
          </button>
        ))}
      </div>

      {/* Sort */}
      <button
        type="button"
        className="
          inline-flex items-center gap-1.5
          text-sm text-[#5f5e5b]

          md:mt-3 md:gap-3 md:pl-1
          md:text-lg

          lg:mt-0 lg:text-sm
        "
      >
        <SlidersHorizontal size={20} className="lg:hidden" />

        <span>Sort:</span>

        <span className="hidden lg:inline">Date Added</span>

        <span className="lg:hidden">Date Taken</span>

        <ChevronDown size={18} className="hidden lg:block" />
      </button>
    </section>
  );
};

export default FilterBar;
