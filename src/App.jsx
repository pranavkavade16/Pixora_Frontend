import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import AlbumDetails from "../pages/AlbumDetails";
import LibraryPage from "../pages/LibraryPage";
import TopNav from "../components/TopNav";
import { DashboardNav } from "../components/DashboardNav";

function App() {
  return (
    <BrowserRouter>
      <DashboardNav />
      <Routes>
        <Route path="/" element={<LibraryPage />} />
        <Route path={"/albumDetails"} element={<AlbumDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
