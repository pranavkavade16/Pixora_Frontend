import { useState } from "react";
import { X, ImagePlus, User, Star } from "lucide-react";
import useAlbumContext from "../context/AlbumContext";
import { useAddPhoto } from "../features/photos/hooks/useAddPhoto";

const UploadPhotoModal = () => {
  const { isUploadPhotoOpen, closeUploadPhoto, selectedAlbumId } =
    useAlbumContext();
  const { handleAddImage, loading } = useAddPhoto();

  const [personInput, setPersonInput] = useState("");
  const [persons, setPersons] = useState([]);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  if (!isUploadPhotoOpen) return null;

  const removeTag = (tag) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const addTag = (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    const value = tagInput.trim();

    if (!value) return;

    if (!tags.includes(value)) {
      setTags((prev) => [...prev, value]);
    }

    setTagInput("");
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return "";

    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));

    return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
  };

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(file);

    // preview state before upload
    setUploadProgress(0);

    let progress = 0;

    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 50);
  };
  const addPerson = (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    const value = personInput.trim();

    if (!value) return;

    if (!persons.includes(value)) {
      setPersons((prev) => [...prev, value]);
    }

    setPersonInput("");
  };

  const removePerson = (person) => {
    setPersons((prev) => prev.filter((p) => p !== person));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    handleAddImage(
      {
        userId: "6a31773c0dc54daa4bd9902e",
        image,
        name,
        tags,
        persons,
        isFavorite,
      },
      selectedAlbumId,
    );
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="flex h-[90vh] w-full max-w-125 flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* HEADER */}

        <div className="flex items-center justify-between border-b border-[#f1f1f1] px-6 py-5 shrink-0">
          <h2 className="text-[32px] font-semibold">Upload Photo</h2>

          <button type="button" onClick={closeUploadPhoto}>
            <X size={30} />
          </button>
        </div>

        {/* SCROLLABLE BODY */}

        <form
          id="upload-form"
          onSubmit={onSubmit}
          className="flex-1 overflow-y-auto px-6 py-6"
        >
          <div className="space-y-6">
            {/* DROPZONE */}
            {!image ? (
              <label className="flex min-h-70 cursor-pointer flex-col items-center justify-center rounded-[20px] border-2 border-dashed border-[#c7c4d6] px-6 text-center hover:bg-[#fafaff]">
                <input
                  hidden
                  type="file"
                  accept=".png,.jpg,.jpeg,.webp"
                  onChange={handleImageSelect}
                />

                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#e2dfff]">
                  <ImagePlus size={34} className="text-[#4241bc]" />
                </div>

                <h3 className="text-[20px] font-semibold">
                  Drag and drop your photo here
                </h3>

                <p className="mt-2 text-[18px] text-[#666]">
                  PNG, JPG, or WEBP up to 20MB
                </p>

                <span className="mt-8 rounded-xl border border-[#ddd] px-8 py-3 text-[18px]">
                  Browse files
                </span>
              </label>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-2xl border border-[#E5E4E1] bg-[#F8F8F8] p-4">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="preview"
                    className="h-18 w-18 rounded-xl object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-xl">{image.name}</h4>

                    <p className="mt-1 text-lg text-[#666]">
                      {formatFileSize(image.size)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setImage(null);
                      setUploadProgress(0);
                    }}
                  >
                    <X size={28} />
                  </button>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-[#E5E5E5]">
                  <div
                    className="h-full rounded-full bg-[#4241BC] transition-all duration-300"
                    style={{
                      width: `${uploadProgress}%`,
                    }}
                  />
                </div>
              </div>
            )}
            <div className="space-y-2">
              <label className="block text-lg text-[#464553]">Photo Name</label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sunset at Marina Beach"
                className="h-14 w-full rounded-xl border border-[#e5e4e1] px-4 outline-none focus:border-[#4241bc]"
              />
            </div>
            {/* TAGS */}
            <div>
              <label className="mb-2 block text-lg">Tags</label>

              <div className="flex min-h-14 flex-wrap gap-2 rounded-xl border border-[#ddd] p-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 rounded-lg bg-[#e2dfff] px-3 py-2 text-[#4241bc]"
                  >
                    {tag}

                    <button type="button" onClick={() => removeTag(tag)}>
                      <X size={14} />
                    </button>
                  </span>
                ))}

                <input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={addTag}
                  placeholder="Add tag..."
                  className="min-w-30 flex-1 border-none outline-none"
                />
              </div>
            </div>
            {/* PERSONS */}
            <div>
              <label className="mb-2 block text-lg">Person Names</label>

              <div className="flex min-h-14 flex-wrap gap-2 rounded-xl border border-[#ddd] p-3">
                {persons.map((person) => (
                  <span
                    key={person}
                    className="flex items-center gap-1 rounded-lg bg-[#e2dfff] px-3 py-2 text-[#4241bc]"
                  >
                    <User size={14} />

                    {person}

                    <button type="button" onClick={() => removePerson(person)}>
                      <X size={14} />
                    </button>
                  </span>
                ))}

                <User
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777]"
                />

                <input
                  value={personInput}
                  onChange={(e) => setPersonInput(e.target.value)}
                  onKeyDown={addPerson}
                  placeholder="Add person..."
                  className="min-w-30 flex-1 border-none outline-none"
                />
              </div>
            </div>
            {/* FAVORITE */}
            <div className="flex items-center justify-between rounded-xl border border-[#ddd] bg-[#f4f3f1] p-4">
              <div className="flex items-center gap-3">
                <Star size={22} className="text-[#f59e0b]" />

                <span className="text-lg">Mark as favorite</span>
              </div>

              <button
                type="button"
                onClick={() => setIsFavorite((prev) => !prev)}
                className={`relative h-7 w-14 rounded-full transition ${
                  isFavorite ? "bg-[#4241bc]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition ${
                    isFavorite ? "translate-x-7" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </form>

        {/* FOOTER */}

        <div className="shrink-0 border-t border-[#f1f1f1] px-6 py-5">
          <button
            form="upload-form"
            type="submit"
            disabled={loading}
            className="h-14 w-full rounded-xl bg-[#4241bc] text-lg font-semibold text-white hover:bg-[#3533b0]"
          >
            {loading ? "Uploading..." : "Upload Photo"}
          </button>

          <button
            type="button"
            onClick={closeUploadPhoto}
            className="mt-3 h-12 w-full text-lg text-[#666]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPhotoModal;
