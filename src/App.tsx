import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="box-border pt-12 lg:pt-16">
        <div className="max-w-7xl my-0 mx-auto px-4 md:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
