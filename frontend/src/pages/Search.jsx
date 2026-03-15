import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  searchBooks,
  searchAuthors,
  searchUsers,
} from "../services/searchService";
import { FaSearch, FaBook } from "react-icons/fa";
import { getInitials } from "../utils/helpers";

function BookCard({ book }) {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={() => {
        if (book.isbn) navigate(`/book/${book.isbn}`);
        else if (book.openLibraryId) navigate(`/book/${book.openLibraryId}`);
      }}
      className="flex flex-col gap-2 cursor-pointer group"
    >
      {book.coverUrl && !imgError ? (
        <img
          src={book.coverUrl}
          alt={book.title}
          className="w-full h-28 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-28 bg-gray-100 rounded-lg flex items-center justify-center group-hover:opacity-90 transition-opacity">
          <FaBook size={20} className="text-gray-400" />
        </div>
      )}
      <div className="text-xs font-medium text-center truncate">
        {book.title}
      </div>
      <div className="text-xs text-gray-400 text-center truncate">
        {book.author}
      </div>
    </div>
  );
}

function Search() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("books");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        if (activeTab === "books") {
          const data = await searchBooks(query);
          setResults(data);
        } else if (activeTab === "authors") {
          const data = await searchAuthors(query);
          setResults(data);
        } else if (activeTab === "users") {
          const data = await searchUsers(query);
          setResults(data);
        }
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(debounceRef.current);
  }, [query, activeTab]);

  const tabs = [
    { key: "books", label: t("search.tabs.books") },
    { key: "authors", label: t("search.tabs.authors") },
    { key: "users", label: t("search.tabs.users") },
  ];

  const avatarColors = [
    "bg-blue-100 text-blue-600",
    "bg-green-100 text-green-600",
    "bg-purple-100 text-purple-600",
  ];

  const getAvatarColor = (name) =>
    avatarColors[name?.charCodeAt(0) % avatarColors.length];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Arama kutusu */}
      <div className="relative mb-6">
        <FaSearch
          size={15}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("search.placeholder")}
          className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500"
          autoFocus
        />
      </div>

      {/* Sekmeler */}
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key);
              setResults([]);
            }}
            className={`px-5 py-2.5 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.key
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* İçerik */}
      {loading ? (
        <div className="text-center py-20 text-gray-400 text-sm">
          {t("search.searching")}
        </div>
      ) : !query.trim() ? (
        <div className="text-center py-20">
          <FaSearch size={32} className="text-gray-300 mx-auto mb-4" />
          <p className="text-gray-400 text-sm">
            {t("search.placeholder_empty")}
          </p>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 text-sm">
            "{query}" {t("search.empty")}
          </p>
        </div>
      ) : activeTab === "books" ? (
        <div className="grid grid-cols-5 gap-4">
          {results.map((book, i) => (
            <BookCard key={i} book={book} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {results.map((item, i) => (
            <div
              key={i}
              onClick={() =>
                activeTab === "authors"
                  ? navigate(`/author/${item.id}`)
                  : navigate(`/profile/${item.username}`)
              }
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 cursor-pointer hover:border-gray-300 transition-colors"
            >
              {item.photoUrl ? (
                <img
                  src={item.photoUrl}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              ) : (
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${getAvatarColor(item.name || item.username)}`}
                >
                  {activeTab === "authors"
                    ? getInitials(
                        item.name?.split(" ")[0],
                        item.name?.split(" ")[1],
                      )
                    : getInitials(item.firstName, item.lastName)}
                </div>
              )}
              <div>
                <div className="text-sm font-medium mb-1">
                  {activeTab === "authors" ? item.name : item.username}
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full inline-block ${
                    activeTab === "authors"
                      ? "bg-blue-50 text-blue-600"
                      : "bg-green-50 text-green-600"
                  }`}
                >
                  {activeTab === "authors"
                    ? t("search.badges.author")
                    : t("search.badges.user")}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
