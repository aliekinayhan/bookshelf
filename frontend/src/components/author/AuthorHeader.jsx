import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getInitials } from "../../utils/helpers";

function AuthorHeader({ author }) {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    setIsFollowing(!isFollowing);
    // TODO: Backend'e POST /api/authors/:id/follow
  };

  const metaItems = [
    { label: t("author.books"), value: author.stats.books },
    {
      label: t("author.readers"),
      value: author.stats.readers.toLocaleString(),
    },
    { label: t("author.likes"), value: author.stats.likes.toLocaleString() },
    { label: t("author.avgRating"), value: author.stats.avgRating },
  ];

  return (
    <div className="flex gap-8 mb-8">
      {/* Fotoğraf veya initials */}
      <div className="flex-shrink-0">
        {author.photoUrl ? (
          <img
            src={author.photoUrl}
            alt={author.name}
            className="w-28 h-28 rounded-full object-cover"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-4xl font-bold">
            {getInitials(author.name.split(" ")[0], author.name.split(" ")[1])}
          </div>
        )}
      </div>

      <div className="flex-1">
        {/* İsim + takip butonu */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">{author.name}</h1>
          <button
            onClick={handleFollow}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              isFollowing
                ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {isFollowing ? t("author.unfollow") : t("author.follow")}
          </button>
        </div>

        {/* İstatistikler */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {metaItems.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-lg px-3 py-2.5">
              <div className="text-xs text-gray-400 mb-1">{item.label}</div>
              <div className="text-sm font-medium">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Biyografi */}
        {author.bio && (
          <p className="text-sm text-gray-600 leading-relaxed">{author.bio}</p>
        )}
      </div>
    </div>
  );
}

export default AuthorHeader;
