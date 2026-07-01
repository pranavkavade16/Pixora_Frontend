import { createContext, useContext, useState } from "react";

const AlbumContext = createContext();

const useAlbumContext = () => useContext(AlbumContext);

export default useAlbumContext;

export function AlbumProvider({ children }) {
  const [isCreateAlbumOpen, setIsCreateAlbumOpen] = useState(false);
  const [isUploadPhotoOpen, setIsUploadPhotoOpen] = useState(false);
  const [isShareAlbumOpen, setIsShareAlbumOpen] = useState(false);

  const openCreateAlbum = () => setIsCreateAlbumOpen(true);
  const closeCreateAlbum = () => setIsCreateAlbumOpen(false);

  const openUploadPhoto = () => setIsUploadPhotoOpen(true);
  const closeUploadPhoto = () => setIsUploadPhotoOpen(false);

  const openShareAlbum = () => setIsShareAlbumOpen(true);
  const closeShareAlbum = () => setIsShareAlbumOpen(false);
  return (
    <AlbumContext.Provider
      value={{
        isCreateAlbumOpen,
        openCreateAlbum,
        closeCreateAlbum,

        isUploadPhotoOpen,
        openUploadPhoto,
        closeUploadPhoto,

        isShareAlbumOpen,
        openShareAlbum,
        closeShareAlbum,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
}
