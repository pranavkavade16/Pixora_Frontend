import { ImageIcon, Star, Search, UserCircle } from "lucide-react";
const MobileNav = ({ hidden }) => {
  return (
    <nav
      className={hidden ? "mobile-bottom-nav hidden" : "mobile-bottom-nav"}
      aria-label="Mobile navigation"
    >
      <a className="active" href="/">
        <ImageIcon size={28} />
        Library
      </a>
      <a href="/">
        <Star size={29} />
        Starred
      </a>
      <a href="/">
        <Search size={29} />
        Explore
      </a>
      <a href="/">
        <UserCircle size={29} />
        Profile
      </a>
    </nav>
  );
};

export default MobileNav;
