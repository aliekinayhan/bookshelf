import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  mockBook,
  mockBookReviews,
  mockBookQuotes,
  mockBookEditions,
} from "../mock/bookData";
import BookHeader from "../components/book/BookHeader";
import BookAbout from "../components/book/BookAbout";
import BookReviews from "../components/book/BookReviews";
import BookQuotes from "../components/book/BookQuotes";
import BookEditions from "../components/book/BookEditions";

function BookDetail() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("reviews");

  // TODO: Backend hazır olunca id ile API'den çekilecek
  const book = mockBook;

  const tabs = [
    { key: "reviews", label: t("book.tabs.reviews") },
    { key: "quotes", label: t("book.tabs.quotes") },
    { key: "editions", label: t("book.tabs.editions") },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Kitap başlığı */}
      <BookHeader book={book} onTabChange={setActiveTab} />

      {/* Açıklama */}
      <BookAbout description={book.description} />

      {/* Sekmeler */}
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2.5 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.key
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Sekme içerikleri */}
      {activeTab === "reviews" && <BookReviews reviews={mockBookReviews} />}
      {activeTab === "quotes" && <BookQuotes quotes={mockBookQuotes} />}
      {activeTab === "editions" && <BookEditions editions={mockBookEditions} />}
    </div>
  );
}

export default BookDetail;
