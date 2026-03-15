import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  getBook,
  getBookReviews,
  getBookQuotes,
  getBookEditions,
} from "../services/bookService";
import BookHeader from "../components/book/BookHeader";
import BookAbout from "../components/book/BookAbout";
import BookReviews from "../components/book/BookReviews";
import BookQuotes from "../components/book/BookQuotes";
import BookEditions from "../components/book/BookEditions";

function BookDetail() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("reviews");
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [editions, setEditions] = useState([]);

  useEffect(() => {
    getBook(id).then(setBook);
    getBookReviews(id).then(setReviews);
    getBookQuotes(id).then(setQuotes);
    getBookEditions(id).then(setEditions);
  }, [id]);

  if (!book)
    return <div className="text-center py-20 text-gray-400">Yükleniyor...</div>;

  const tabs = [
    { key: "reviews", label: t("book.tabs.reviews") },
    { key: "quotes", label: t("book.tabs.quotes") },
    { key: "editions", label: t("book.tabs.editions") },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <BookHeader book={book} onTabChange={setActiveTab} />

      <BookAbout description={book.description} />

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

      {activeTab === "reviews" && <BookReviews reviews={reviews} />}
      {activeTab === "quotes" && <BookQuotes quotes={quotes} />}
      {activeTab === "editions" && <BookEditions editions={editions} />}
    </div>
  );
}

export default BookDetail;
