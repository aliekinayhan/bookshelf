import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getProfile,
  getCurrentlyReading,
  getUserLibrary,
  getUserPosts,
} from "../services/userService";
import ProfileHeader from "../components/profile/ProfileHeader";
import CurrentlyReading from "../components/profile/CurrentlyReading";
import ProfileTabs from "../components/profile/ProfileTabs";
import ProfilePosts from "../components/profile/ProfilePosts";
import ProfileLibrary from "../components/profile/ProfileLibrary";

function Profile() {
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState("posts");
  const [activeFilter, setActiveFilter] = useState("all");
  const [profile, setProfile] = useState(null);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [library, setLibrary] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getProfile(username).then(setProfile);
    getCurrentlyReading(username).then(setCurrentlyReading);
    getUserLibrary(username).then(setLibrary);
    getUserPosts(username).then(setPosts);
  }, [username]);

  if (!profile)
    return <div className="text-center py-20 text-gray-400">Yükleniyor...</div>;

  const completedBooks = library.filter((b) => b.status === "COMPLETED").length;

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
      <CurrentlyReading books={currentlyReading} />
      <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "posts" && (
        <ProfilePosts
          posts={posts}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      )}
      {activeTab === "library" && <ProfileLibrary books={library} />}
    </div>
  );
}

export default Profile;
