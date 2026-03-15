import {
  mockProfile,
  mockCurrentlyReading,
  mockLibrary,
  mockProfilePosts,
} from "../mock/profileData";

// Kullanıcı profilini getir
export const getProfile = async (username) => {
  // TODO: return await api.get(`/api/users/${username}`)
  return mockProfile;
};

// Kullanıcının şu an okuduklarını getir
export const getCurrentlyReading = async (username) => {
  // TODO: return await api.get(`/api/users/${username}/currently-reading`)
  return mockCurrentlyReading;
};

// Kullanıcının kitaplığını getir
export const getUserLibrary = async (username) => {
  // TODO: return await api.get(`/api/users/${username}/library`)
  return mockLibrary;
};

// Kullanıcının paylaşımlarını getir
export const getUserPosts = async (username) => {
  // TODO: return await api.get(`/api/users/${username}/posts`)
  return mockProfilePosts;
};

// Kullanıcıyı takip et
export const followUser = async (username) => {
  // TODO: return await api.post(`/api/users/${username}/follow`)
  return { success: true };
};

// Takibi bırak
export const unfollowUser = async (username) => {
  // TODO: return await api.delete(`/api/users/${username}/follow`)
  return { success: true };
};

// Takipçileri getir
export const getFollowers = async (username) => {
  // TODO: return await api.get(`/api/users/${username}/followers`)
  return [];
};

// Takip edilenleri getir
export const getFollowing = async (username) => {
  // TODO: return await api.get(`/api/users/${username}/following`)
  return [];
};
