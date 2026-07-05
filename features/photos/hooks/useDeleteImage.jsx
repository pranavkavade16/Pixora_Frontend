import { useState } from "react";
import axios from "axios";

const useDeleteImage = () => {
  const [loading, setLoading] = useState(false);

  const handleDeleteImage = async ({ albumId, imageId, userId }) => {
    setLoading(true);

    try {
      const response = await axios.delete(
        `https://pixora-backend-roan.vercel.app/albums/${albumId}/images/${imageId}`,
        {
          data: {
            userId,
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error(error);
      console.log("Status:", error.response?.status);
      console.log("Data:", error.response?.data);
      console.log("Message:", error.message);

      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    handleDeleteImage,
    loading,
  };
};

export default useDeleteImage;