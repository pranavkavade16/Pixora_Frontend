import { DashboardNav } from "../components/DashboardNav";
import { FilterTabs } from "../components/FilterTabs";
import { AlbumCard } from "../components/AlbumCard";
import { MobileBottomNav } from "../components/MobileBottomNav";
import { Search } from "lucide-react";
import useFetch from "../customHooks/useFetch";

const desktopAlbums = [
  {
    title: "Pacific Northwest",
    description: "Summer road trip through Oregon and Washington.",
    count: "124 photos",
    shared: true,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCgAC-CyySL3KgQ3GCFuvAEipYslJ6xQbasoQf4XkGqr2r8rdkBE5UUlwgQslUAgv1VTfHNyBsC9RAjXuOaDYyxcGpgRrV2kvk7QDcEKDHh2u82Rjt0PCfsFUuEq_nSW0hK_BW_8qrsyl0_n-MXrbtkdla4rX9LBPnN-hKbdTQyMFYxUJGNm8-txIarLlJ6OIdj5LbHxNHoHltIiBXcbev9nFPHJe2TGa6OvG237Ojql7jrl66uHqAnU5EQzUQYERMZdL5039Q8aZsC",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4vcDqOiaN0C4Klo6MrDYuH32khI_eYdQssVw1Znfp6QSWp2FC3_CB_Q3kCJfB1SAoJTorPZRFctMKReBV7hRmKU1BUq6aWhFDRarID_6t0_QhM2_oQZ8zaxS17vOkdO6chnWrH73HjwWLZn8KolJiU1Lfj1KXreXWrrvIEUw0XysoRGUEvRD70ZoaABGuYjpdIyS86BH8H8FIM7d0nTo9uYikSBZRFEayHYx074HyDuV8HadExoyQTO4MP6dTqhVei43QP1-re9D0",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAd2_vzf4HbR60ZmDIhD8kfEHjpnpgrgPbI571uwVkpOtKVD9_E7U8Je2hk-extW61tND-U65lCRkCv8Qvu6cF6P8QZN2LCL54wtAHaDHCvOeJGM7Rcvrsv4xu4RkiQB5cVWF6FlnmDoGU-kfowgvpi0H-O-L_nVmfawTovaH23x_KAZp8hLW3kVBgaQNVSRnrq2CPcATa3iPsq3kHR4sal45ppnIPlLoXrOVF4s93FXtEvazcL-vm0dNPL4t1GiO5eIAcelbQDol_o",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChrag6Blq7IbIPz2ygNSc7ZzCpJR84xbv6rbqedXxfGjINNZ--3jAAobx-izGRablTdq0u6jBop9sokhMnwfIrYHtYicp-F1dDqAe0hwo1uwN1hXrCz5RhCMKqrgT8B1q_d-mAHGV46j4OtmZ8KF8XxmgnSG8ULpSAXmC4ljSx6N_bP2gD2abCv2L7kfQ2qtHpqiY0xTjhjm2PdQ5e7HiQ7ujDVL6nOJ03o4CdBxrsULxkFw1LuY8rIpBNSpoT6ExvtjaLEUbktTEA",
    ],
  },
  {
    title: "Paris Memories",
    description: "Walking through the 7th arrondissement in autumn.",
    count: "86 photos",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaWpHWrAhhCHOAuSTSUGkl0USqSXirWQm_-bGpuLPonQELWAkzDvC6GiJnZOwTSHB4ggggBTXpDa27w2QjYmdZ33-UF_-KRXhKVwsaLIIoCwYenOcPsMGzSgf2yGhkMf4iZwTOUvKXST63CjVyQwkDfRY4BhuO6CBxwR3c0Lu2bpxD3f7hQYnQ1zGxeoUQcETvBOZvgWm81OV_ULPp0YC4P6nT9ca5olsJhBUz4rEX3b6-ZaX-ap7yQx7af4eFSGT2sU6MEg7jlWmO",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3Wo3MvYCRaAeyNL83QywEie1SWXxMeFtc_XIHa6L7sd_U8QaEbJAIGq8eB58acCMiDSN4-vYHrTcjIY7XI5oDPi-Fuxmw9F1FaFLSPVA5j_R2N_iGuTJn3oGP8U-Dza-Qo_ZYVqApAXKmWD6vYqU8X8tqW73IejDAQd1JoDtRTDD_F47NFmZ5ORZEFiZLg_ZFoporKLwVFiScmntk4qbFX0pBdDCZGR2RwNsz4oZGdwzGV52qutSj2kJJz0b9e6ECmeNUh3rmPt53",
      null,
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDch91CyD_n3Rwf3AhmSS37b9usFaXWv22ssbRDwcUrk--v0Qsyt2MbW4MbatyepGRliZfOa3ZkH_CQ5o9cPil9cinOuFvGHELTIbrr2PByBjP2cTY_JpH_kMew2VnNdlJRGkU2jZuyOpB74GD-ML3SEMlIsbKAREPM6f2Op-cjDjlkPzQ82DAyRDcliMiStfe7Ss6b9334sBO_bwkLkR7t8rfQlWmj8E4_SMOj9RN3NRc2yrUwOc66pjiPQWFBQGoOOSmXA6q3juws",
    ],
  },
  {
    title: "Portfolio 2024",
    description: "Selection of architectural and tech photography.",
    count: "42 photos",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWfLoAXojJIdJwAo-zcfx3Z5o6oumt_EdpmvzBSPkxtXuWQmYqTosbI-qIt3eHl9XIl5ElA6VJ2yLviKa3m_rwqj8xf69aHPubcRprTiJKQdCBD0qbC0dOADGfAD09DASdsxB-bcDVTLYxVAdZaK6MAKsofVqhZ37jkvPsOVnITW5RnbmSD4tM1xs4mVCVotmVGKprc-K88d7ylPAcvzUYV7C1USoKrCMt1TN6P_yPV8QwzPafbAa_8aPOTfO7c-yv_2EZW9yR2moa",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSt2GABgqm-rMkmsmbfN3n1U8moJVJZIPAA2yzLxDdj_U8FzzBCTzIuWV0RHzOq41WsuTS-geYefiJR0K5xxDk1alNhRK7XYf6JV_eVhAtGRsY_aJdCFFhEY17nZA2MSB4lXbR8ggiL43L6IRs28OwvScV1tTWuSKx9nUHRoQWimzxlSyiUr2N2TcnwNJvTSSUU1MWGONo03C0wZGNWvn6oA1pRheNGCsK_T8OHuOsv9psgmZhiyniEs8uLoOxgUc-SHiR6KhnJSb9",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrtj4wu3RXaEzvzsu5fUYKAFk_-MFwXzZkJy2niJlUN-4Dn9KogDHGrby5BhcIuzWaS6po6imcwJT25T9VfdQXhjzKgyJMqLG0-msnQvRvKqVjgmU_I1Z_kuBNoi3qABscExytPYL5cetfD3us12uHt2jKKMctha1uXE4ertmWe7Ienir3p6akhwGzmWD3-LU5BrkVNm8_AbkCglFd49D7HB2f69MY50rzsLeJK4os_KQ_zXqpkVWIMKGI80g3hNhXBs6DUcDJFB0c",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6o5IgSxt_vYIJmcOKC75255lhVfadBoZqDKCNB9KlyffdRnu8xgml3vH3KwVry_PupThFC662230yfJxOZMN33B2WG3dguz3JYwbEIA-jhVNQEXycnNBoblIINgsiXhmdYPyEYEiDrFk00sCJwz0xey3FoyRM1N2stjEtpnYuHfAmTLkHYmRGKrovVX2I6SLUv31zOtWX9_WyciFbNTTwmUQ8nUSH1YWAGA45GckhROlP3OxtU3rC73juCj5wR-2LtYEeJxUU2SOP",
    ],
  },
];

