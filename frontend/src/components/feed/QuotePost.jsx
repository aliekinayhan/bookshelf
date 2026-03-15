import { useNavigate } from "react-router-dom";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

function QuotePost({ post, onEdit, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4">
      <PostHeader
        user={post.user}
        createdAt={post.createdAt}
        type="quote"
        postId={post.id}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <div className="border-l-4 border-blue-500 pl-4 mb-4">
        <p className="text-base leading-relaxed mb-2">"{post.quote}"</p>
        <p className="text-sm text-gray-400">
          {/* Kitap adına tıklayınca kitap detay sayfasına git */}
          <span
            className="hover:text-blue-600 cursor-pointer"
            onClick={() => navigate(`/book/${post.book.isbn}`)}
          >
            {post.book.title}
          </span>
          {", "}
          {/* Yazar adına tıklayınca yazar sayfasına git */}
          <span
            className="hover:text-blue-600 cursor-pointer"
            onClick={() => navigate(`/author/${post.book.authorId}`)}
          >
            {post.book.author}
          </span>
        </p>
      </div>
      <PostFooter
        likes={post.likes}
        comments={post.comments}
        liked={post.liked}
      />
    </div>
  );
}

export default QuotePost;
