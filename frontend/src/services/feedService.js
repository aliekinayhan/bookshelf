import { mockPosts } from "../mock/feedData";

// Takip edilenlerin postlarını getir
export const getFollowingFeed = async (page = 0) => {
  // TODO: return await api.get(`/api/feed?type=following&page=${page}`)
  return mockPosts;
};

// Keşfet postlarını getir
export const getExploreFeed = async (page = 0) => {
  // TODO: return await api.get(`/api/feed?type=explore&page=${page}`)
  return mockPosts;
};

// Takip edilen yazarların postlarını getir
export const getAuthorsFeed = async (page = 0) => {
  // TODO: return await api.get(`/api/feed/authors?page=${page}`)
  return mockPosts;
};

// Post oluştur
export const createPost = async (post) => {
  // TODO: return await api.post(`/api/posts`, post)
  return { success: true, post };
};

// Post güncelle
export const updatePost = async (id, post) => {
  // TODO: return await api.put(`/api/posts/${id}`, post)
  return { success: true };
};

// Post sil
export const deletePost = async (id) => {
  // TODO: return await api.delete(`/api/posts/${id}`)
  return { success: true };
};

// Postu beğen
export const likePost = async (id) => {
  // TODO: return await api.post(`/api/posts/${id}/like`)
  return { success: true };
};
