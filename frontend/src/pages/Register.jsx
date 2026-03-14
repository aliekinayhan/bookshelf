import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Register() {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Backend hazır olunca buraya API çağrısı gelecek
    console.log("Register submitted");
  };

  const handleOAuthLogin = (provider) => {
    // TODO: Spring Security OAuth2 endpoint'ine yönlendir
    // window.location.href = `http://localhost:8080/oauth2/authorization/${provider}`
    console.log(`${provider} login`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-white border border-gray-200 rounded-xl p-10 w-full max-w-md">
        {/* Başlık */}
        <div className="text-center mb-8">
          <div className="text-xl font-bold text-blue-600 mb-2">BookShelf</div>
          <h1 className="text-2xl font-bold">{t("register.title")}</h1>
          <p className="text-gray-500 text-sm mt-2">{t("register.subtitle")}</p>
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
          <span className="text-xs text-gray-400">{t("register.or")}</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Ad Soyad — yan yana */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-gray-500 block mb-1.5">
                {t("register.firstName")}
              </label>
              <input
                type="text"
                placeholder="Ali"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-500 block mb-1.5">
                {t("register.lastName")}
              </label>
              <input
                type="text"
                placeholder="Ekin"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-500 block mb-1.5">
              {t("register.username")}
            </label>
            <input
              type="text"
              placeholder="aliekin"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500 block mb-1.5">
              {t("register.email")}
            </label>
            <input
              type="email"
              placeholder="ornek@mail.com"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500 block mb-1.5">
              {t("register.password")}
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500 block mb-1.5">
              {t("register.passwordConfirm")}
            </label>
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
            {t("register.button")}
          </button>
        </form>

        {/* Giriş yap linki */}
        <p className="text-center text-sm text-gray-500 mt-6">
          {t("register.hasAccount")}{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            {t("register.loginLink")}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
