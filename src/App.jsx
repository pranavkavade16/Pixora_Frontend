import { useMemo, useState } from "react";
import {
  ArrowDownToLine,
  ArrowLeft,
  CalendarDays,
  ChevronDown,
  Image as ImageIcon,
  Search,
  Share2,
  SlidersHorizontal,
  Star,
  Trash2,
  Upload,
  UserCircle,
  X,
} from "lucide-react";

const avatars = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBjaEkMEF1luzMZHgnKbdBcQdXtw_hEdHljWw3EXYvhON8rPH5ef1eI1FPER_4eqNMD_camN5uveGJ9yM5rKWXbo0z_qfRbr9-1DMmlc-332iPBEZIQgulH8-_Cp794ETBPS1JBCMRw51Zjhp5mnAVedASnHFjBkr0NgpAK0bbjr2IoWD68oQc_UdpQKR66acqqxaZ1ZYTFaB4FQTtLkZFrhnNEKQNUv_DWkC2v0YrWeDYJRcNY_gCUlCSIE3A5L7O1PMecyNXkjmEz",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCoguH498JHyB_Vsob_OE-5nGDc76o2Q8Vr-2JnizuFE7cgRDtmdi8MOtTq8dKcZV8TtrEK4DO2NDvZU0s7s5V1eCUvlL2zlo23-G2Rq-VQTdoLgvg4npoiltCWmQDZBn_pcYCtBvqv0HeKOtS0wj-fEM5g_YvKjAe10zP0FKW-tj4rmKolSHgofiEvnTf07sTKQa0wM7HqM7iLxqK1vpjGG_cIVNqq7l9TXFe2_9p0Yn6YgHx_3D6Mw9b5wDJbcb0jUVdgTKDRyF1u",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuArsqheeSwjQ5_zIkzusbJ-5FeTLJIXZhE38WSow8EgGaaviwLHyd4nwLGPpaAu0j05v82r43fVQltnrkgmO3RchcijZ0PeXzyIM4Zk77luj9oZQHqdZouLtSnKPL0Gef2HSzul8ROB7X04O6oy_aJ4413nc15u-R8G-a043ckWet4fSyaHrehZl63RdiG5e0nFRDbtBkarslnXw1ZWqWcScaaJgW8-CgOvGqVIkC3Hx7dQaknrH5PF7tphZYpBUKkdY-tNo_O2airc",
];

const userAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDuXc34_aGaiEkjBzO465PZpTgT3pHnDpOnvXtYJuIWL3Jy25yTcnpp_ZCLcht8qBHMUwwNYDnArUNK5p0WXceB2OKDlTobbXz1H6OsE6r6wmcXFwH92ImBm15kevznt8QcGj54jefQNGZt-F--XXMv9ImxJx0iRs8U66pDipH1MDXyzBhyDGB1Cvr6Pm93XpOcd0KOpzy-3vxfX0NGR-qaMugJyY26scq7nNX3dXWOb5JIpClGWTSx1fmSFTN7HNoBxWYodyY29iVH";

