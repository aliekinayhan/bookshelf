import { useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";

function AuthorBooks({ books }) {
  const navigate = useNavigate();

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        width="11"
        height="11"
        fill={i < Math.floor(rating) ? "#EF9F27" : "none"}
        stroke={i < Math.floor(rating) ? "#EF9F27" : "#D1D5DB"}
        strokeWidth="1"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      {books.map((book) => (
        <div
          key={book.id}
          onClick={() => navigate(`/book/${book.isbn}`)}
          className="flex flex-col gap-2 cursor-pointer group"
        >
          {book.coverUrl ? (
            <img
              src={book.coverUrl}
              alt={book.title}
              className="w-full h-28 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
            />
          ) : (
            <div className="w-full h-28 bg-gray-100 rounded-lg flex items-center justify-center group-hover:opacity-90 transition-opacity">
              <FaBook className="text-gray-400" size={20} />
            </div>
          )}
          <div className="text-xs font-medium text-center truncate">
            {book.title}
          </div>
          <div className="flex justify-center gap-0.5">
            {renderStars(book.rating)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AuthorBooks;
