import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  mockProfile,
  mockCurrentlyReading,
  mockLibrary,
  mockProfilePosts,
} from "../mock/profileData";
import ProfileHeader from "../components/profile/ProfileHeader";
import CurrentlyReading from "../components/profile/CurrentlyReading";
import ProfileTabs from "../components/profile/ProfileTabs";
import ProfilePosts from "../components/profile/ProfilePosts";
import ProfileLibrary from "../components/profile/ProfileLibrary";

function Profile() {
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState("posts");
  const [activeFilter, setActiveFilter] = useState("all");

  // TODO: Backend hazır olunca username ile API'den çekilecek
  const profile = mockProfile;

  // Sadece COMPLETED kitapları say — profil istatistiğinde sadece bitirilmiş kitaplar
  const completedBooks = mockLibrary.filter(
    (b) => b.status === "COMPLETED",
  ).length;

  const handleStatClick = (stat) => {
    switch (stat) {
      case "quotes":
        setActiveTab("posts");
        setActiveFilter("quotes");
        break;
      case "reviews":
        setActiveTab("posts");
        setActiveFilter("reviews");
        break;
      case "books":
        setActiveTab("library");
        setActiveFilter("all");
        break;
      default:
        break;
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-6">
      <ProfileHeader
        profile={{
          ...profile,
          stats: { ...profile.stats, books: completedBooks },
        }}
        onEditClick={() => console.log("edit")}
        onStatClick={handleStatClick}
      />

      <CurrentlyReading books={mockCurrentlyReading} />

      <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "posts" && (
        <ProfilePosts
          posts={mockProfilePosts}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      )}

      {activeTab === "library" && <ProfileLibrary books={mockLibrary} />}
    </div>
  );
}

export default Profile;
