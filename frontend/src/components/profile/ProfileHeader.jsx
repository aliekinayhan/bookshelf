import { useAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";
import { getInitials } from "../../utils/helpers";

function ProfileHeader({ profile, onEditClick, onStatClick }) {
  const { user } = useAuth();
  const { t } = useTranslation();
  const isOwnProfile = user?.username === profile.username;

  return (
    <div>
      {/* Kapak fotoğrafı */}
      <div className="h-44 bg-blue-200 rounded-xl" />

      <div className="px-6">
        {/* Avatar + Buton */}
        <div className="flex justify-between items-end -mt-10 mb-4">
          <div className="w-20 h-20 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center text-white text-2xl font-bold">
            {profile.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt={profile.username}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              getInitials(profile.firstName, profile.lastName)
            )}
          </div>

          {isOwnProfile ? (
            <button
              onClick={onEditClick}
              className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50"
            >
              {t("profile.editButton")}
            </button>
          ) : (
            <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
              {t("profile.followButton")}
            </button>
          )}
        </div>

        {/* İsim ve kullanıcı adı */}
        <div className="mb-3">
          <h1 className="text-xl font-bold">
            {profile.firstName} {profile.lastName}
          </h1>
          <p className="text-gray-500 text-sm">@{profile.username}</p>
        </div>

        {/* Biyografi */}
        {profile.bio && (
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {profile.bio}
          </p>
        )}

        {/* İstatistikler */}
        <div className="flex gap-6">
          <div
            className="text-center cursor-pointer hover:text-blue-600"
            onClick={() => onStatClick("books")}
          >
            <div className="font-bold">{profile.stats.books}</div>
            <div className="text-xs text-gray-500">
              {t("profile.stats.books")}
            </div>
          </div>

          <div
            className="text-center cursor-pointer hover:text-blue-600"
            onClick={() => onStatClick("quotes")}
          >
            <div className="font-bold">{profile.stats.quotes}</div>
            <div className="text-xs text-gray-500">
              {t("profile.stats.quotes")}
            </div>
          </div>

          <div
            className="text-center cursor-pointer hover:text-blue-600"
            onClick={() => onStatClick("reviews")}
          >
            <div className="font-bold">{profile.stats.reviews}</div>
            <div className="text-xs text-gray-500">
              {t("profile.stats.reviews")}
            </div>
          </div>

          <div className="text-center cursor-pointer border-b border-dashed border-gray-300">
            <div className="font-bold">{profile.stats.followers}</div>
            <div className="text-xs text-gray-500">
              {t("profile.stats.followers")}
            </div>
          </div>

          <div className="text-center cursor-pointer border-b border-dashed border-gray-300">
            <div className="font-bold">{profile.stats.following}</div>
            <div className="text-xs text-gray-500">
              {t("profile.stats.following")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
