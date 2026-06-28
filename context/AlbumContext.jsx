import { createContext, useContext, useState } from "react";

const AlbumContext = createContext();

const useAlbumContext = () => useContext(AlbumContext);

export default useAlbumContext;

export function AlbumProvider({ children }) {
  const [isCreateAlbumOpen, setIsCreateAlbumOpen] = useState(false);
  const [isUploadPhotoOpen, setIsUploadPhotoOpen] = useState(false);

  const openCreateAlbum = () => setIsCreateAlbumOpen(true);
  const closeCreateAlbum = () => setIsCreateAlbumOpen(false);

  const openUploadPhoto = () => setIsUploadPhotoOpen(true);
  const closeUploadPhoto = () => setIsUploadPhotoOpen(false);
  return (
    <AlbumContext.Provider
      value={{
        isCreateAlbumOpen,
        openCreateAlbum,
        closeCreateAlbum,

        isUploadPhotoOpen,
        openUploadPhoto,
        closeUploadPhoto,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
}
