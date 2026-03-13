import Navbar from "../Navbar";

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
}

export default MainLayout;
{
  /*
Children = contents inside a component
*/
}
