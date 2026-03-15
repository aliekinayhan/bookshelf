import {
  mockAuthor,
  mockAuthorBooks,
  mockAuthorSeries,
} from "../mock/authorData";

// Yazar detayını getir
export const getAuthor = async (id) => {
  // TODO: return await api.get(`/api/authors/${id}`)
  return mockAuthor;
};

// Yazarın kitaplarını getir
export const getAuthorBooks = async (id) => {
  // TODO: return await api.get(`/api/authors/${id}/books`)
  return mockAuthorBooks;
};

// Yazarın serilerini getir
export const getAuthorSeries = async (id) => {
  // TODO: return await api.get(`/api/authors/${id}/series`)
  return mockAuthorSeries;
};

// Yazarı takip et
export const followAuthor = async (id) => {
  // TODO: return await api.post(`/api/authors/${id}/follow`)
  return { success: true };
};

// Yazar takibini bırak
export const unfollowAuthor = async (id) => {
  // TODO: return await api.delete(`/api/authors/${id}/follow`)
  return { success: true };
};
