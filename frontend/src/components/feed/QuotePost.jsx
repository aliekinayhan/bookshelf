import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

function QuotePost({ post }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4">
      <PostHeader user={post.user} createdAt={post.createdAt} type="quote" />

      {/* Alıntı */}
      <div className="border-l-4 border-blue-500 pl-4 mb-4">
        <p className="text-base leading-relaxed mb-2">"{post.quote}"</p>
        <p className="text-sm text-gray-400">
          — {post.book.title}, {post.book.author}
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
