import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { AlbumProvider } from "../context/AlbumContext";
import AlbumDetails from "../pages/AlbumDetails";
import LibraryPage from "../pages/LibraryPage";
import TopNav from "../components/TopNav";
import { DashboardNav } from "../components/DashboardNav";
import CreateAlbumModal from "../components/CreateAlbumModal";
import PhotoDetailPage from "../pages/PhotoDetails";
import UploadPhotoModal from "../components/UploadPhotoModal";
import ShareAlbumModal from "../components/ShareAlbumModal";
import AppLayout from "../components/AppLayout";

function App() {
  return (
    <AlbumProvider>
      <BrowserRouter>
        {/* <DashboardNav /> */}
        <CreateAlbumModal />
        <UploadPhotoModal />
        <ShareAlbumModal />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<LibraryPage />} />
            <Route path="/albumDetails/:albumId" element={<AlbumDetails />} />
            <Route
              path="/photoDetails/:imageId"
              element={<PhotoDetailPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AlbumProvider>
  );
}

export default App;
