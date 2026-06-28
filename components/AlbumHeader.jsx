import { ArrowLeft, Share2, Upload } from "lucide-react";
import AvatarStack from "./AvatarStack";
import useAlbumContext from "../context/AlbumContext";

const AlbumHeader = () => {
  const avatars = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBjaEkMEF1luzMZHgnKbdBcQdXtw_hEdHljWw3EXYvhON8rPH5ef1eI1FPER_4eqNMD_camN5uveGJ9yM5rKWXbo0z_qfRbr9-1DMmlc-332iPBEZIQgulH8-_Cp794ETBPS1JBCMRw51Zjhp5mnAVedASnHFjBkr0NgpAK0bbjr2IoWD68oQc_UdpQKR66acqqxaZ1ZYTFaB4FQTtLkZFrhnNEKQNUv_DWkC2v0YrWeDYJRcNY_gCUlCSIE3A5L7O1PMecyNXkjmEz",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCoguH498JHyB_Vsob_OE-5nGDc76o2Q8Vr-2JnizuFE7cgRDtmdi8MOtTq8dKcZV8TtrEK4DO2NDvZU0s7s5V1eCUvlL2zlo23-G2Rq-VQTdoLgvg4npoiltCWmQDZBn_pcYCtBvqv0HeKOtS0wj-fEM5g_YvKjAe10zP0FKW-tj4rmKolSHgofiEvnTf07sTKQa0wM7HqM7iLxqK1vpjGG_cIVNqq7l9TXFe2_9p0Yn6YgHx_3D6Mw9b5wDJbcb0jUVdgTKDRyF1u",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuArsqheeSwjQ5_zIkzusbJ-5FeTLJIXZhE38WSow8EgGaaviwLHyd4nwLGPpaAu0j05v82r43fVQltnrkgmO3RchcijZ0PeXzyIM4Zk77luj9oZQHqdZouLtSnKPL0Gef2HSzul8ROB7X04O6oy_aJ4413nc15u-R8G-a043ckWet4fSyaHrehZl63RdiG5e0nFRDbtBkarslnXw1ZWqWcScaaJgW8-CgOvGqVIkC3Hx7dQaknrH5PF7tphZYpBUKkdY-tNo_O2airc",
  ];

  const { openUploadPhoto } = useAlbumContext();
  return (
    <section className="mb-12 grid gap-8">
      {/* Top Row */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-7">
          <button
            aria-label="Back"
            className="hidden h-8 w-8 items-center justify-center md:flex"
          >
            <ArrowLeft size={28} />
          </button>

          <h2 className="text-4xl font-bold tracking-[-0.04em] lg:text-[42px]">
            Summer 2026
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4.5 md:flex md:gap-3">
          <button
            type="button"
            className="
              inline-flex items-center justify-center gap-2
              h-14 md:h-11
              rounded-lg
              border border-[#e5e4e1]
              bg-transparent
              px-5
              text-lg md:text-base
            "
          >
            <Share2 size={21} />
            Share
          </button>

          <button
            type="button"
            className="
              inline-flex items-center justify-center gap-2
              h-14 md:h-11
              rounded-lg
              border border-[#3632ad]
              bg-[#4241bc]
              px-5
              text-lg md:text-base
              text-white
            "
            onClick={openUploadPhoto}
          >
            <Upload size={21} />
            Upload
          </button>
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-177.5">
          {/* Desktop Copy */}
          <p className="hidden text-[17px] leading-relaxed text-[#5f5e5b] md:block">
            A curated collection of memories from the coastal tour, featuring
            architectural studies and candid beach moments during the golden
            hours of July.
          </p>

          {/* Mobile Copy */}
          <p className="text-xl leading-relaxed text-[#63615e] md:hidden">
            A curated collection of long-exposure seascapes captured during the
            blue hour in Northern Iceland. Exploring the silent tension between
            ancient basalt pillars and the relentless Atlantic tide.
          </p>

          {/* Desktop Stats */}
          <div className="mt-3 hidden items-center gap-2 text-xs tracking-wide text-[#9d9b98] md:flex">
            <span>2 PHOTOS</span>
            <span>.</span>
            <span>CREATED JUNE 2026</span>
          </div>

          {/* Mobile Owner Row */}
          <div className="mt-7 flex items-center gap-3.5 md:hidden">
            <div className="flex items-center">
              <img
                src={avatars[0]}
                alt="Album owner"
                className="h-10.5 w-10.5 rounded-full border-2 border-white object-cover"
              />

              <span
                className="
                  -ml-2 flex h-10.5 w-10.5 items-center justify-center
                  rounded-full bg-[#e9e8e6]
                  text-base font-bold text-[#6b6a67]
                "
              >
                +3
              </span>
            </div>

            <span className="text-base text-[#242336]">
              Owned by <strong className="font-semibold">Elias Thorne</strong>
            </span>

            <em className="ml-auto whitespace-nowrap not-italic text-sm text-[#a8a7a4]">
              42 photos
            </em>
          </div>
        </div>

        {/* Desktop Avatar Stack */}
        <div className="hidden md:block">
          <AvatarStack />
        </div>
      </div>
    </section>
  );
};

export default AlbumHeader;
