import { useState } from "react";
import axios from "axios";

const useToggleFavorite = () => {
  const [loading, setLoading] = useState(false);

  const handleToggleFavorite = async ({
    albumId,
    imageId,
    isFavorite,
  }) => {
    setLoading(true);

    try {
      const response = await axios.put(
        `https://pixora-backend-roan.vercel.app/albums/${albumId}/images/${imageId}/favorite`,
        {
          isFavorite,
        }
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
    handleToggleFavorite,
    loading,
  };
};

export default useToggleFavorite;