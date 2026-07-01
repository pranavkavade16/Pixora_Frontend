import { X } from "lucide-react";
import useAlbumContext from "../context/AlbumContext";
import { useState } from "react";

const ShareAlbumModal = ({
  isOpen,
  onClose,

  onAdd,
  onRemove,
  onDone,
}) => {
  const { isShareAlbumOpen, closeShareAlbum } = useAlbumContext();
  if (!isShareAlbumOpen) return null;

  const [email, setEmail] = useState("");

  const [members, setMembers] = useState([
    {
      id: 1,
      initials: "EL",
      name: "Elena Laurent",
      email: "elena.l@gallery.com",
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      id: 2,
      initials: "MK",
      name: "Marcus Kael",
      email: "m.kael@creative.net",
      color: "bg-gray-200 text-gray-700",
    },
    {
      id: 3,
      initials: "JD",
      name: "Julia Devoir",
      email: "julia@devoir.design",
      color: "bg-orange-100 text-orange-700",
    },
  ]);

  const handleAdd = () => {
    if (!email.trim()) return;

    setMembers((prev) => [
      ...prev,
      {
        id: Date.now(),
        initials: email.slice(0, 2).toUpperCase(),
        name: email.split("@")[0],
        email,
        color: "bg-indigo-100 text-indigo-700",
      },
    ]);

    setEmail("");
  };

  const handleRemove = (id) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={closeShareAlbum}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-5">
          <h2 className="text-2xl font-semibold">Share Album</h2>

          <button
            onClick={closeShareAlbum}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Email Input */}
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-600"
            />

            <button
              onClick={onAdd}
              className="rounded-lg bg-indigo-600 px-6 text-white font-medium hover:bg-indigo-700"
            >
              Add
            </button>
          </div>

          {/* Members */}
          <div className="mt-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Access Members
            </p>

            <div className="space-y-4 max-h-72 overflow-y-auto">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full ${member.color}`}
                    >
                      {member.initials}
                    </div>

                    <div>
                      <h3 className="font-medium">{member.name}</h3>

                      <p className="text-sm text-gray-500">{member.email}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemove(member.id)}
                    className="opacity-0 transition group-hover:opacity-100 text-sm text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <button
            onClick={onDone}
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareAlbumModal;