const photos = [
  {
    id: 1,
    title: "Turquoise shallows",
    favorite: true,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAueJijtG4c-hhWLIBt1f7yfk6vw0-axlvG_4896L1gjPEcezq2xF0tRqXynobJhZQzmFS2Jp4tu1RIEuyfJR3nc1jw65AT9mHovDsmUIHrj2__BGP05y_Jq4cY31N0YkLY-e8WmJhDwbH9tDVEaW8oiRmLK0kuajtxbq_HDjjtAwYD_hoO3q2r5q0xB5UvHbmYTZsOXq6XBk9iqSWv3NDB34oPB9BNX6wTrRONsKqh13-H29KmozE_jrYFi4lE9yZZ7yB-rwh1OlcU",
  },
  {
    id: 2,
    title: "Alpine mirror",
    favorite: false,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBySGEQLSrIPvtA4NaWcZ8fy8SisZnhtiMjai-y3DBFKw2eFMFsvbzkv35rIUrpcfp59p9T76sJWeb9QaIugCBj5LYmaMkZB3QDhmRG2EK9Tbsj3WCeTlhoMkMOvbJAuU7bFo6Q0XBVZv21swHhn7ikwS-YXh4u_kjh0AtoNO1Bj46_KAbHrSdWM97EeCW6kiA_Fx5wpqXOh5w5hh4RvcKufIVr18JLAVSU5Oaar8rDET0N5ufaMbfh87V_t-MF_L2nfIVqk2UQCwNU",
  },
  {
    id: 3,
    title: "Architectural apex",
    favorite: false,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdYEr6J1g5oRBDhk-DE9DOYEJPNmVHzckKaGHcSAhipkEHtUq-73gFFmAxaCDb4Kkl_kkxovwTSsZMdtY8IduMFILE4_yQEhlZzEx7JWAmK0sU5n2QyVVSjP_yyLg4_5vWUe3HOueHj116EMAs7vELUxo9NB69Vms4BRFYaKVPD0KPTN0zumcucNLwKpxbxkinLk8bewCbx6AZXbx-3uOrrvoYffApQyrPh66TrdUfNkVI_u7q5xALKAyNhZOT2HjIo1LqvRBmFz8D",
  },
  {
    id: 4,
    title: "Concrete passage",
    favorite: false,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo8STAK6D0N7EsnWjEdD8YFCpVTATL5qTPgulEbXQT88xsuXPC3ojfmbgsomh12plj9A9TgeR8uvUEy_zOLlwf2V9adljmZ5xnBdc2KWJJSmzLMfggY6q7FHcE9c-7W-JS6eKRaFg0O3Kb-4jq7456v21-bgdYnPmhor_6nzSfAfknTWEtwsfyNnmkpb2O9tqQ_xW6peGKtfvGYIVPrUtFgGA6REcqo6JQKEvlqhKtvlH-dpEyqj8OEHdiaMxXf8JVJeueUZsj4HLD",
  },
  {
    id: 5,
    title: "Glass horizon",
    favorite: false,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCreIlMp5ePPYgY6dJbjd5m7PwxeOZQdBQJIjHRS9nwSMxFqUbC_FmRQGP3HPJJJS0g9oRY-nfZDW-pY1gyHkolOFrh8kIyl1LgmzYVPpk5WBkORgL2DnLbekGKsbWKpvip2oy8NVpjx6lF6PVnSIMj79qxn1XCln8lBP2S-CZo9oAAW56RfDjx5UHkW9afGqbhkGVWnUJYk42rSaIDIK2QONx0If70UFCuNOye6LtOKpX3SFtnpN8BjHM2syys-bDkh4noxUCemZ5w",
  },
  {
    id: 6,
    title: "Golden hills",
    favorite: true,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgb1ok9slothRaCUr-Li5lzXQgVh8TLgDyC9cggSbKDgvUFlkFqZ5qxEmFxI-Np6UgpZfE88K2F-1tEP4aNrhD99BYcaUj5MfAw8IX34qROwybKaLAAUuWoAw3NSNu20Sm03ptMviF3LcgMLU9dliVQwmIKGdme9ZDVCdmJHfPMgOfq2xlNeHSjG5Dp9TYhvf-4lHFcpC5ew3kyamMXnR9WG7ptjoYvnLJyVIAT31vStp0sz8YxUakxoKXGT_w7EU_kFUYs97MDMop",
  },
  {
    id: 7,
    title: "Redwood path",
    favorite: false,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRpbg-yWhwszDlK-mcnbWopjeNIsS_nUmcoolC_XF7bGwUU3kA8X2pt_vu3mbuiq2K4e7EhTSKdqrkzNGrXrf-Si3z4zsi7wEII6OhFM9L207V4iMhYCUvlGVlMdf7YYqe61AfvGIWx9nfWAh-Tprz-wGUfQODb-rjR72sIUb_iBSH4mukK8GvLSTCsYeg5f9FbWfTWH_hwC29h2nfrVQdMhYD4m-TlgC7kmwJkg1iPz1RnpleOEHQBjF51VDL04_N082yoc5PmJ4S",
  },
  {
    id: 8,
    title: "Open water",
    favorite: true,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRnoq3sYUJxNTUvW24r8h_DPZPaTHnSn5A7BWo1lTF63fBBGS-6XrGwD1fdC7AFCQ2s4I2TTMmMvyO5hq8IUieFmN13EYlWX5-6iSuIFSdlxRkWL0uM9f3HLWflSA5XB8RAjjBS_3fMKsjZgMtKzhuW-K3jW1YFWzdoEoDABQ0Q2KtgJHwx_wQGiKGc4d1ePAKyc1hZxdWcA4FrYIA4Hkn0EVoUzje9q5fvuZ-sTGovoEenx0zmLsEy_GwxkofWFW2hCMstWskqm3L",
  },
];

