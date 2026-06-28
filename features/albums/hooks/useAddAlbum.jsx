import { useState } from "react";
import axios from "axios";

export const useAddAlbum = () => {
  const [loading, setLoading] = useState(false);

  const handleAddAlbum = async (albumData) => {
    if (!albumData.name?.trim()) {
      throw new Error("Album name is required.");
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        "https://pixora-backend-roan.vercel.app/albums",
        albumData,
      );

      console.log("Album created successfully.");

      return data;
    } catch (error) {
      console.error("Error creating album:", error);

      throw (
        error.response?.data ||
        new Error("Something went wrong while creating the album.")
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    handleAddAlbum,
    loading,
  };
};
