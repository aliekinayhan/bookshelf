import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { getInitials } from "../utils/helpers";

const mockConnectedAccounts = ["google"];

function Toggle({ value, onChange }) {
  return (
    <div
      onClick={() => onChange(!value)}
      className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors flex-shrink-0 ${
        value ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <div
        className={`absolute top-0.5 bg-white rounded-full transition-transform ${
          value ? "translate-x-5" : "translate-x-0.5"
        }`}
        style={{ width: "20px", height: "20px" }}
      />
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-3">
      {children}
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
      {children}
    </div>
  );
}

function Row({ children, last = false }) {
  return (
    <div className={`px-5 py-4 ${!last ? "border-b border-gray-100" : ""}`}>
      {children}
    </div>
  );
}

function RowItem({ label, desc, children }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-800 mb-0.5">{label}</div>
        {desc && <div className="text-xs text-gray-400">{desc}</div>}
      </div>
      <div className="flex-shrink-0">{children}</div>
    </div>
  );
}

function Settings() {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();

  const [fullName, setFullName] = useState(
    `${user?.firstName || ""} ${user?.lastName || ""}`.trim(),
  );
  const [username, setUsername] = useState(user?.username || "");
  const [bio, setBio] = useState(
    "Kitap kurdu. Bilim kurgu ve felsefe okuyorum.",
  );
  const [email, setEmail] = useState(user?.email || "");
  const [notifications, setNotifications] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState("everyone");
  const [libraryVisibility, setLibraryVisibility] = useState("everyone");
  const [followRequests, setFollowRequests] = useState(false);

  const handleThemeChange = (newTheme) => {
    if (newTheme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    } else {
      setTheme(newTheme);
    }
  };

  const handleSave = () => {
    alert(t("settings.save") + " ✓");
    // TODO: Backend'e güncelleme isteği
  };

  const handleDeleteAccount = () => {
    if (window.confirm(t("settings.danger.desc"))) {
      // TODO: Backend'e hesap silme isteği
      console.log("Delete account");
    }
  };

  const connectedProviders = [
    { key: "google", label: "Google", icon: <FcGoogle size={18} /> },
    {
      key: "facebook",
      label: "Facebook",
      icon: <FaFacebook size={18} className="text-blue-600" />,
    },
    { key: "twitter", label: "Twitter / X", icon: <FaXTwitter size={18} /> },
    { key: "github", label: "GitHub", icon: <FaGithub size={18} /> },
  ].filter((p) => mockConnectedAccounts.includes(p.key));

  const selectClass =
    "text-sm border border-gray-200 rounded-lg px-3 py-1.5 outline-none focus:border-blue-500 text-gray-700 bg-white";

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8 text-gray-900">
        {t("settings.title")}
      </h1>

      {/* Profil */}
      <SectionTitle>{t("settings.sections.profile")}</SectionTitle>
      <Card>
        <Row>
          <RowItem
            label={t("settings.profile.photo")}
            desc={t("settings.profile.photoDesc")}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">
                {getInitials(user?.firstName, user?.lastName)}
              </div>
              <button className="text-sm border border-gray-300 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50">
                {t("settings.profile.change")}
              </button>
            </div>
          </RowItem>
        </Row>

        <Row>
          <RowItem
            label={t("settings.profile.cover")}
            desc={t("settings.profile.coverDesc")}
          >
            <div className="flex items-center gap-3">
              <div className="w-16 h-9 bg-blue-200 rounded-lg flex-shrink-0" />
              <button className="text-sm border border-gray-300 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50">
                {t("settings.profile.change")}
              </button>
            </div>
          </RowItem>
        </Row>

        <Row>
          <label className="text-xs text-gray-500 font-medium block mb-1.5">
            {t("settings.profile.fullName")}
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500"
          />
        </Row>

        <Row>
          <label className="text-xs text-gray-500 font-medium block mb-1.5">
            {t("settings.profile.username")}
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500"
          />
        </Row>

        <Row last>
          <label className="text-xs text-gray-500 font-medium block mb-1.5">
            {t("settings.profile.bio")}
          </label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={3}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 resize-none"
          />
        </Row>
      </Card>

      {/* Hesap */}
      <SectionTitle>{t("settings.sections.account")}</SectionTitle>
      <Card>
        <Row>
          <label className="text-xs text-gray-500 font-medium block mb-1.5">
            {t("settings.account.email")}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 outline-none focus:border-blue-500"
          />
        </Row>

        <Row last>
          <RowItem
            label={t("settings.account.password")}
            desc={t("settings.account.passwordDesc")}
          >
            <button
              onClick={() => alert("TODO: Şifre değiştirme modal'ı")}
              className="text-sm border border-gray-300 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50"
            >
              {t("settings.account.change")}
            </button>
          </RowItem>
        </Row>
      </Card>

      {/* Bağlı Hesaplar */}
      {connectedProviders.length > 0 && (
        <>
          <SectionTitle>{t("settings.sections.connected")}</SectionTitle>
          <Card>
            {connectedProviders.map((provider, i) => (
              <Row
                key={provider.key}
                last={i === connectedProviders.length - 1}
              >
                <div className="flex items-center gap-3">
                  {provider.icon}
                  <div>
                    <div className="text-sm font-medium text-gray-800">
                      {provider.label}
                    </div>
                    <div className="text-xs text-green-600">
                      {t("settings.connected.connected")}
                    </div>
                  </div>
                </div>
              </Row>
            ))}
          </Card>
        </>
      )}

      {/* Tercihler */}
      <SectionTitle>{t("settings.sections.preferences")}</SectionTitle>
      <Card>
        <Row>
          <RowItem
            label={t("settings.preferences.language")}
            desc={t("settings.preferences.languageDesc")}
          >
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className={selectClass}
            >
              <option value="tr">Türkçe</option>
              <option value="en">English</option>
            </select>
          </RowItem>
        </Row>

        <Row>
          <RowItem
            label={t("settings.preferences.theme")}
            desc={t("settings.preferences.themeDesc")}
          >
            <div className="flex gap-1.5">
              {[
                { key: "light", label: t("settings.preferences.themeLight") },
                { key: "dark", label: t("settings.preferences.themeDark") },
                { key: "system", label: t("settings.preferences.themeSystem") },
              ].map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => handleThemeChange(opt.key)}
                  className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
                    theme === opt.key
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </RowItem>
        </Row>

        <Row last>
          <RowItem
            label={t("settings.preferences.notifications")}
            desc={t("settings.preferences.notificationsDesc")}
          >
            <Toggle value={notifications} onChange={setNotifications} />
          </RowItem>
        </Row>
      </Card>

      {/* Gizlilik */}
      <SectionTitle>{t("settings.sections.privacy")}</SectionTitle>
      <Card>
        <Row>
          <RowItem
            label={t("settings.privacy.profileVisibility")}
            desc={t("settings.privacy.profileVisibilityDesc")}
          >
            <select
              value={profileVisibility}
              onChange={(e) => setProfileVisibility(e.target.value)}
              className={selectClass}
            >
              <option value="everyone">{t("settings.privacy.everyone")}</option>
              <option value="followers">
                {t("settings.privacy.followersOnly")}
              </option>
            </select>
          </RowItem>
        </Row>

        <Row>
          <RowItem
            label={t("settings.privacy.libraryVisibility")}
            desc={t("settings.privacy.libraryVisibilityDesc")}
          >
            <select
              value={libraryVisibility}
              onChange={(e) => setLibraryVisibility(e.target.value)}
              className={selectClass}
            >
              <option value="everyone">{t("settings.privacy.everyone")}</option>
              <option value="followers">
                {t("settings.privacy.followersOnly")}
              </option>
              <option value="only_me">{t("settings.privacy.onlyMe")}</option>
            </select>
          </RowItem>
        </Row>

        <Row last>
          <RowItem
            label={t("settings.privacy.followRequests")}
            desc={t("settings.privacy.followRequestsDesc")}
          >
            <Toggle value={followRequests} onChange={setFollowRequests} />
          </RowItem>
        </Row>
      </Card>

      {/* Kaydet */}
      <button
        onClick={handleSave}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors mb-8"
      >
        {t("settings.save")}
      </button>

      {/* Tehlikeli Bölge */}
      <SectionTitle>{t("settings.sections.danger")}</SectionTitle>
      <div className="bg-white border border-red-200 rounded-xl overflow-hidden mb-8">
        <div className="px-5 py-4">
          <RowItem
            label={
              <span className="text-red-500">{t("settings.danger.title")}</span>
            }
            desc={t("settings.danger.desc")}
          >
            <button
              onClick={handleDeleteAccount}
              className="text-sm px-3 py-1.5 rounded-lg bg-red-50 text-red-500 border border-red-200 hover:bg-red-100"
            >
              {t("settings.danger.button")}
            </button>
          </RowItem>
        </div>
      </div>
    </div>
  );
}

export default Settings;
