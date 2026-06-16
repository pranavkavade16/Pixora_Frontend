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

function App() {
  return (
    <AlbumProvider>
      <BrowserRouter>
        <DashboardNav />
        <CreateAlbumModal />
        <Routes>
          <Route path="/" element={<LibraryPage />} />
          <Route path={"/albumDetails"} element={<AlbumDetails />} />
          <Route path="/photoDetails" element={<PhotoDetailPage />} />
        </Routes>
      </BrowserRouter>
    </AlbumProvider>
  );
}

export default App;
