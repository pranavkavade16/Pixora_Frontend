import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import FullScreenViewer from "../components/FullScreenPhotoViewer";

const FullScreenPhotoPage = () => {
  const { imageId } = useParams();

  const { data, loading } = useFetch(
    `https://pixora-backend-roan.vercel.app/image/${imageId}`,
  );

  if (loading) return null;

  return <FullScreenViewer photo={data.data} />;
};

export default FullScreenPhotoPage;
