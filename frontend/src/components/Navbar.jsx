import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      {/* max-w-5xl ile içeriği ortala, her iki yanda boşluk bırak */}
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          BookShelf
        </Link>

        {/* Navigation */}
        <div className="flex gap-4 items-center">
          <Link
            to="/login"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Giriş Yap
          </Link>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
          >
            Kayıt Ol
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
