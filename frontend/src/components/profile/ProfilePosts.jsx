import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  FaStar,
  FaRegStar,
  FaHeart,
  FaRegHeart,
  FaRegComment,
} from "react-icons/fa";

function ProfilePosts({ posts, activeFilter, onFilterChange }) {
  const { t } = useTranslation();

  const filteredPosts = posts.filter((post) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "quotes") return post.type === "quote";
    if (activeFilter === "reviews") return post.type === "review";
    return true;
  });

  const filters = [
    { key: "all", label: t("profile.postFilters.all") },
    { key: "quotes", label: t("profile.postFilters.quotes") },
    { key: "reviews", label: t("profile.postFilters.reviews") },
  ];

  return (
    <div className="px-6 mt-4">
      <div className="flex gap-2 mb-4">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`text-sm px-4 py-1.5 rounded-full transition-colors ${
              activeFilter === filter.key
                ? "bg-blue-600 text-white"
                : "border border-gray-200 text-gray-500 hover:bg-gray-50"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

function PostCard({ post }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(post.liked);
  const [likeCount, setLikeCount] = useState(post.likes);

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

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <FaStar key={i} size={12} className="text-amber-400" />
      ) : (
        <FaRegStar key={i} size={12} className="text-gray-300" />
      ),
    );

  const badgeStyles = {
    quote: { bg: "bg-blue-50", text: "text-blue-600", label: "Alıntı" },
    review: { bg: "bg-purple-50", text: "text-purple-600", label: "İnceleme" },
  };

  const badge = badgeStyles[post.type];

  return (
    <div
      className="bg-white border border-gray-200 rounded-xl p-5 cursor-pointer hover:border-gray-300 transition-colors"
      onClick={() => navigate(`/post/${post.id}`)}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs text-gray-400">{post.createdAt}</span>
        <span
          className={`text-xs px-3 py-1 rounded-full ${badge.bg} ${badge.text}`}
        >
          {badge.label}
        </span>
      </div>

      {post.type === "quote" && (
        <div className="border-l-4 border-blue-500 pl-4 mb-4">
          <p className="text-sm leading-relaxed mb-2">"{post.quote}"</p>
          <p className="text-xs text-gray-400">
            — {post.book.title}, {post.book.author}
          </p>
        </div>
      )}

      {post.type === "review" && (
        <div className="mb-4">
          <div className="text-sm font-medium mb-1">
            {post.book.title} — {post.book.author}
          </div>
          <div className="flex gap-0.5 mb-2">{renderStars(post.rating)}</div>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
            {post.review}
          </p>
        </div>
      )}

      <div
        className="flex gap-4 pt-3 border-t border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleLike}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-500"
        >
          {isLiked ? (
            <FaHeart size={14} className="text-red-500" />
          ) : (
            <FaRegHeart size={14} />
          )}
          {likeCount}
        </button>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-500">
          <FaRegComment size={14} />
          {post.comments}
        </button>
      </div>
    </div>
  );
}

export default ProfilePosts;
