import { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import useAddTags from "../features/photos/hooks/useAddTags";
import PhotoViewer from "../components/PhotoViewer";
import PhotoDesktopDetails from "../components/PhotoDesktopDetails";
import PhotoMobileDetails from "../components/PhotoMobileDetails";

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
  //   const [comments, setComments] = useState(SAMPLE_PHOTO.comments);

  //   const photo = useMemo(
  //     () => ({
  //       ...SAMPLE_PHOTO,
  //       imageId,
  //     }),
  //     [imageId],
  //   );

  const addTag = async (newTag) => {
    if (!newTag.trim()) return;

    const tag = newTag.startsWith("#") ? newTag : `#${newTag}`;

    const updatedTags = [...(image.data.tags || [])];

    if (updatedTags.includes(tag)) return;

    updatedTags.push(tag);

    const response = await handleAddTags(image.data._id, updatedTags);

    if (!response) return;

    setImage((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        tags: updatedTags,
      },
    }));
  };

  const removeTag = async (tagToRemove) => {
    const updatedTags = image.data.tags.filter((tag) => tag !== tagToRemove);

    const response = await handleAddTags(image.data._id, updatedTags);

    if (!response) return;

    setImage((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        tags: updatedTags,
      },
    }));
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
      <PhotoViewer
        image={imageData?.data?.imageUrl}
        title={imageData?.data?.name}
      />

      {/* =======================================================
          MOBILE DETAILS
      ======================================================= */}
      <div className="flex-1 overflow-hidden lg:hidden">
        <PhotoMobileDetails
          photo={image?.data}
          favorite={image?.isFavorite}
          onToggleFavorite={() => setFavorite((prev) => !prev)}
          tags={image?.data?.tags}
          onAddTag={addTag}
          onRemoveTag={removeTag}
        />
      </div>

      {/* =======================================================
          DESKTOP DETAILS
      ======================================================= */}
      <div className="hidden flex-1 overflow-hidden lg:block">
        <PhotoDesktopDetails
          photo={image?.data}
          onAddTag={addTag}
          favorite={image?.data?.isFavorite}
          comments={image?.data?.comments}
          onToggleFavorite={() => setFavorite((prev) => !prev)}
          onRemoveTag={removeTag}
          onAddComment={addComment}
        />
      </div>
    </main>
  );
}
