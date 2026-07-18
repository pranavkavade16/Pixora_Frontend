import { useMemo, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import useAddTags from "../features/photos/hooks/useAddTags";
import PhotoViewer from "../components/PhotoViewer";
import PhotoDesktopDetails from "../components/PhotoDesktopDetails";
import PhotoMobileDetails from "../components/PhotoMobileDetails";
import useAddComment from "../features/photos/hooks/useAddComment";
import useToggleFavorite from "../features/photos/hooks/useToggleFavorite";
import useDeleteImage from "../features/photos/hooks/useDeleteImage";

export default function PhotoDetailPage() {
  const { imageId } = useParams();
  const { handleAddTags } = useAddTags();
  const { handleAddComment } = useAddComment();
  const { handleToggleFavorite } = useToggleFavorite();
  const navigate = useNavigate();
  const { handleDeleteImage } = useDeleteImage();
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
  const addComment = async (newComment) => {
    if (!newComment.trim()) return;

    const response = await handleAddComment({
      imageId: image.data._id,
      userId: "6a31773c0dc54daa4bd9902e",
      comment: newComment,
    });

    console.log(response);
    if (!response) return;

    setImage((prev) => ({
      ...prev,
      data: response.data,
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

  const toggleFavorite = async () => {
    const response = await handleToggleFavorite({
      albumId: image.data.albumId,
      imageId: image.data._id,
      isFavorite: !image.data.isFavorite,
    });

    console.log("Successfully toggled");

    if (!response) return;

    setImage((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        isFavorite: !prev.data.isFavorite,
      },
    }));
  };

  const deleteImage = async () => {
    const response = await handleDeleteImage({
      albumId: image.data.albumId,
      imageId: image.data._id,
      userId: "6a31773c0dc54daa4bd9902e",
    });

    if (!response) return;
    console.log("Image deleted");
    // Navigate back to the album page
    navigate(`/albumDetails/${image.data.albumId}`);
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
          onToggleFavorite={toggleFavorite}
          tags={image?.data?.tags}
          onAddTag={addTag}
          onRemoveTag={removeTag}
          onAddComment={addComment}
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
          onToggleFavorite={toggleFavorite}
          onRemoveTag={removeTag}
          onAddComment={addComment}
          onDelete={deleteImage}
        />
      </div>
    </main>
  );
}
