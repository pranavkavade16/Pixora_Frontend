import { ImageIcon, Star, Search, UserCircle } from "lucide-react";

const MobileNav = ({ hidden }) => {
  return (
    <nav
      aria-label="Mobile navigation"
      className={`
        hidden

        max-[767px]:fixed
        max-[767px]:right-0
        max-[767px]:bottom-0
        max-[767px]:left-0
        max-[767px]:z-25
        max-[767px]:flex
        max-[767px]:h-18.75
        max-[767px]:items-center
        max-[767px]:justify-around
        max-[767px]:border-t
        max-[767px]:border-[#e5e4e1]
        max-[767px]:bg-white
        max-[767px]:transition-transform
        max-[767px]:duration-200

        ${hidden ? "max-[767px]:translate-y-full" : ""}
      `}
    >
      <a
        href="/"
        className="
          flex min-w-16 flex-col items-center gap-1.5
          text-base text-[#1e22cd]
          no-underline
        "
      >
        <ImageIcon size={28} />
        Library
      </a>

      <a
        href="/"
        className="
          flex min-w-16 flex-col items-center gap-1.5
          text-base text-[#242336]
          no-underline
        "
      >
        <Star size={29} />
        Starred
      </a>

      <a
        href="/"
        className="
          flex min-w-16 flex-col items-center gap-1.5
          text-base text-[#242336]
          no-underline
        "
      >
        <Search size={29} />
        Explore
      </a>

      <a
        href="/"
        className="
          flex min-w-16 flex-col items-center gap-1.5
          text-base text-[#242336]
          no-underline
        "
      >
        <UserCircle size={29} />
        Profile
      </a>
    </nav>
  );
};

export default MobileNav;
