import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBook, FaQuoteLeft, FaUsers } from "react-icons/fa";

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
          {t("landing.title")}
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
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <FaBook className="text-blue-600" size={18} />
            </div>
            <h3 className="font-bold mb-2">
              {t("landing.features.books.title")}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t("landing.features.books.desc")}
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
              <FaQuoteLeft className="text-green-600" size={18} />
            </div>
            <h3 className="font-bold mb-2">
              {t("landing.features.quotes.title")}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t("landing.features.quotes.desc")}
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
              <FaUsers className="text-purple-600" size={18} />
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
      <section className="border-t border-gray-200 py-20 px-4 text-center">
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
