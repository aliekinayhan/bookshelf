import { useTranslation } from "react-i18next";

function BookAbout({ description }) {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 rounded-xl p-5 mb-6">
      <h2 className="text-sm font-medium text-gray-500 mb-3">
        {t("book.about")}
      </h2>
      <p className="text-sm leading-relaxed text-gray-700">{description}</p>
    </div>
  );
}

export default BookAbout;
