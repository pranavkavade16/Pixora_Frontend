import { useState } from "react";
import axios from "axios";
const useAddTags = () => {
  const [loading, setLoading] = useState(false);

  const handleAddTags = async (tags) => {
    setLoading(true);

    try {
      const response = await axios.push(
        `https://pixora-backend-roan.vercel.app/albums/${imageId}/comment`,
        tags,
      );

      console.log("Uploading");
      console.log("Tags updated successfully.");
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

  return { handleAddTags, loading };
};
