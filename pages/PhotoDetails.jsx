import { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import useAddTags from "../features/photos/hooks/useAddTags";
import PhotoViewer from "../components/PhotoViewer";
import PhotoDesktopDetails from "../components/PhotoDesktopDetails";
import PhotoMobileDetails from "../components/PhotoMobileDetails";

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
  const { imageId } = useParams();
  const { handleAddTags } = useAddTags();
  const {
    data: imageData,
    loading: imageLoading,
    error: imageError,
  } = useFetch(`https://pixora-backend-roan.vercel.app/image/${imageId}`);

  const [image, setImage] = useState(null);

  useEffect(() => {
    if (imageData) {
      setImage(imageData);
    }
  }, [imageData]);

  const [favorite, setFavorite] = useState(false);
  const [comments, setComments] = useState(SAMPLE_PHOTO.comments);

  const photo = useMemo(
    () => ({
      ...SAMPLE_PHOTO,
      imageId,
    }),
    [imageId],
  );

  const removeTag = async (tag) => {
    const filteredTags = image.data.tags.filter((item) => item !== tag);

    const response = await handleAddTags(image.data._id, filteredTags);

    if (response) {
      setImage((prev) => ({
        ...prev,
        data: { ...prev, tags: filteredTags },
      }));
    }
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

  if (imageLoading) {
    return <div>Loading...</div>;
  }

  if (imageError) {
    return <div>Something went wrong.</div>;
  }
  return (
    <main className="fixed inset-0 flex h-screen flex-col overflow-hidden bg-[#faf9f7]">
      {/* =======================================================
          IMAGE VIEWER
      ======================================================= */}
      <PhotoViewer image={imageData?.data?.imageUrl} title={photo.title} />

      {/* =======================================================
          MOBILE DETAILS
      ======================================================= */}
      <div className="flex-1 overflow-hidden lg:hidden">
        <PhotoMobileDetails
          photo={image?.data}
          favorite={image?.isFavorite}
          onToggleFavorite={() => setFavorite((prev) => !prev)}
          tags={image?.data?.tags}
          setImage={setImage}
          onRemoveTag={removeTag}
        />
      </div>

      {/* =======================================================
          DESKTOP DETAILS
      ======================================================= */}
      <div className="hidden flex-1 overflow-hidden lg:block">
        <PhotoDesktopDetails
          photo={image?.data}
          setImage={setImage}
          favorite={image?.data?.isFavorite}
          tags={image?.data?.tags}
          comments={image?.data?.comments}
          onToggleFavorite={() => setFavorite((prev) => !prev)}
          onRemoveTag={removeTag}
          onAddComment={addComment}
        />
      </div>
    </main>
  );
}
