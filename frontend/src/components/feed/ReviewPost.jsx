import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { FaStar, FaRegStar } from "react-icons/fa";

function ReviewPost({ post }) {
  // 5 yıldız render et, dolu veya boş
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <FaStar key={i} size={13} className="text-amber-400" />
      ) : (
        <FaRegStar key={i} size={13} className="text-gray-300" />
      ),
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4">
      <PostHeader user={post.user} createdAt={post.createdAt} type="review" />

      {/* İnceleme */}
      <div className="mb-4">
        <div className="text-sm font-medium mb-1">
          {post.book.title} — {post.book.author}
        </div>
        <div className="flex gap-0.5 mb-3">{renderStars(post.rating)}</div>
        <p className="text-sm text-gray-500 leading-relaxed">{post.review}</p>
      </div>

      <PostFooter
        likes={post.likes}
        comments={post.comments}
        liked={post.liked}
      />
    </div>
  );
}

export default ReviewPost;
