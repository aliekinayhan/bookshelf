import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  getAuthor,
  getAuthorBooks,
  getAuthorSeries,
} from "../services/authorService";
import AuthorHeader from "../components/author/AuthorHeader";
import AuthorBooks from "../components/author/AuthorBooks";
import AuthorSeries from "../components/author/AuthorSeries";

function Author() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("books");
  const [author, setAuthor] = useState(null);
  const [books, setBooks] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getAuthor(id).then(setAuthor);
    getAuthorBooks(id).then(setBooks);
    getAuthorSeries(id).then(setSeries);
  }, [id]);

  if (!author)
    return <div className="text-center py-20 text-gray-400">Yükleniyor...</div>;

  const tabs = [
    { key: "books", label: t("author.tabs.books") },
    { key: "series", label: t("author.tabs.series") },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <AuthorHeader author={author} />

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

      {activeTab === "books" && <AuthorBooks books={books} />}
      {activeTab === "series" && <AuthorSeries series={series} />}
    </div>
  );
}

export default Author;
