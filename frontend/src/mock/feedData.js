export const mockPosts = [
  {
    id: 1,
    type: "quote",
    user: {
      username: "aliekin",
      initials: "AE",
      color: "blue",
    },
    createdAt: "2 saat önce",
    quote:
      "Bir kitap bin kez okunabilir, her seferinde farklı bir şey söyler sana.",
    book: {
      title: "Siddhartha",
      author: "Hermann Hesse",
    },
    likes: 24,
    comments: 8,
    liked: false,
  },
  {
    id: 2,
    type: "book",
    user: {
      username: "mehmetkara",
      initials: "MK",
      color: "green",
    },
    createdAt: "5 saat önce",
    book: {
      title: "1984",
      author: "George Orwell",
      coverUrl: "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg",
      status: "WANT_TO_READ",
    },
    likes: 12,
    comments: 3,
    liked: false,
  },
  {
    id: 3,
    type: "book",
    user: {
      username: "aliekin",
      initials: "AE",
      color: "blue",
    },
    createdAt: "8 saat önce",
    book: {
      title: "Dune",
      author: "Frank Herbert",
      coverUrl: "https://covers.openlibrary.org/b/isbn/9780441013593-M.jpg",
      status: "READING",
    },
    likes: 31,
    comments: 7,
    liked: true,
  },
  {
    id: 4,
    type: "review",
    user: {
      username: "zeynepyilmaz",
      initials: "ZY",
      color: "purple",
    },
    createdAt: "1 gün önce",
    book: {
      title: "Dune",
      author: "Frank Herbert",
      status: "COMPLETED",
    },
    rating: 4,
    review:
      "Bilim kurgunun başyapıtlarından biri. Dünya inşası inanılmaz detaylı, karakterler derinlikli. Yavaş başlıyor ama ortasından itibaren bırakamıyorsunuz...",
    likes: 47,
    comments: 15,
    liked: false,
  },
  {
    id: 5,
    type: "quote",
    user: {
      username: "zeynepyilmaz",
      initials: "ZY",
      color: "purple",
    },
    createdAt: "2 gün önce",
    quote:
      "Korku aklı öldürür. Korku tam anlamıyla yok oluşa götüren küçük ölümdür.",
    book: {
      title: "Dune",
      author: "Frank Herbert",
    },
    likes: 89,
    comments: 22,
    liked: false,
  },
];
