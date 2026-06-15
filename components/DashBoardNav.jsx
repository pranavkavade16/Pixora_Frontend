import {
  CircleUserRound,
  Image as ImageIcon,
  Plus,
  Search,
  Star,
} from "lucide-react";
import useAlbumContext from "../context/AlbumContext";

export function DashboardNav() {
  const { openCreateAlbum, closeCreateAlbum } = useAlbumContext();

  return (
    <header className="dashboard-nav">
      <div className="dashboard-nav-inner">
        <a className="kp-brand" href="/" aria-label="KaviosPix home">
          <ImageIcon size={23} />
          <span>KaviosPix</span>
        </a>
        <nav className="top-links" aria-label="Primary navigation">
          <a href="/">Library</a>
          <a className="active" href="/">
            Albums
          </a>
          <a href="/">Archive</a>
        </nav>
        <div className="nav-actions">
          <button
            className="icon-btn mobile-favorite-btn"
            type="button"
            aria-label="Favorites"
          >
            <Star size={21} />
          </button>
          <button className="icon-btn" type="button" aria-label="Search">
            <Search size={23} />
          </button>
          <button className="new-album-btn" type="button">
            <Plus size={18} />
            <span>New Album</span>
          </button>
          <button className="profile-btn" type="button" aria-label="Profile">
            <CircleUserRound size={25} />
          </button>
        </div>
      </div>
    </header>
  );
}
