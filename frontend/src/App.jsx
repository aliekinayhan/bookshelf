import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookDetail from "./pages/BookDetail";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Private Pages */}
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;

{
  /* 
BrowserRouter enables client-side navigation in a React app. It updates the URL and renders different components without reloading the page. 
Route maps a URL to a component
<Route path="/profile/:username" element={<Profile />} /> -->  :username is a variable

*/
}
