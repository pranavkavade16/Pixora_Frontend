import { useState } from "react";
import axios from "axios";

export const useAddPhoto = () => {
  const [loading, setLoading] = useState(false);

  const handleAddImage = async (photoData) => {
    const formData = new FormData();

    formData.append("image", photoData.image);
    formData.append("name", photoData.name);
    formData.append("isFavorite", photoData.isFavorite);
    formData.append("tags", JSON.stringify(photoData.tags));
    formData.append("persons", JSON.stringify(photoData.persons));
    formData.append("userId", JSON.stringify(photoData.userId));

    try {
      setLoading(true);

      const response = await axios.post(
        "https://pixora-backend-roan.vercel.app/albums/6a3fcf00a3d4b926ddd4ed4b/images",
        formData,
      );
      console.log("Uploading");
      console.log("Image uploaded successfully.");
      return response.data;
    } catch (error) {
      console.error(error);
      console.log("Status:", error.response?.status);
      console.log("Data:", error.response?.data);
      console.log("Message:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleAddImage,
    loading,
  };
};
