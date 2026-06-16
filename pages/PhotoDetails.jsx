import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import PhotoViewer from "../components/photo-detail/PhotoViewer";
import DesktopDetails from "../components/photo-detail/DesktopDetails";
import MobileDetails from "../components/photo-detail/MobileDetails";

const SAMPLE_PHOTO = {
  id: 1,
  title: "Ethereal Symmetry #04",
  location: "Kyoto, Japan",
  date: "Oct 12, 2023",
  image:
    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1800&auto=format&fit=crop",

  tags: ["#minimalism", "#architecture", "#editorial"],

  metadata: {
    iso: "100",
    aperture: "f/2.8",
    shutter: "1/250s",
    camera: "Sony A7R IV",
  },

  comments: [
    {
      id: 1,
      initials: "ED",
      name: "Elena Drago",
      time: "2h ago",
      text: "The composition here is breathtaking. The balance of light and shadow is perfect.",
      avatarBg: "#e5e2de",
    },
    {
      id: 2,
      initials: "MK",
      name: "Marcus Keat",
      time: "5h ago",
      text: "Great use of negative space.",
      avatarBg: "#e2dfff",
    },
  ],
};

export default function PhotoDetailPage() {
  const { id } = useParams();

  const [favorite, setFavorite] = useState(false);
  const [tags, setTags] = useState(SAMPLE_PHOTO.tags);
  const [comments, setComments] = useState(SAMPLE_PHOTO.comments);

  const photo = useMemo(
    () => ({
      ...SAMPLE_PHOTO,
      id,
    }),
    [id],
  );

  const removeTag = (tag) => {
    setTags((current) => current.filter((item) => item !== tag));
  };

  const addTag = (tag) => {
    if (!tag?.trim()) return;

    setTags((current) => {
      if (current.includes(tag)) return current;
      return [...current, tag];
    });
  };

  const addComment = (text) => {
    if (!text.trim()) return;

    const newComment = {
      id: Date.now(),
      initials: "YO",
      name: "You",
      time: "Just now",
      text,
      avatarBg: "#dbeafe",
    };

    setComments((current) => [newComment, ...current]);
  };

  return (
    <main className="fixed inset-0 flex h-screen flex-col overflow-hidden bg-[#faf9f7]">
      {/* =======================================================
          IMAGE VIEWER
      ======================================================= */}
      <PhotoViewer image={photo.image} title={photo.title} />

      {/* =======================================================
          MOBILE DETAILS
      ======================================================= */}
      <div className="flex-1 overflow-hidden lg:hidden">
        <MobileDetails
          photo={photo}
          favorite={favorite}
          onToggleFavorite={() => setFavorite((prev) => !prev)}
          tags={tags}
          onRemoveTag={removeTag}
          onAddTag={addTag}
        />
      </div>

      {/* =======================================================
          DESKTOP DETAILS
      ======================================================= */}
      <div className="hidden flex-1 overflow-hidden lg:block">
        <DesktopDetails
          photo={photo}
          favorite={favorite}
          onToggleFavorite={() => setFavorite((prev) => !prev)}
          tags={tags}
          comments={comments}
          onRemoveTag={removeTag}
          onAddTag={addTag}
          onAddComment={addComment}
        />
      </div>
    </main>
  );
}
