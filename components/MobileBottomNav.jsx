import { Image as ImageIcon, Search, Star, UserCircle } from "lucide-react";

export function MobileBottomNav() {
  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      <a className="active" href="/">
        <ImageIcon size={23} />
      </a>
      <a href="/">
        <Star size={23} />
      </a>
      <a href="/">
        <Search size={24} />
      </a>
      <a href="/">
        <UserCircle size={24} />
      </a>
    </nav>
  );
}
