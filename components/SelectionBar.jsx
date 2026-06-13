const SelectionBar = ({ count, onClear }) => {
  return (
    <aside
      className={count > 0 ? "selection-bar visible" : "selection-bar"}
      aria-live="polite"
    >
      <div className="selection-inner">
        <div className="selection-count">
          <button
            className="selection-close mobile-only"
            onClick={onClear}
            type="button"
            aria-label="Clear selection"
          >
            <X size={31} />
          </button>
          <strong>{count}</strong>
          <span className="desktop-selected-label">photos selected</span>
          <span className="mobile-selected-label">selected</span>
        </div>
        <div className="selection-actions">
          <button type="button">
            <Share2 size={21} />
            <span>Share</span>
          </button>
          <button type="button">
            <ArrowDownToLine size={21} />
            <span className="desktop-save-label">Download</span>
            <span className="mobile-save-label">Save</span>
          </button>
          <button className="danger-action" type="button">
            <Trash2 size={21} />
            <span>Delete</span>
          </button>
          <button
            className="selection-close desktop-only"
            onClick={onClear}
            type="button"
            aria-label="Clear selection"
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SelectionBar;
