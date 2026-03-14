import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaRegComment } from "react-icons/fa";

function PostFooter({ likes, comments, liked }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Beğeni state'i — başlangıçta mock datadan gelen değer
  const [isLiked, setIsLiked] = useState(liked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (!user) {
      // Giriş yapılmamışsa login'e yönlendir
      navigate("/login");
      return;
    }

    // TODO: Backend hazır olunca API çağrısı yapılacak
    if (isLiked) {
      setIsLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);
    }
  };

  return (
    <div className="flex gap-4 items-center pt-3 border-t border-gray-100">
      {/* Beğen butonu */}
      <button
        onClick={handleLike}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500"
      >
        {isLiked ? (
          <FaHeart size={15} className="text-red-500" />
        ) : (
          <FaRegHeart size={15} />
        )}
        {likeCount}
      </button>

      {/* Yorum butonu */}
      <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500">
        <FaRegComment size={15} />
        {comments}
      </button>
    </div>
  );
}

export default PostFooter;
