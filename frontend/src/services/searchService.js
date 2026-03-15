const mapBooks = (docs) => {
  return docs.map((doc) => {
    let coverUrl = null;

    if (doc.cover_i) {
      coverUrl = `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`;
    } else if (doc.isbn?.[0]) {
      coverUrl = `https://covers.openlibrary.org/b/isbn/${doc.isbn[0]}-L.jpg`;
    } else if (doc.cover_edition_key) {
      coverUrl = `https://covers.openlibrary.org/b/olid/${doc.cover_edition_key}-L.jpg`;
    }

    return {
      isbn: doc.isbn?.[0] || null,
      openLibraryId: doc.key?.replace("/works/", ""),
      title: doc.title,
      author: doc.author_name?.[0] || "Bilinmiyor",
      coverUrl,
      publishYear: doc.first_publish_year || null,
      language: doc.language || [],
    };
  });
};

const sortByRelevance = (books, query) => {
  const q = query.toLowerCase();
  return books.sort((a, b) => {
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();

    if (aTitle === q) return -1;
    if (bTitle === q) return 1;
    if (aTitle.startsWith(q)) return -1;
    if (bTitle.startsWith(q)) return 1;
    if (aTitle.includes(q)) return -1;
    if (bTitle.includes(q)) return 1;
    return 0;
  });
};

export const searchBooks = async (query) => {
  const [resTitle, resAuthor] = await Promise.all([
    fetch(
      `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}&limit=15`,
    ),
    fetch(
      `https://openlibrary.org/search.json?author=${encodeURIComponent(query)}&limit=15`,
    ),
  ]);

  const [dataTitle, dataAuthor] = await Promise.all([
    resTitle.json(),
    resAuthor.json(),
  ]);

  const titleBooks = mapBooks(dataTitle.docs);
  const authorBooks = mapBooks(dataAuthor.docs);

  // Birleştir, tekrar edenleri çıkar
  const seen = new Set();
  const merged = [...titleBooks, ...authorBooks].filter((book) => {
    const key = book.openLibraryId || book.title;
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Alaka puanına göre sırala
  const sorted = sortByRelevance(merged, query);

  // Google Books ile eksik kapakları tamamla
  try {
    const googleRes = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=20`,
    );
    const googleData = await googleRes.json();

    if (googleData.items) {
      sorted.forEach((book) => {
        if (!book.coverUrl) {
          const match = googleData.items.find(
            (g) =>
              g.volumeInfo.title
                .toLowerCase()
                .includes(book.title.toLowerCase()) ||
              book.title
                .toLowerCase()
                .includes(g.volumeInfo.title.toLowerCase()),
          );
          if (match?.volumeInfo?.imageLinks?.thumbnail) {
            book.coverUrl = match.volumeInfo.imageLinks.thumbnail
              .replace("http:", "https:")
              .replace("zoom=1", "zoom=3");
          }
        }
      });
    }
  } catch (e) {
    console.error("Google Books hatası:", e);
  }

  return sorted;
};

export const searchAuthors = async (query) => {
  const res = await fetch(
    `https://openlibrary.org/search/authors.json?q=${encodeURIComponent(query)}&limit=20`,
  );
  const data = await res.json();

  const authors = data.docs.map((author) => ({
    id: author.key,
    name: author.name,
    photoUrl: author.photos?.[0]
      ? `https://covers.openlibrary.org/a/id/${author.photos[0]}-L.jpg`
      : null,
    workCount: author.work_count || 0,
  }));

  const seen = new Set();
  return authors
    .sort((a, b) => b.workCount - a.workCount)
    .filter((author) => {
      const normalized = author.name
        .toLowerCase()
        .replace(/[^a-züğışöç\s]/g, "")
        .trim();
      if (seen.has(normalized)) return false;
      seen.add(normalized);
      return true;
    });
};

export const searchUsers = async (query) => {
  // TODO: return await api.get(`/api/users/search?q=${query}`)
  return [];
};