const mobileAlbums = [
  {
    title: "Architecture & Nature",
    description:
      "A collection of studies exploring the intersection of brutalist architecture and organic forest environments.",
    count: "124 items",
    time: "2h ago",
    shared: true,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6aH0yMLzYPrAJi4XMjkQogszU075LHBE-zugDt2bJGVyP2ZZAlxz5rRtS-GszwKh9HhxDL5Ck62BHwnGlE7apIL72p7Em5nOWfx7gefRc9aNI_RRgc5s_JJCj8aRhOhNsyC4T3T4xPKaThiKJoC2U3l3qjs-9LzuJxCJwIg1EYQXTCRcTnweR10hi6Fap4lUiH8wuS5Eb7X7CU6vZp-j_frDr39kf4asivu9XMq69gq7myU_xlVX89w51A7wVWrrvMzN4LiuJCjJz",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEVJxAs-MiTnSpsc2nV0yEDoTkdySmmO2DwpmIbyXbT6--j0PDDrX1FyaTrYTwUafijZjDVHnqjdgzi0rpML4Ltmf-vP_1ZhZWslfaIB4onlIgNCCz-GgEkD1ZhyPUvykvxaVxHNhrN6WfSXdfliCDGPWo6SnIrl5yBSb_ZhsLFpUF0IYLc7RAAFZwnE5LOyQwqhRl16OSMq-GDl75GK-E2t6zQkCWBM02j7ZyQ9csxBDpYUWw2wyRSHT4vcXNrXQnDtVpcohjkZwx",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQQ0JAtT0f-LiHiX1H3lNF6GU-6W55x9TWfxG4Hq2yVj4f9ThGCjiackAXRONgYXOon_LWmXD8ZgxlxOCJ7Bt1UDKpocHAajBxp9ionattsSadmD9gS0ggy__dtUrMBBvmdaV64J350pD6Jq83tMgUsF9bJJWNcViISXpiiG4l9N5HvdJhD6y4teT0g_gHOE8sHNnqcIaILy2HadNg7gvOVwMxkIiURBBwl6VuhDkRDRL6Ln_Cca7I4Ao8V4i20nCxTa1U1H8PgsDU",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPvfbwu3bNql2L1w8x_cPhjRerqh_Wphw9Jlb0AbNP_EfzqBi3XWdMHSEnZ2AX9FvK-WK2zkNJWU_Ky_OFivL6lwr8dUVGCw47cBGbuK5KoWWHp-8xoTmWCcbc5bpvAhiD9E5yUmhnl7pKiyxoSk5dR_ttjqSffEwrHsPK3S3s3TvZDENOlOOC5es2c7q40z56-vB4_C0Wqtj2FZKA37pfRu_F42I9wtbhJNPLVVCkhQwsAw7hVkHItD0aDRgtsyBfq6rFe6htZNOy",
    ],
  },
];

