import { useTranslation } from "react-i18next";

function PostHeader({ user, createdAt, type }) {
  const { t } = useTranslation();

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

  return (
    <div className="flex items-center gap-3 mb-4">
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium ${avatarStyle}`}
      >
        {user.initials}
      </div>
      <div>
        <div className="text-sm font-medium">{user.username}</div>
        <div className="text-xs text-gray-400">{createdAt}</div>
      </div>
      <div
        className={`ml-auto text-xs px-3 py-1 rounded-full ${style.bg} ${style.text}`}
      >
        {style.label}
      </div>
    </div>
  );
}

export default PostHeader;
