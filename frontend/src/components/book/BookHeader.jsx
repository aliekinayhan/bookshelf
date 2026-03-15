import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
  FaChevronDown,
  FaCheck,
  FaTrash,
  FaBook,
} from "react-icons/fa";

const STATUS_OPTIONS = [
  { key: "READING", label: "book.status.reading" },
  { key: "COMPLETED", label: "book.status.completed" },
  { key: "WANT_TO_READ", label: "book.status.wantToRead" },
  { key: "DROPPED", label: "book.status.dropped" },
];

function BookHeader({ book, onTabChange }) {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(book.likeCount);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(null);
  const [userRating, setUserRating] = useState(null);
  const [hoverRating, setHoverRating] = useState(null);

  const handleLike = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    if (isLiked) {
      setIsLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);
    }
  };

  const handleStatusSelect = (status) => {
    if (!user) {
      navigate("/login");
      return;
    }
    setCurrentStatus(status);
    setDropdownOpen(false);
    // TODO: Backend'e ISBN + status gönder
  };

  const handleRemove = () => {
    setCurrentStatus(null);
    setDropdownOpen(false);
    // TODO: Backend'den kaldır
  };

  const handleRate = (rating) => {
    if (!user) {
      navigate("/login");
      return;
    }
    setUserRating(rating);
    // TODO: Backend'e gönder
  };

  const currentStatusOption = STATUS_OPTIONS.find(
    (s) => s.key === currentStatus,
  );

  const metaItems = [
    { label: t("book.publishYear"), value: book.publishYear },
    { label: t("book.pages"), value: book.pageCount },
    {
      label: t("book.readers"),
      value: book.readerCount,
      clickable: true,
      onClick: () => {},
    },
    {
      label: t("book.reviews"),
      value: book.reviewCount,
      clickable: true,
      onClick: () => onTabChange("reviews"),
    },
  ];

  return (
    <div className="flex gap-8 mb-8">
      {/* Kapak */}
      <div className="flex-shrink-0">
        <img
          src={book.coverUrl}
          alt={book.title}
          className="w-36 h-52 object-cover rounded-xl"
        />
      </div>

      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-1">{book.title}</h1>

        {/* Yazar — tıklanabilir */}
        <p
          className="text-gray-500 text-base mb-2 cursor-pointer hover:text-blue-600 inline-block"
          onClick={() => navigate(`/author/${book.authorId}`)}
        >
          {book.author}
        </p>

        {/* Seri bilgisi */}
        {book.series && (
          <div className="flex items-center gap-1.5 mb-4">
            <FaBook size={12} className="text-gray-400" />
            <span className="text-sm text-gray-500">
              {book.series.name} — {book.series.order}. {t("book.seriesOrder")}
            </span>
          </div>
        )}

        {/* Ortalama puan + kullanıcı puanı + beğeni */}
        <div className="flex items-center gap-4 mb-5 flex-wrap">
          {/* Ortalama puan */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  width="15"
                  height="15"
                  fill={i < Math.floor(book.rating) ? "#EF9F27" : "none"}
                  stroke={i < Math.floor(book.rating) ? "#EF9F27" : "#D1D5DB"}
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium">{book.rating}</span>
          </div>

          <div className="h-3.5 w-px bg-gray-200" />

          {/* Kullanıcı puanı — interaktif */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">
              {t("book.yourRating")}:
            </span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }, (_, i) => {
                const starValue = i + 1;
                const filled = hoverRating
                  ? starValue <= hoverRating
                  : userRating
                    ? starValue <= userRating
                    : false;

                return (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    fill={filled ? "#EF9F27" : "none"}
                    stroke={filled ? "#EF9F27" : "#D1D5DB"}
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="cursor-pointer transition-transform hover:scale-110"
                    onMouseEnter={() => setHoverRating(starValue)}
                    onMouseLeave={() => setHoverRating(null)}
                    onClick={() => handleRate(starValue)}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                );
              })}
            </div>
            {userRating && (
              <span className="text-xs text-gray-400">{userRating}/5</span>
            )}
          </div>

          <div className="h-3.5 w-px bg-gray-200" />

          {/* Beğeni */}
          <button
            onClick={handleLike}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-500"
          >
            {isLiked ? (
              <FaHeart size={14} className="text-red-500" />
            ) : (
              <FaRegHeart size={14} />
            )}
            {likeCount} {t("book.likes")}
          </button>
        </div>

        {/* Metadata */}
        <div className="grid grid-cols-4 gap-3 mb-5">
          {metaItems.map((item, i) => (
            <div
              key={i}
              onClick={item.onClick}
              className={`bg-gray-50 rounded-lg px-3 py-2.5 ${item.clickable ? "cursor-pointer hover:bg-gray-100" : ""}`}
            >
              <div className="text-xs text-gray-400 mb-1">{item.label}</div>
              <div
                className={`text-sm font-medium ${item.clickable ? "text-blue-600 border-b border-dashed border-blue-400 inline-block" : ""}`}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Butonlar */}
        <div className="flex gap-3 items-center flex-wrap">
          {/* Kitaplığa ekle dropdown */}
          <div className="relative">
            <div className="flex items-center bg-blue-600 text-white rounded-lg overflow-hidden text-sm font-medium">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-4 py-2 flex items-center gap-2 hover:bg-blue-700"
              >
                {currentStatus ? (
                  <>
                    <FaCheck size={12} />
                    {t(currentStatusOption.label)}
                  </>
                ) : (
                  <>+ {t("book.addToLibrary")}</>
                )}
              </button>
              <div className="w-px bg-blue-500 self-stretch" />
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-2.5 py-2 hover:bg-blue-700"
              >
                <FaChevronDown size={11} />
              </button>
            </div>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute top-full mt-1.5 left-0 bg-white border border-gray-200 rounded-xl overflow-hidden z-10 min-w-44">
                {STATUS_OPTIONS.map((option) => (
                  <button
                    key={option.key}
                    onClick={() => handleStatusSelect(option.key)}
                    className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-left hover:bg-gray-50 ${
                      currentStatus === option.key
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {currentStatus === option.key && <FaCheck size={11} />}
                    {t(option.label)}
                  </button>
                ))}
                {currentStatus && (
                  <>
                    <div className="h-px bg-gray-100" />
                    <button
                      onClick={handleRemove}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 text-left"
                    >
                      <FaTrash size={11} />
                      {t("book.removeFromLibrary")}
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          <button className="border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
            {t("book.addQuote")}
          </button>
          <button className="border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
            {t("book.writeReview")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookHeader;
