import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaStar, FaRegStar, FaHeart, FaRegHeart } from "react-icons/fa";

function BookReviews({ reviews }) {
  return (
    <div className="flex flex-col gap-3">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(review.liked);
  const [likeCount, setLikeCount] = useState(review.likes);

  const avatarColors = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
  };

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

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${avatarColors[review.user.color]}`}
        >
          {review.user.initials}
        </div>
        <div>
          <div className="text-sm font-medium">{review.user.username}</div>
          <div className="text-xs text-gray-400">{review.createdAt}</div>
        </div>
        <div className="flex gap-0.5 ml-auto">{renderStars(review.rating)}</div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        {review.review}
      </p>
      <div className="pt-3 border-t border-gray-100">
        <button
          onClick={handleLike}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-500"
        >
          {isLiked ? (
            <FaHeart size={13} className="text-red-500" />
          ) : (
            <FaRegHeart size={13} />
          )}
          {likeCount}
        </button>
      </div>
    </div>
  );
}

export default BookReviews;
