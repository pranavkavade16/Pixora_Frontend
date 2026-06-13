import {
  ArrowLeft,
  ImageIcon,
  Search,
  Share2,
  CalendarDays,
} from "lucide-react";
const TopNav = () => {
  return (
    <header className="kp-nav">
      <div className="kp-nav-inner">
        <div className="brand-cluster">
          <button className="back-button mobile-only" aria-label="Back">
            <ArrowLeft size={31} />
          </button>
          <a
            className="kp-brand desktop-brand"
            href="/"
            aria-label="KaviosPix home"
          >
            <ImageIcon size={25} />
            <span>KaviosPix</span>
          </a>
          <h1 className="mobile-title">Ethereal Coastlines</h1>
          <nav className="top-links" aria-label="Primary navigation">
            <a href="/">Library</a>
            <a className="active" href="/">
              Albums
            </a>
            <a href="/">Archive</a>
          </nav>
        </div>
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Search">
            <Search size={26} />
          </button>
          <button className="icon-btn share-nav" aria-label="Share">
            <Share2 size={24} />
          </button>
          <button
            className="calendar-btn desktop-only"
            aria-label="Open calendar"
          >
            <CalendarDays size={20} />
          </button>
          <img className="user-avatar" alt="User profile" />
        </div>
      </div>
    </header>
  );
};

export default TopNav;
