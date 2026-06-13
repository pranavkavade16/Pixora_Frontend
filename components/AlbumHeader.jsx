import { ArrowLeft, Share2, Upload } from "lucide-react";
import AvatarStack from "./AvatarStack";
const AlbumHeader = () => {
  const avatars = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBjaEkMEF1luzMZHgnKbdBcQdXtw_hEdHljWw3EXYvhON8rPH5ef1eI1FPER_4eqNMD_camN5uveGJ9yM5rKWXbo0z_qfRbr9-1DMmlc-332iPBEZIQgulH8-_Cp794ETBPS1JBCMRw51Zjhp5mnAVedASnHFjBkr0NgpAK0bbjr2IoWD68oQc_UdpQKR66acqqxaZ1ZYTFaB4FQTtLkZFrhnNEKQNUv_DWkC2v0YrWeDYJRcNY_gCUlCSIE3A5L7O1PMecyNXkjmEz",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCoguH498JHyB_Vsob_OE-5nGDc76o2Q8Vr-2JnizuFE7cgRDtmdi8MOtTq8dKcZV8TtrEK4DO2NDvZU0s7s5V1eCUvlL2zlo23-G2Rq-VQTdoLgvg4npoiltCWmQDZBn_pcYCtBvqv0HeKOtS0wj-fEM5g_YvKjAe10zP0FKW-tj4rmKolSHgofiEvnTf07sTKQa0wM7HqM7iLxqK1vpjGG_cIVNqq7l9TXFe2_9p0Yn6YgHx_3D6Mw9b5wDJbcb0jUVdgTKDRyF1u",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuArsqheeSwjQ5_zIkzusbJ-5FeTLJIXZhE38WSow8EgGaaviwLHyd4nwLGPpaAu0j05v82r43fVQltnrkgmO3RchcijZ0PeXzyIM4Zk77luj9oZQHqdZouLtSnKPL0Gef2HSzul8ROB7X04O6oy_aJ4413nc15u-R8G-a043ckWet4fSyaHrehZl63RdiG5e0nFRDbtBkarslnXw1ZWqWcScaaJgW8-CgOvGqVIkC3Hx7dQaknrH5PF7tphZYpBUKkdY-tNo_O2airc",
  ];

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
              <img src={avatars[0]} alt="Album owner" />
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
};

export default AlbumHeader;
