import axios from "axios";
import { useState } from "react";

const useAddComment = () => {
  const [loading, setLoading] = useState(false);

  const handleAddComment = async (imageId, comment) => {
    setLoading(true);
    try {
      const response = await axios.patch(
        `https://pixora-backend-roan.vercel.app/image/${imageId}/comment`,
        comment,
      );

      console.log("Uploading");
      console.log("Comment updated successfully.");
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

  return { handleAddComment, loading };
};

export default useAddComment;
