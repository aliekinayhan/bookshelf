import { useTranslation } from "react-i18next";

function CurrentlyReading({ books }) {
  const { t } = useTranslation();

  if (!books.length) return null;

  return (
    <div className="px-6 mt-6">
      <h2 className="text-sm font-medium text-gray-500 mb-3">
        {t("profile.currentlyReading")}
      </h2>
      <div className="flex gap-3 flex-wrap">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex gap-3 bg-gray-50 rounded-xl p-3 flex-1 min-w-48 max-w-56"
          >
            {book.coverUrl ? (
              <img
                src={book.coverUrl}
                alt={book.title}
                className="w-11 h-16 object-cover rounded flex-shrink-0"
              />
            ) : (
              <div className="w-11 h-16 bg-gray-200 rounded flex-shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{book.title}</div>
              <div className="text-xs text-gray-400 mb-2 truncate">
                {book.author}
              </div>
              <div className="h-1.5 bg-gray-200 rounded-full">
                <div
                  className="h-1.5 bg-blue-600 rounded-full"
                  style={{ width: `${book.progress}%` }}
                />
              </div>
              <div className="text-xs text-gray-400 mt-1">%{book.progress}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentlyReading;
