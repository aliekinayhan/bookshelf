import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  mockAuthor,
  mockAuthorBooks,
  mockAuthorSeries,
} from "../mock/authorData";
import AuthorHeader from "../components/author/AuthorHeader";
import AuthorBooks from "../components/author/AuthorBooks";
import AuthorSeries from "../components/author/AuthorSeries";

function Author() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("books");

  // TODO: Backend hazır olunca id ile API'den çekilecek
  const author = mockAuthor;

  const tabs = [
    { key: "books", label: t("author.tabs.books") },
    { key: "series", label: t("author.tabs.series") },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Yazar başlığı */}
      <AuthorHeader author={author} />

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
      {activeTab === "books" && <AuthorBooks books={mockAuthorBooks} />}
      {activeTab === "series" && <AuthorSeries series={mockAuthorSeries} />}
    </div>
  );
}

export default Author;
