import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";

function ProfileLibrary({ books }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredBooks = books.filter((book) => {
    if (activeFilter === "all") return true;
    return book.status === activeFilter;
  });

  // Her filtre için kitap sayısını hesapla
  const counts = {
    all: books.length,
    READING: books.filter((b) => b.status === "READING").length,
    COMPLETED: books.filter((b) => b.status === "COMPLETED").length,
    WANT_TO_READ: books.filter((b) => b.status === "WANT_TO_READ").length,
    DROPPED: books.filter((b) => b.status === "DROPPED").length,
  };

  const filters = [
    { key: "all", label: t("profile.libraryFilters.all") },
    { key: "READING", label: t("profile.libraryFilters.reading") },
    { key: "COMPLETED", label: t("profile.libraryFilters.completed") },
    { key: "WANT_TO_READ", label: t("profile.libraryFilters.wantToRead") },
    { key: "DROPPED", label: t("profile.libraryFilters.dropped") },
  ];

  return (
    <div className="px-6 mt-4">
      {/* Filtreler — sayılarla */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`text-sm px-4 py-1.5 rounded-full transition-colors flex items-center gap-1.5 ${
              activeFilter === filter.key
                ? "bg-blue-600 text-white"
                : "border border-gray-200 text-gray-500 hover:bg-gray-50"
            }`}
          >
            {filter.label}
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeFilter === filter.key
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {counts[filter.key]}
            </span>
          </button>
        ))}
      </div>

      {/* Kitap grid — tıklanabilir */}
      <div className="grid grid-cols-5 gap-4">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            onClick={() => navigate(`/book/${book.isbn}`)}
            className="flex flex-col gap-2 cursor-pointer group"
          >
            {book.coverUrl ? (
              <img
                src={book.coverUrl}
                alt={book.title}
                className="w-full h-28 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
              />
            ) : (
              <div className="w-full h-28 bg-gray-200 rounded-lg flex items-center justify-center group-hover:opacity-90 transition-opacity">
                <FaBook className="text-gray-400" size={20} />
              </div>
            )}
            <div className="text-xs text-gray-600 text-center truncate">
              {book.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileLibrary;
