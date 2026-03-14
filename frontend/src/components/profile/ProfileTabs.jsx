import { useTranslation } from "react-i18next";

function ProfileTabs({ activeTab, onTabChange }) {
  const { t } = useTranslation();

  return (
    <div className="flex border-b border-gray-200 px-6 mt-6">
      {[
        { key: "posts", label: t("profile.tabs.posts") },
        { key: "library", label: t("profile.tabs.library") },
      ].map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
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
  );
}

export default ProfileTabs;
