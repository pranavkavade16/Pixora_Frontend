import { Image as ImageIcon, Search, Star, UserCircle } from "lucide-react";

export function MobileBottomNav() {
  return (
    <nav
      aria-label="Mobile navigation"
      className="
        hidden
        max-[767px]:fixed
        max-[767px]:right-0
        max-[767px]:bottom-0
        max-[767px]:left-0
        max-[767px]:z-25
        max-[767px]:flex
        max-[767px]:h-17.5
        max-[767px]:items-center
        max-[767px]:justify-around
        max-[767px]:border-t
        max-[767px]:border-[#e5e4e1]
        max-[767px]:bg-white
      "
    >
      <a
        href="/"
        className="
          flex h-12 w-12 items-center justify-center
          rounded-[10px]
          bg-[rgba(66,65,188,0.1)]
          text-[#1e22cd]
        "
      >
        <ImageIcon size={23} />
      </a>

      <a
        href="/"
        className="
          flex h-12 w-12 items-center justify-center
          rounded-[10px]
          text-[#111110]
        "
      >
        <Star size={23} />
      </a>

      <a
        href="/"
        className="
          flex h-12 w-12 items-center justify-center
          rounded-[10px]
          text-[#111110]
        "
      >
        <Search size={24} />
      </a>

      <a
        href="/"
        className="
          flex h-12 w-12 items-center justify-center
          rounded-[10px]
          text-[#111110]
        "
      >
        <UserCircle size={24} />
      </a>
    </nav>
  );
}