function LibraryPage() {
  const { data, loading, error } = useFetch(
    "https://pixora-backend-roan.vercel.app/albums/6a31773c0dc54daa4bd9902e",
  );


  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <main
        className="
        px-4
        pt-10.5
        pb-17

        max-[767px]:px-3.25
        max-[767px]:pt-7.75
        max-[767px]:pb-24.5
      "
      >
        <section
          className="
          mb-10
          grid gap-7

          max-[767px]:mb-7.5
          max-[767px]:gap-6.5
        "
        >
          <h1
            className="
            text-[40px]
            font-bold
            leading-[1.15]
            tracking-[-0.04em]

            max-[767px]:text-2xl
            max-[767px]:font-medium
            max-[767px]:tracking-[-0.03em]
          "
          >
            My Library
          </h1>

          <label
            className="
            relative flex h-12.75 items-center
            rounded-lg
            border border-[#e5e4e1]
            bg-white
            text-[#464553]

            max-[767px]:hidden
          "
          >
            <Search size={22} className="absolute left-4.5" />

            <input
              type="search"
              placeholder="Search your library..."
              className="
              h-full w-full
              bg-transparent
              pl-12 pr-4.5

              text-[15px]
              text-[#111110]

              outline-none
              placeholder:text-[#2f3130]
            "
            />
          </label>

          <FilterTabs />
        </section>

        {/* Desktop Albums */}
        <section
          aria-label="Albums"
          className="
          grid
          grid-cols-3
          gap-8

          max-[1100px]:grid-cols-2
          max-[767px]:hidden
        "
        >
          {desktopAlbums.map((album) => (
            <AlbumCard key={album.title} album={album} variant="desktop" />
          ))}
        </section>

        {/* Mobile Albums */}
        <section
          aria-label="Albums"
          className="
          hidden

          max-[767px]:flex
          max-[767px]:flex-col
          max-[767px]:gap-8.25
        "
        >
          {mobileAlbums.map((album) => (
            <AlbumCard key={album.title} album={album} variant="mobile" />
          ))}
        </section>
      </main>

      <MobileBottomNav />
    </div>
  );
}

export default LibraryPage;
