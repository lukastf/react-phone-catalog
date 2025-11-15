import { NavLink } from "react-router-dom";
import logoMobile from "../assets/logo-desktop.svg";
import logoDesktop from "../assets/logo-mobile.svg";

const Navbar = () => {
  // Define classes base comuns para todos os links
  const baseClasses = `uppercase 
    text-xs 
    font-extrabold 
    leading-[22px] 
    tracking-[2px] 
    h-full 
    relative 
    transition-all 
    duration-300 

    md:flex 
    md:items-center 
    
    after:content-[''] 
    after:block 
    after:h-0.5 
    after:bg-[#313237] 
    after:absolute
    after:bottom-0 
    after:transition-all 
    after:duration-300"`;

  return (
    <>
      <header className="fixed z-100 top-0 right-0 left-0 flex gap-4 xl:gap-6 justify-between bg-white">
        <div
          className="flex grow gap-4 justify-between h-12 relative md:grow-0 lg:h-16 after:content-[''] 
          after:block after:h-px after:w-screen after:bg-[#e2e6e9] after:absolute after:bottom-0"
        >
          <a href="#" className="flex px-4 lg:px-6">
            <picture className="flex items-center">
              <img src={logoMobile} alt="logo" className="block lg:hidden" />
              <img src={logoDesktop} alt="logo" className="hidden lg:block" />
            </picture>
          </a>
          <div className="relative px-4 flex items-center border-l-[#E2E6E9] border-l md:hidden">
            <button
              className="block w-4 h-4 bg-center bg-no-repeat cursor-pointer 
            bg-[url(./assets/menu-hamburguer-mobile.svg)]"
            ></button>
          </div>
        </div>
        <nav className="hidden grow md:flex justify-between">
          <ul className="mt-6 list-none flex flex-col gap-4 md:flex-row md:mt-0 md:gap-8">
            <li className="flex items-center justify-center">
              <NavLink
                aria-current="page"
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${baseClasses} text-[#313237] after:w-full`
                    : `${baseClasses} text-[#89939a] hover:text-[#313237] after:w-0 hover:after:w-full`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="flex items-center justify-center">
              <NavLink
                aria-current="page"
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `${baseClasses} text-[#313237] after:w-full`
                    : `${baseClasses} text-[#89939a] hover:text-[#313237] after:w-0 hover:after:w-full`
                }
              >
                About
              </NavLink>
            </li>
            <li className="flex items-center justify-center">
              <NavLink
                aria-current="page"
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? `${baseClasses} text-[#313237] after:w-full`
                    : `${baseClasses} text-[#89939a] hover:text-[#313237] after:w-0 hover:after:w-full`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className="flex"></ul>
        </nav>
      </header>
      {/*
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={
                ({ isActive }) =>
                  isActive
                    ? `${baseClasses} bg-gray-900 text-white` // Classes se ativo (ex: fundo escuro)
                    : `${baseClasses} text-gray-300 hover:bg-gray-700 hover:text-white` // Classes se inativo
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? `${baseClasses} bg-gray-900 text-white`
                  : `${baseClasses} text-gray-300 hover:bg-gray-700 hover:text-white`
              }
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? `${baseClasses} bg-gray-900 text-white`
                  : `${baseClasses} text-gray-300 hover:bg-gray-700 hover:text-white`
              }
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>*/}
    </>
  );
};

export default Navbar;
