import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaEllipsisH, FaEdit, FaTrash } from "react-icons/fa";

function PostHeader({ user, createdAt, type, postId, onEdit, onDelete }) {
  const { t } = useTranslation();
  const { user: currentUser } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const isOwnPost = currentUser?.username === user.username;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const typeStyles = {
    quote: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      label: t("feed.postTypes.quote"),
    },
    book: {
      bg: "bg-green-50",
      text: "text-green-600",
      label: t("feed.postTypes.book"),
    },
    review: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      label: t("feed.postTypes.review"),
    },
  };

  const avatarStyles = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
  };

  const style = typeStyles[type];
  const avatarStyle = avatarStyles[user.color];

  const handleDelete = () => {
    setMenuOpen(false);
    if (window.confirm(t("post.deleteConfirm"))) {
      onDelete(postId);
    }
  };

  const handleEdit = () => {
    setMenuOpen(false);
    onEdit(postId);
  };

  return (
    <div className="flex items-center gap-3 mb-4">
      {/* Avatar — tıklayınca profile git */}
      <div
        onClick={() => navigate(`/profile/${user.username}`)}
        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity ${avatarStyle}`}
      >
        {user.initials}
      </div>

      {/* İsim ve zaman */}
      <div>
        {/* Kullanıcı adına tıklayınca da profile git */}
        <div
          onClick={() => navigate(`/profile/${user.username}`)}
          className="text-sm font-medium cursor-pointer hover:text-blue-600"
        >
          {user.username}
        </div>
        <div className="text-xs text-gray-400">{createdAt}</div>
      </div>

      {/* Sağ taraf — badge + 3 nokta */}
      <div className="ml-auto flex items-center gap-2">
        <div
          className={`text-xs px-3 py-1 rounded-full ${style.bg} ${style.text}`}
        >
          {style.label}
        </div>

        {isOwnPost && (
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600"
            >
              <FaEllipsisH size={14} />
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl overflow-hidden z-10 min-w-36">
                <button
                  onClick={handleEdit}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 text-left"
                >
                  <FaEdit size={13} className="text-gray-400" />
                  {t("post.edit")}
                </button>
                <div className="h-px bg-gray-100" />
                <button
                  onClick={handleDelete}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 text-left"
                >
                  <FaTrash size={13} />
                  {t("post.delete")}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PostHeader;
