import AlbumCard from "../components/AlbumCard";
import CreateAlbumCard from "../components/CreateAlbum";
import { useState } from "react";
import {
  Search,
  Plus,
  MoreVertical,
  Share2,
  Image as ImageIcon,
} from "lucide-react";
const albums = [
  {
    id: 1,
    title: "Pacific Northwest",
    description: "Summer road trip through Oregon and Washington.",
    count: 124,
    shared: true,
    images: [
      "/images/pnw-1.jpg",
      "/images/pnw-2.jpg",
      "/images/pnw-3.jpg",
      "/images/pnw-4.jpg",
    ],
  },
  {
    id: 2,
    title: "Paris Memories",
    description: "Walking through the 7th arrondissement.",
    count: 86,
    images: [
      "/images/paris-1.jpg",
      "/images/paris-2.jpg",
      "",
      "/images/paris-4.jpg",
    ],
  },
  {
    id: 3,
    title: "Portfolio 2024",
    description: "Architectural and tech photography.",
    count: 42,
    images: [
      "/images/portfolio-1.jpg",
      "/images/portfolio-2.jpg",
      "/images/portfolio-3.jpg",
      "/images/portfolio-4.jpg",
    ],
  },
];

const LibraryPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="library-page">
      <header className="library-header">
        <h1>My Library</h1>

        <button className="new-album-btn">
          <Plus size={18} />
          New Album
        </button>
      </header>

      <div className="library-search">
        <Search size={18} />
        <input placeholder="Search your library..." />
      </div>

      <div className="library-tabs">
        <button
          className={activeTab === "all" ? "active" : ""}
          onClick={() => setActiveTab("all")}
        >
          All Albums
        </button>

        <button
          className={activeTab === "shared" ? "active" : ""}
          onClick={() => setActiveTab("shared")}
        >
          Shared with me
        </button>

        <button
          className={activeTab === "mine" ? "active" : ""}
          onClick={() => setActiveTab("mine")}
        >
          My Albums
        </button>
      </div>

      <section className="album-grid">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}

        <CreateAlbumCard />
      </section>
    </div>
  );
};

export default LibraryPage;
