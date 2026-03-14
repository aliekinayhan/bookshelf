import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { t, i18n } = useTranslation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const newLang = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLang);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Sol — Logo */}
        {/* Giriş yapmışsa feed'e, yapmamışsa landing'e git */}
        <Link
          to={user ? "/feed" : "/"}
          className="text-xl font-bold text-blue-600"
        >
          BookShelf
        </Link>

        {/* Sağ */}
        <div className="flex gap-4 items-center">
          {user ? (
            // Giriş yapılmışsa — profil ve çıkış
            <>
              <Link
                to={`/profile/${user.username}`}
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                {user.username}
              </Link>
              <button
                onClick={handleLogout}
                className="w-24 text-center text-gray-600 hover:text-blue-600 font-medium"
              >
                {t("navbar.logout")}
              </button>
            </>
          ) : (
            // Giriş yapılmamışsa — login ve register
            <>
              <Link
                to="/login"
                className="w-20 text-center inline-block text-gray-600 hover:text-blue-600 font-medium"
              >
                {t("navbar.login")}
              </Link>
              <Link
                to="/register"
                className="w-24 text-center inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
              >
                {t("navbar.register")}
              </Link>
            </>
          )}

          {/* Dil butonu — her zaman en sonda */}
          <button
            onClick={toggleLanguage}
            className="text-sm text-gray-500 hover:text-blue-600 font-medium w-8 text-center"
          >
            {i18n.language === "tr" ? "EN" : "TR"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
