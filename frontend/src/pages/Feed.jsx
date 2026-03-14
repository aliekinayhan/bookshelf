import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";
import { mockPosts } from "../mock/feedData";
import QuotePost from "../components/feed/QuotePost";
import BookPost from "../components/feed/BookPost";
import ReviewPost from "../components/feed/ReviewPost";
import { FaBook, FaQuoteLeft } from "react-icons/fa";
import { getInitials } from "../utils/helpers";

function Feed() {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(user ? "following" : "explore");

  const renderPost = (post) => {
    switch (post.type) {
      case "quote":
        return <QuotePost key={post.id} post={post} />;
      case "book":
        return <BookPost key={post.id} post={post} />;
      case "review":
        return <ReviewPost key={post.id} post={post} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {user && (
        <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium flex-shrink-0">
            {getInitials(user.firstName, user.lastName)}
          </div>
          <div className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm text-gray-400 cursor-pointer hover:bg-gray-100">
            {t("feed.placeholder")}
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full hover:bg-blue-100">
              <FaBook size={11} />
              {t("feed.book")}
            </button>
            <button className="flex items-center gap-1.5 text-xs bg-green-50 text-green-600 px-3 py-1.5 rounded-full hover:bg-green-100">
              <FaQuoteLeft size={11} />
              {t("feed.quote")}
            </button>
          </div>
        </div>
      )}

      <div className="flex border-b border-gray-200 mb-6">
        {user && (
          <button
            onClick={() => setActiveTab("following")}
            className={`px-5 py-2.5 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "following"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {t("feed.following")}
          </button>
        )}
        <button
          onClick={() => setActiveTab("explore")}
          className={`px-5 py-2.5 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "explore"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          {t("feed.explore")}
        </button>
      </div>

      <div>{mockPosts.map((post) => renderPost(post))}</div>
    </div>
  );
}

export default Feed;
