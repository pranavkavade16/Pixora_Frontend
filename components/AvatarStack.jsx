const AvatarStack = () => {
  const avatars = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBjaEkMEF1luzMZHgnKbdBcQdXtw_hEdHljWw3EXYvhON8rPH5ef1eI1FPER_4eqNMD_camN5uveGJ9yM5rKWXbo0z_qfRbr9-1DMmlc-332iPBEZIQgulH8-_Cp794ETBPS1JBCMRw51Zjhp5mnAVedASnHFjBkr0NgpAK0bbjr2IoWD68oQc_UdpQKR66acqqxaZ1ZYTFaB4FQTtLkZFrhnNEKQNUv_DWkC2v0YrWeDYJRcNY_gCUlCSIE3A5L7O1PMecyNXkjmEz",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCoguH498JHyB_Vsob_OE-5nGDc76o2Q8Vr-2JnizuFE7cgRDtmdi8MOtTq8dKcZV8TtrEK4DO2NDvZU0s7s5V1eCUvlL2zlo23-G2Rq-VQTdoLgvg4npoiltCWmQDZBn_pcYCtBvqv0HeKOtS0wj-fEM5g_YvKjAe10zP0FKW-tj4rmKolSHgofiEvnTf07sTKQa0wM7HqM7iLxqK1vpjGG_cIVNqq7l9TXFe2_9p0Yn6YgHx_3D6Mw9b5wDJbcb0jUVdgTKDRyF1u",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuArsqheeSwjQ5_zIkzusbJ-5FeTLJIXZhE38WSow8EgGaaviwLHyd4nwLGPpaAu0j05v82r43fVQltnrkgmO3RchcijZ0PeXzyIM4Zk77luj9oZQHqdZouLtSnKPL0Gef2HSzul8ROB7X04O6oy_aJ4413nc15u-R8G-a043ckWet4fSyaHrehZl63RdiG5e0nFRDbtBkarslnXw1ZWqWcScaaJgW8-CgOvGqVIkC3Hx7dQaknrH5PF7tphZYpBUKkdY-tNo_O2airc",
  ];

  return (
    <div
      className="hidden items-center md:flex"
      aria-label="Shared with 5 people"
    >
      {avatars.map((avatar, index) => (
        <img
          key={avatar}
          src={avatar}
          alt={`Collaborator ${index + 1}`}
          className={`
            h-10 w-10 rounded-full object-cover
            border-2 border-[#faf9f7]
            ${index !== 0 ? "-ml-3" : ""}
          `}
        />
      ))}

      <span
        className="
          -ml-3 flex h-10 w-10 items-center justify-center
          rounded-full
          border-2 border-[#faf9f7]
          bg-[#e9e8e6]
          text-sm text-[#6b6a67]
        "
      >
        +2
      </span>
    </div>
  );
};

export default AvatarStack;
