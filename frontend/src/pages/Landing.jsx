import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Landing() {
  const { t } = useTranslation();

  return (
    <div>
      {/* HERO SECTION */}
      <section className="text-center py-32 px-4 max-w-2xl mx-auto">
        <span className="inline-block bg-gray-100 text-gray-500 text-xs px-4 py-1 rounded-full mb-6">
          {t("landing.badge")}
        </span>
        <h1 className="text-5xl font-bold leading-tight mb-5">
          {t("landing.title")}{" "}
          <span className="text-blue-600">{t("landing.titleHighlight")}</span>
        </h1>
        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
          {t("landing.subtitle")}
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-7 py-3 rounded-lg font-medium hover:bg-blue-700"
          >
            {t("landing.startButton")}
          </Link>
          <Link
            to="/login"
            className="border border-gray-300 text-gray-600 px-7 py-3 rounded-lg font-medium hover:bg-gray-50"
          >
            {t("landing.loginButton")}
          </Link>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="border-t border-b border-gray-200 py-10">
        <div className="max-w-2xl mx-auto flex justify-center gap-20">
          <div className="text-center">
            <div className="text-3xl font-bold">12K+</div>
            <div className="text-sm text-gray-500 mt-1">
              {t("landing.stats.readers")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">84K+</div>
            <div className="text-sm text-gray-500 mt-1">
              {t("landing.stats.books")}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">230K+</div>
            <div className="text-sm text-gray-500 mt-1">
              {t("landing.stats.quotes")}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("landing.features.title")}
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {/* Kitap Takibi */}
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
            <h3 className="font-bold mb-2">
              {t("landing.features.books.title")}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t("landing.features.books.desc")}
            </p>
          </div>

          {/* Alıntı & İnceleme */}
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </div>
            <h3 className="font-bold mb-2">
              {t("landing.features.quotes.title")}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t("landing.features.quotes.desc")}
            </p>
          </div>

          {/* Sosyal Feed */}
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-purple-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
            </div>
            <h3 className="font-bold mb-2">
              {t("landing.features.social.title")}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t("landing.features.social.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gray-50 border-t border-gray-200 py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">{t("landing.cta.title")}</h2>
        <p className="text-gray-500 mb-8">{t("landing.cta.subtitle")}</p>
        <Link
          to="/register"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700"
        >
          {t("landing.cta.button")}
        </Link>
      </section>
    </div>
  );
}

export default Landing;
