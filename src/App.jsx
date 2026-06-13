import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import AlbumDetails from "../pages/AlbumDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route path={"/albumDetails"} element={<AlbumDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
