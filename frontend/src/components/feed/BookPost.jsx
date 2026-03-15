import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { FaBook } from "react-icons/fa";

function BookPost({ post, onEdit, onDelete }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4">
      <PostHeader
        user={post.user}
        createdAt={post.createdAt}
        type="book"
        postId={post.id}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      {/* Kitap kartına tıklayınca kitap detay sayfasına git */}
      <div
        className="flex gap-3 bg-gray-50 rounded-lg p-3 mb-4 cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={() => navigate(`/book/${post.book.isbn}`)}
      >
        {post.book.coverUrl ? (
          <img
            src={post.book.coverUrl}
            alt={post.book.title}
            className="w-12 h-16 object-cover rounded flex-shrink-0"
          />
        ) : (
          <div className="w-12 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center">
            <FaBook className="text-gray-400" size={16} />
          </div>
        )}
        <div>
          <div className="text-sm font-medium mb-1">{post.book.title}</div>
          {/* Yazar adına tıklayınca yazar sayfasına git */}
          <div
            className="text-sm text-gray-400 mb-2 hover:text-blue-600 inline-block"
            onClick={(e) => {
              e.stopPropagation(); // kitap kartının onClick'ini engelle
              navigate(`/author/${post.book.authorId}`);
            }}
          >
            {post.book.author}
          </div>
          <div>
            <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-full">
              {t(`feed.status.${post.book.status}`)}
            </span>
          </div>
        </div>
      </div>

      <PostFooter
        likes={post.likes}
        comments={post.comments}
        liked={post.liked}
      />
    </div>
  );
}

export default BookPost;
