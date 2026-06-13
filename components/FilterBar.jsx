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
    <section className="filter-shell">
      <div className="chip-row desktop-chips">
        {chips.map((chip) => (
          <button
            className={chip === "All" ? "chip active" : "chip"}
            key={chip}
            type="button"
          >
            {chip}
          </button>
        ))}
      </div>
      <div className="chip-row mobile-chips">
        {mobileChips.map((chip) => (
          <button
            className={chip === "All" ? "chip active" : "chip"}
            key={chip}
            type="button"
          >
            {chip === "Favorites" && <Star size={18} />}
            {chip}
          </button>
        ))}
      </div>
      <button className="sort-btn" type="button">
        <SlidersHorizontal size={20} className="mobile-sort-icon" />
        Sort: <span className="desktop-sort-text">Date Added</span>
        <span className="mobile-sort-text">Date Taken</span>
        <ChevronDown size={18} className="desktop-chevron" />
      </button>
    </section>
  );
};

export default FilterBar;
