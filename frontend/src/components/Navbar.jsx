import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
  // t        → çeviri fonksiyonu, t('navbar.login') = "Giriş Yap" veya "Login"
  // i18n     → dil değiştirmek için kullanacağız

  const toggleLanguage = () => {
    const newLang = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          BookShelf
        </Link>

        {/* Navigator */}
        <div className="flex gap-4 items-center">
          {/* Language button */}
          <button
            onClick={toggleLanguage}
            className="text-sm text-gray-500 hover:text-blue-600 font-medium"
          >
            {i18n.language === "tr" ? "EN" : "TR"}
          </button>

          <Link
            to="/login"
            className="w-28 text-center text-gray-600 hover:text-blue-600 font-medium"
          >
            {t("navbar.login")}
          </Link>

          <Link
            to="/register"
            className="w-28 text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
          >
            {t("navbar.register")}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
