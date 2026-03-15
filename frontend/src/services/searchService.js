// Kitap ara (Open Library API)
export const searchBooks = async (query) => {
  // Bu direkt Open Library'e gidecek
  const res = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`,
  );
  const data = await res.json();
  return data.docs.map((book) => ({
    isbn: book.isbn?.[0] || null,
    title: book.title,
    author: book.author_name?.[0] || "Bilinmiyor",
    coverUrl: book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : null,
    publishYear: book.first_publish_year || null,
    openLibraryId: book.key,
  }));
};

// Kullanıcı ara
export const searchUsers = async (query) => {
  // TODO: return await api.get(`/api/users/search?q=${query}`)
  return [];
};
