import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function BookQuotes({ quotes }) {
  return (
    <div className="flex flex-col gap-3">
      {quotes.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </div>
  );
}

function QuoteCard({ quote }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(quote.liked);
  const [likeCount, setLikeCount] = useState(quote.likes);

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

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${avatarColors[quote.user.color]}`}
        >
          {quote.user.initials}
        </div>
        <div>
          <div className="text-sm font-medium">{quote.user.username}</div>
          <div className="text-xs text-gray-400">{quote.createdAt}</div>
        </div>
      </div>
      <div className="border-l-4 border-blue-500 pl-4 mb-3">
        <p className="text-sm leading-relaxed">"{quote.quote}"</p>
      </div>
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

export default BookQuotes;
