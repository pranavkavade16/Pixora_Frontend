import { useState } from "react";
import axios from "axios";

export const useAddAlbum = () => {
  const [loading, setLoading] = useState(false);

  const handleAddAlbum = async (albumData) => {
    if (!albumData.name?.trim()) {
      throw new Error("Name is required.");
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://pixora-backend-roan.vercel.app/albums",
        albumData,
      );
      console.log("Uploading");

      return response.data;
      console.log("Album created successfully.");
    } finally {
      setLoading(false);
    }
  };

  return {
    handleAddAlbum,
    loading,
  };
};
