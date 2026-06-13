import AlbumHeader from "../components/AlbumHeader";
import AvatarStack from "../components/AvatarStack";
import FilterBar from "../components/FilterBar";
import MobileNav from "../components/MobileNav";
import PhotoCard from "../components/PhotoCard";
import PhotoGrid from "../components/PhotoGrid";
import SelectionBar from "../components/SelectionBar";
import TopNav from "../components/TopNav";
import { useState, useMemo } from "react";
import {
  ArrowDownToLine,
  ArrowLeft,
  CalendarDays,
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
import { ChevronDown } from "lucide-react";

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

const AlbumDetails = () => {
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
};

export default AlbumDetails;
