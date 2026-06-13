export function FilterTabs() {
  return (
    <div className="dashboard-tabs" role="tablist" aria-label="Album filters">
      <button className="active" type="button" role="tab" aria-selected="true">
        <span className="desktop-tab-label">All Albums</span>
        <span className="mobile-tab-label">All</span>
      </button>
      <button type="button" role="tab" aria-selected="false">
        <span className="desktop-tab-label">Shared with me</span>
        <span className="mobile-tab-label">Shared</span>
      </button>
      <button type="button" role="tab" aria-selected="false">
        My Albums
      </button>
    </div>
  );
}
