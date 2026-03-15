import { useTranslation } from "react-i18next";
import { FaBook } from "react-icons/fa";

function BookEditions({ editions }) {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-3 gap-4">
      {editions.map((edition) => (
        <div
          key={edition.id}
          className="bg-white border border-gray-200 rounded-xl p-4 flex gap-3"
        >
          {/* Kapak */}
          {edition.coverUrl ? (
            <img
              src={edition.coverUrl}
              alt={edition.publisher}
              className="w-12 h-16 object-cover rounded flex-shrink-0"
            />
          ) : (
            <div className="w-12 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
              <FaBook className="text-gray-400" size={16} />
            </div>
          )}

          <div>
            <div className="text-sm font-medium mb-1">{edition.publisher}</div>
            <div className="text-xs text-gray-400 mb-0.5">
              {edition.year} · {edition.language}
            </div>
            <div className="text-xs text-gray-400">ISBN: {edition.isbn}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookEditions;