function App() {
  const [selected, setSelected] = useState(
    new Set([1, 2, 3, 4, 5, 6, 7, 8, 101, 102, 103, 104]),
  );
  const selectedCount = selected.size;

  const mobilePhotos = useMemo(
    () => photos.slice(4).concat(photos.slice(1, 4)),
    [],
  );

  const toggleSelected = (id) => {
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const clearSelection = () => setSelected(new Set());

  return (
    <div className="kp-app">
      <TopNav />
      <main className="kp-main">
        <AlbumHeader />
        <FilterBar />
        <PhotoGrid
          photos={photos}
          mobilePhotos={mobilePhotos}
          selected={selected}
          onToggle={toggleSelected}
        />
        <button className="view-all" type="button">
          View All 240 Photos <ChevronDown size={20} />
        </button>
      </main>
      <SelectionBar count={selectedCount} onClear={clearSelection} />
      <MobileNav hidden={selectedCount > 0} />
    </div>
  );
}

function TopNav() {
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
          <img className="user-avatar" src={userAvatar} alt="User profile" />
        </div>
      </div>
    </header>
  );
}

function AlbumHeader() {
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
              {/* <img src={avatars[0]} alt="Album owner" /> */}
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
}

function AvatarStack() {
  return (
    <div
      className="avatar-stack desktop-avatars"
      aria-label="Shared with 5 people"
    >
      {avatars.map((avatar, index) => (
        <img key={avatar} src={avatar} alt={`Collaborator ${index + 1}`} />
      ))}
      <span>+2</span>
    </div>
  );
}

function FilterBar() {
  const chips = ["All", "Favorites", "Beach", "Architecture"];
  const mobileChips = [
    "All",
    "Favorites",
    "Iceland",
    "Blue Hour",
    "2024",
    "Panoramic",
  ];

  return (
    <section className="filter-shell">
      <div className="chip-row desktop-chips">
        {chips.map((chip) => (
          <button
            className={chip === "All" ? "chip active" : "chip"}
            key={chip}
            type="button"
          >
            {chip}
          </button>
        ))}
      </div>
      <div className="chip-row mobile-chips">
        {mobileChips.map((chip) => (
          <button
            className={chip === "All" ? "chip active" : "chip"}
            key={chip}
            type="button"
          >
            {chip === "Favorites" && <Star size={18} />}
            {chip}
          </button>
        ))}
      </div>
      <button className="sort-btn" type="button">
        <SlidersHorizontal size={20} className="mobile-sort-icon" />
        Sort: <span className="desktop-sort-text">Date Added</span>
        <span className="mobile-sort-text">Date Taken</span>
        <ChevronDown size={18} className="desktop-chevron" />
      </button>
    </section>
  );
}

function PhotoGrid({
  photos: desktopPhotos,
  mobilePhotos,
  selected,
  onToggle,
}) {
  return (
    <>
      <section
        className="photo-grid desktop-grid"
        aria-label="Summer 2026 photo grid"
      >
        {desktopPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            selected={selected.has(photo.id)}
            onToggle={onToggle}
          />
        ))}
      </section>
      <section
        className="photo-grid mobile-grid"
        aria-label="Ethereal Coastlines photo grid"
      >
        {mobilePhotos.slice(0, 4).map((photo, index) => (
          <PhotoCard
            key={`mobile-${photo.id}`}
            photo={{
              ...photo,
              id: photo.id + 100,
              favorite: index === 1 || photo.favorite,
            }}
            selected={selected.has(photo.id + 100)}
            onToggle={onToggle}
          />
        ))}
      </section>
    </>
  );
}

function PhotoCard({ photo, selected, onToggle }) {
  return (
    <button
      className={selected ? "photo-card selected" : "photo-card"}
      type="button"
      onClick={() => onToggle(photo.id)}
      aria-pressed={selected}
    >
      <img src={photo.src} alt={photo.title} loading="lazy" />
      <span className="image-fallback" aria-hidden="true">
        {photo.title}
      </span>
      <span className="photo-overlay" />
      <span
        className={photo.favorite ? "favorite-badge active" : "favorite-badge"}
      >
        <Star size={20} fill={photo.favorite ? "currentColor" : "none"} />
      </span>
    </button>
  );
}

function SelectionBar({ count, onClear }) {
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
}

function MobileNav({ hidden }) {
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
}

export default App;
