export const mockBookReviews = [
  {
    id: 1,
    user: { username: "zeynepyilmaz", initials: "ZY", color: "purple" },
    rating: 4,
    review:
      "Bilim kurgunun başyapıtlarından biri. Dünya inşası inanılmaz detaylı, karakterler derinlikli. Yavaş başlıyor ama ortasından itibaren bırakamıyorsunuz...",
    createdAt: "1 gün önce",
    likes: 47,
    liked: false,
  },
  {
    id: 2,
    user: { username: "mehmetkara", initials: "MK", color: "green" },
    rating: 5,
    review:
      "Muhteşem bir kitap. Herbert'in kurduğu evren o kadar detaylı ki kendinizi Arrakis'te hissediyorsunuz...",
    createdAt: "3 gün önce",
    likes: 32,
    liked: false,
  },
];

export const mockBookQuotes = [
  {
    id: 1,
    user: { username: "zeynepyilmaz", initials: "ZY", color: "purple" },
    quote:
      "Korku aklı öldürür. Korku tam anlamıyla yok oluşa götüren küçük ölümdür.",
    createdAt: "2 gün önce",
    likes: 89,
    liked: false,
  },
  {
    id: 2,
    user: { username: "aliekin", initials: "AE", color: "blue" },
    quote:
      "Bir liderin en büyük düşmanı, kendisine söylenenlere inanmak istemesidir.",
    createdAt: "5 gün önce",
    likes: 54,
    liked: true,
  },
];

export const mockBookEditions = [
  {
    id: 1,
    publisher: "Ace Books",
    year: 1990,
    language: "İngilizce",
    isbn: "9780441013593",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780441013593-M.jpg",
  },
  {
    id: 2,
    publisher: "İthaki Yayınları",
    year: 2015,
    language: "Türkçe",
    isbn: "9786053754533",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9786053754533-M.jpg",
  },
  {
    id: 3,
    publisher: "Hodder & Stoughton",
    year: 2019,
    language: "İngilizce",
    isbn: "9781473233959",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9781473233959-M.jpg",
  },
];

export const mockBook = {
  id: "1",
  openLibraryId: "OL18399W",
  isbn: "9780441013593",
  title: "Dune",
  author: "Frank Herbert",
  authorId: "OL25712A", // yazar sayfasına link için
  coverUrl: "https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg",
  publishYear: 1965,
  pageCount: 412,
  description:
    "Dune, Frank Herbert tarafından yazılmış bilim kurgu türünde bir roman. Çöl gezegeni Arrakis'te geçen epik bir hikayedir. Evrenin en değerli maddesi olan baharat melajının tek kaynağı olan bu gezegen üzerindeki güç mücadelesini anlatır.",
  rating: 4.2,
  likeCount: 847,
  readerCount: 243,
  reviewCount: 128,
  series: {
    name: "Dune Serisi",
    order: 1,
  },
};
