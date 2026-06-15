import { createContext, useContext } from "react";

const AlbumContext = createContext();

const useAlbumContext = () => useContext(AlbumContext);

export default useAlbumContext;

export function AlbumProvider({ children }) {
  const [isCreateAlbumOpen, setIsCreateAlbumOpen] = useState(false);

  const openCreateAlbum = () => setIsCreateAlbumOpen(true);
  const closeCreateAlbum = () => setIsCreateAlbumOpen(false);
  return (
    <AlbumContext.Provider
      value={{ isCreateAlbumOpen, openCreateAlbum, closeCreateAlbum }}
    >
      {children}
    </AlbumContext.Provider>
  );
}
