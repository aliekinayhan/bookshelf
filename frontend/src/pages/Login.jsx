import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Login() {
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Backend hazır olunca gerçek API çağrısı yapılacak
    // Şimdilik mock user ile test ediyoruz
    const mockUser = {
      id: 1,
      username: "aliekin",
      email: "ali@mail.com",
    };

    login(mockUser); // AuthContext'e kullanıcıyı kaydet
    navigate("/feed"); // Feed'e yönlendir
  };

  const handleOAuthLogin = (provider) => {
    // TODO: Spring Security OAuth2 endpoint'ine yönlendir
    // window.location.href = `http://localhost:8080/oauth2/authorization/${provider}`
    console.log(`${provider} login`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white border border-gray-200 rounded-xl p-10 w-full max-w-md">
        {/* Başlık */}
        <div className="text-center mb-8">
          <div className="text-xl font-bold text-blue-600 mb-2">BookShelf</div>
          <h1 className="text-2xl font-bold">{t("login.title")}</h1>
          <p className="text-gray-500 text-sm mt-2">{t("login.subtitle")}</p>
        </div>

        {/* OAuth2 Butonları */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={() => handleOAuthLogin("google")}
            className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm font-medium hover:bg-gray-50"
          >
            <FcGoogle size={18} />
            Google
          </button>
          <button
            onClick={() => handleOAuthLogin("facebook")}
            className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm font-medium hover:bg-gray-50"
          >
            <FaFacebook size={18} className="text-blue-600" />
            Facebook
          </button>
          <button
            onClick={() => handleOAuthLogin("twitter")}
            className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm font-medium hover:bg-gray-50"
          >
            <FaXTwitter size={18} />
            Twitter / X
          </button>
          <button
            onClick={() => handleOAuthLogin("github")}
            className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm font-medium hover:bg-gray-50"
          >
            <FaGithub size={18} />
            GitHub
          </button>
        </div>

        {/* Ayraç */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-xs text-gray-400">{t("login.or")}</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-500 block mb-1.5">
              {t("login.email")}
            </label>
            <input
              type="email"
              placeholder="ornek@mail.com"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-sm text-gray-500">
                {t("login.password")}
              </label>
              <span className="text-sm text-blue-600 cursor-pointer hover:underline">
                {t("login.forgotPassword")}
              </span>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 mt-1"
          >
            {t("login.button")}
          </button>
        </form>

        {/* Kayıt ol linki */}
        <p className="text-center text-sm text-gray-500 mt-6">
          {t("login.noAccount")}{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            {t("login.registerLink")}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
