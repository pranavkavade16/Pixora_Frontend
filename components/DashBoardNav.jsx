import {
  CircleUserRound,
  Image as ImageIcon,
  Plus,
  Search,
  Star,
} from "lucide-react";
import useAlbumContext from "../context/AlbumContext";

export function DashboardNav() {
  const { openCreateAlbum } = useAlbumContext();

  return (
    <header className="sticky top-0 z-20 h-16 bg-[#faf9f7]/95 backdrop-blur-md border-b border-[#e5e4e1] md:border-none">
      <div className="mx-auto flex h-full items-center justify-between px-4">
        {/* Logo */}
        <a
          href="/"
          aria-label="KaviosPix home"
          className="inline-flex items-center gap-2 text-[30px] font-bold tracking-[-0.03em] text-[#3032cc]"
        >
          <ImageIcon size={23} />
          <span className="hidden md:inline">KaviosPix</span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7"
        >
          <a
            href="/"
            className="text-[13px] text-[#57534f] hover:text-[#1e22cd]"
          >
            Library
          </a>

          <a
            href="/"
            className="border-b-2 border-[#1e22cd] pb-2 text-[13px] text-[#1e22cd]"
          >
            Albums
          </a>

          <a
            href="/"
            className="text-[13px] text-[#57534f] hover:text-[#1e22cd]"
          >
            Archive
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 md:gap-4.5">
          {/* Mobile Favorite */}
          <button
            type="button"
            aria-label="Favorites"
            className="flex h-6 w-6 items-center justify-center text-[#bdbab5] md:hidden"
          >
            <Star size={21} />
          </button>

          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="flex h-8 w-8 items-center justify-center text-[#4d4d4b]"
          >
            <Search size={23} />
          </button>

          {/* New Album */}
          <button
            type="button"
            onClick={openCreateAlbum}
            className="
              flex items-center justify-center gap-2
              rounded-lg bg-[#4241bc]
              text-white font-semibold
              md:h-9 md:px-4 md:text-[13px]
              h-10 w-10 md:w-auto
              border border-[#27209a]
              shadow-sm
            "
          >
            <Plus size={18} />
            <span className="hidden md:inline">New Album</span>
          </button>

          {/* Profile */}
          <button
            type="button"
            aria-label="Profile"
            className="
              hidden md:flex
              h-8.5 w-8.5
              items-center justify-center
              rounded-full
              border border-[#c7c4d6]
              bg-[#e9e8e6]
              text-[#6b6a67]
            "
          >
            <CircleUserRound size={25} />
          </button>
        </div>
      </div>
    </header>
  );
}
