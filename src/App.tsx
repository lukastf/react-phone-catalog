import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-8">
        {/* Outlet renderiza o componente da rota aninhada (Home, About, Contact) */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;
