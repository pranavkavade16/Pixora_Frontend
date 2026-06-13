const AlbumHeader = () => {
  return (
    <section className="album-header">
      <div className="album-title-row">
        <div className="desktop-title-wrap">
          <button className="back-button desktop-only" aria-label="Back">
            <ArrowLeft size={28} />
          </button>
          <h2>Summer 2026</h2>
        </div>
        <div className="album-actions">
          <button className="secondary-btn" type="button">
            <Share2 size={21} className="mobile-action-icon" />
            Share
          </button>
          <button className="primary-btn" type="button">
            <Upload size={21} />
            Upload
          </button>
        </div>
      </div>
      <div className="album-meta-row">
        <div className="album-copy">
          <p className="desktop-copy">
            A curated collection of memories from the coastal tour, featuring
            architectural studies and candid beach moments during the golden
            hours of July.
          </p>
          <p className="mobile-copy">
            A curated collection of long-exposure seascapes captured during the
            blue hour in Northern Iceland. Exploring the silent tension between
            ancient basalt pillars and the relentless Atlantic tide.
          </p>
          <div className="desktop-stats">
            <span>2 PHOTOS</span>
            <span aria-hidden="true">.</span>
            <span>CREATED JUNE 2026</span>
          </div>
          <div className="mobile-owner-row">
            <div className="avatar-stack compact">
              <img src={avatars[0]} alt="Album owner" />
              <span>+3</span>
            </div>
            <span>
              Owned by <strong>Elias Thorne</strong>
            </span>
            <em>42 photos</em>
          </div>
        </div>
        <AvatarStack />
      </div>
    </section>
  );
};

export default AlbumHeader;
