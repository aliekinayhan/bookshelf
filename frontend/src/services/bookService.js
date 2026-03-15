import {
  mockBook,
  mockBookReviews,
  mockBookQuotes,
  mockBookEditions,
} from "../mock/bookData";

// Kitap detayını getir
export const getBook = async (id) => {
  // TODO: return await api.get(`/api/books/${id}`)
  return mockBook;
};

// Kitap incelemelerini getir
export const getBookReviews = async (id) => {
  // TODO: return await api.get(`/api/books/${id}/reviews`)
  return mockBookReviews;
};

// Kitap alıntılarını getir
export const getBookQuotes = async (id) => {
  // TODO: return await api.get(`/api/books/${id}/quotes`)
  return mockBookQuotes;
};

// Kitap baskılarını getir
export const getBookEditions = async (id) => {
  // TODO: return await api.get(`/api/books/${id}/editions`)
  return mockBookEditions;
};

// Kitabı beğen
export const likeBook = async (id) => {
  // TODO: return await api.post(`/api/books/${id}/like`)
  return { success: true };
};

// Kitabı puanla
export const rateBook = async (id, rating) => {
  // TODO: return await api.post(`/api/books/${id}/rate`, { rating })
  return { success: true };
};

// Kitaplığa ekle
export const addToLibrary = async (isbn, status) => {
  // TODO: return await api.post(`/api/user/library`, { isbn, status })
  return { success: true };
};

// Kitaplıktan çıkar
export const removeFromLibrary = async (isbn) => {
  // TODO: return await api.delete(`/api/user/library/${isbn}`)
  return { success: true };
};

// Kitap durumunu güncelle
export const updateBookStatus = async (isbn, status) => {
  // TODO: return await api.put(`/api/user/library/${isbn}`, { status })
  return { success: true };
};
