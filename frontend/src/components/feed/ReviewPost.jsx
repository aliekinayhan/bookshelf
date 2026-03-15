import { useNavigate } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

function ReviewPost({ post, onEdit, onDelete }) {
  const navigate = useNavigate();

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
      <PostHeader
        user={post.user}
        createdAt={post.createdAt}
        type="review"
        postId={post.id}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <div className="mb-4">
        <div className="text-sm font-medium mb-1">
          {/* Kitap adına tıklayınca kitap detayına git */}
          <span
            className="hover:text-blue-600 cursor-pointer"
            onClick={() => navigate(`/book/${post.book.isbn}`)}
          >
            {post.book.title}
          </span>
          {" — "}
          {/* Yazar adına tıklayınca yazar sayfasına git */}
          <span
            className="text-gray-500 hover:text-blue-600 cursor-pointer"
            onClick={() => navigate(`/author/${post.book.authorId}`)}
          >
            {post.book.author}
          </span>
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
