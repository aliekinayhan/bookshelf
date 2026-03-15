import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import { FaSearch } from "react-icons/fa";

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
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Sol — Logo */}
        <Link
          to={user ? "/feed" : "/"}
          className="text-xl font-bold text-blue-600 flex-shrink-0"
        >
          BookShelf
        </Link>

        {/* Orta — Arama kutusu */}
        <div
          onClick={() => navigate("/search")}
          className="flex-1 max-w-md mx-auto flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full px-4 py-2 cursor-pointer"
        >
          <FaSearch size={13} className="text-gray-400 flex-shrink-0" />
          <span className="text-sm text-gray-400 truncate">
            {t("navbar.search")}
          </span>
        </div>

        {/* Sağ — Linkler */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {user ? (
            <>
              <Link
                to={`/profile/${user.username}`}
                className="text-gray-600 hover:text-blue-600 font-medium text-sm"
              >
                {user.username}
              </Link>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-blue-600 font-medium text-sm"
              >
                {t("navbar.logout")}
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-600 hover:text-blue-600 font-medium text-sm"
              >
                {t("navbar.login")}
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium text-sm"
              >
                {t("navbar.register")}
              </Link>
            </>
          )}

          {/* Dil butonu */}
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
