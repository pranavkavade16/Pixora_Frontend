import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import AlbumDetails from "../pages/AlbumDetails";
import LibraryPage from "../pages/LibraryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LibraryPage />} />
        <Route path={"/albumDetails"} element={<AlbumDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
