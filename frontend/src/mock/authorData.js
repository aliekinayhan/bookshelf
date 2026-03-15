export const mockAuthor = {
  id: "OL25712A",
  name: "Frank Herbert",
  photoUrl: null,
  bio: "Frank Herbert, en çok Dune serisiyle tanınan Amerikalı bilim kurgu yazarıdır. Gazeteci ve fotoğrafçı olarak çalıştıktan sonra yazarlığa yönelen Herbert, 1965 yılında yayımlanan Dune romanıyla dünya çapında tanındı. Ekoloji, din, siyaset ve insan evrimine dair derin temalar işleyen eserleri, bilim kurgu edebiyatının başyapıtları arasında gösterilmektedir.",
  stats: {
    books: 23,
    readers: 1200,
    likes: 3400,
    avgRating: 4.3,
  },
};

export const mockAuthorBooks = [
  {
    id: "1",
    isbn: "9780441013593",
    title: "Dune",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780441013593-M.jpg",
    rating: 4.2,
  },
  {
    id: "2",
    isbn: "9780441172696",
    title: "Dune Messiah",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780441172696-M.jpg",
    rating: 3.9,
  },
  {
    id: "3",
    isbn: "9780441104024",
    title: "Children of Dune",
    coverUrl: null,
    rating: 3.8,
  },
  {
    id: "4",
    isbn: "9780441294350",
    title: "God Emperor of Dune",
    coverUrl: null,
    rating: 3.7,
  },
  {
    id: "5",
    isbn: "9780441328000",
    title: "Heretics of Dune",
    coverUrl: null,
    rating: 3.6,
  },
];

export const mockAuthorSeries = [
  {
    id: "1",
    name: "Dune Serisi",
    bookCount: 6,
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780441013593-M.jpg",
  },
];
