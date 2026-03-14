import { useTranslation } from "react-i18next";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { FaBook } from "react-icons/fa";

function BookPost({ post }) {
  const { t } = useTranslation();

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4">
      <PostHeader user={post.user} createdAt={post.createdAt} type="book" />
      <div className="flex gap-3 bg-gray-50 rounded-lg p-3 mb-4">
        {post.book.coverUrl ? (
          <img
            src={post.book.coverUrl}
            alt={post.book.title}
            className="w-12 h-16 object-cover rounded"
          />
        ) : (
          <div className="w-12 h-16 bg-gray-200 rounded flex items-center justify-center">
            <FaBook className="text-gray-400" size={16} />
          </div>
        )}
        <div>
          <div className="text-sm font-medium mb-1">{post.book.title}</div>
          <div className="text-sm text-gray-400 mb-2">{post.book.author}</div>
          <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-full">
            {t(`feed.status.${post.book.status}`)}
          </span>
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
