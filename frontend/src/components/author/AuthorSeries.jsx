import { useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function AuthorSeries({ series }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (!series.length)
    return (
      <div className="text-center text-gray-400 py-12 text-sm">
        {t("author.noSeries")}
      </div>
    );

  return (
    <div className="flex flex-col gap-4">
      {series.map((s) => (
        <div
          key={s.id}
          className="flex gap-4 bg-gray-50 rounded-xl p-4 cursor-pointer hover:bg-gray-100 transition-colors"
        >
          {s.coverUrl ? (
            <img
              src={s.coverUrl}
              alt={s.name}
              className="w-14 h-20 object-cover rounded-lg flex-shrink-0"
            />
          ) : (
            <div className="w-14 h-20 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
              <FaBook className="text-gray-400" size={20} />
            </div>
          )}
          <div>
            <div className="font-medium mb-1">{s.name}</div>
            <div className="text-sm text-gray-500">
              {s.bookCount} {t("author.books").toLowerCase()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AuthorSeries;
