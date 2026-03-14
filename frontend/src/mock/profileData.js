export const mockProfile = {
  id: 1,
  firstName: "Ali Ekin",
  lastName: "Ayhan",
  username: "aliekin",
  bio: "Kitap kurdu. Bilim kurgu ve felsefe okuyorum. ☕",
  coverUrl: null,
  avatarUrl: null,
  stats: {
    books: 42,
    quotes: 128,
    reviews: 17,
    followers: 234,
    following: 89,
  },
};

export const mockCurrentlyReading = [
  {
    id: 1,
    isbn: "9780441013593",
    title: "Dune",
    author: "Frank Herbert",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780441013593-M.jpg",
    progress: 65,
  },
  {
    id: 2,
    isbn: "9780062316097",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780062316097-M.jpg",
    progress: 30,
  },
];

export const mockLibrary = [
  {
    id: 1,
    isbn: "9780451524935",
    title: "1984",
    author: "George Orwell",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg",
    status: "COMPLETED",
  },
  {
    id: 2,
    isbn: "9780060850524",
    title: "Brave New World",
    author: "Aldous Huxley",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780060850524-M.jpg",
    status: "COMPLETED",
  },
  {
    id: 3,
    isbn: "9780062316097",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780062316097-M.jpg",
    status: "WANT_TO_READ",
  },
  {
    id: 4,
    isbn: "9780743273565",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780743273565-M.jpg",
    status: "WANT_TO_READ",
  },
  {
    id: 5,
    isbn: "9780316769174",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780316769174-M.jpg",
    status: "COMPLETED",
  },
  {
    id: 6,
    isbn: "9781451673319",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9781451673319-M.jpg",
    status: "DROPPED",
  },
];

export const mockProfilePosts = [
  {
    id: 1,
    type: "quote",
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
    type: "review",
    createdAt: "1 gün önce",
    book: {
      title: "Dune",
      author: "Frank Herbert",
    },
    rating: 4,
    review:
      "Bilim kurgunun başyapıtlarından biri. Dünya inşası inanılmaz detaylı, karakterler derinlikli. Yavaş başlıyor ama ortasından itibaren bırakamıyorsunuz...",
    likes: 47,
    comments: 15,
    liked: false,
  },
  {
    id: 3,
    type: "quote",
    createdAt: "3 gün önce",
    quote:
      "Korku aklı öldürür. Korku tam anlamıyla yok oluşa götüren küçük ölümdür.",
    book: {
      title: "Dune",
      author: "Frank Herbert",
    },
    likes: 89,
    comments: 22,
    liked: true,
  },
];
