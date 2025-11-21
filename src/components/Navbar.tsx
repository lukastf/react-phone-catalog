import { NavLink } from "react-router-dom";
import logoMobile from "../assets/logo-desktop.svg";
import logoDesktop from "../assets/logo-mobile.svg";
//import menuHamburguerMobile from "../assets/menu-hamburguer-mobile.svg";
import likeImg from "../assets/like.svg";
import cartImg from "../assets/cart.svg";
import { useState } from "react";
import { useCart } from "../contexts/UseCart";
import { useFavorites } from "../contexts/UseFavorites";

const Navbar = () => {
  // Define classes base comuns para todos os links
  const baseClassesMenu = `uppercase 
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

  const icon = "block w-4 h-4 bg-center bg-no-repeat cursor-pointer";

  const [showHideMenuMobileState, setShowHideMenuMobileState] = useState(
    "left-full invisible opacity-0"
  );

  const showMenuMobile = () => {
    setShowHideMenuMobileState("left-0 opacity-100 visible");
  };

  const hideMenuMobile = () => {
    setShowHideMenuMobileState("left-full invisible opacity-0");
  };

  const { cart } = useCart();
  const cartCount = cart?.length ?? 0;

  const { favorites } = useFavorites();
  const favoritesCount = favorites?.length ?? 0;

  return (
    <>
      <header className="fixed z-100 top-0 right-0 left-0 flex gap-4 xl:gap-6 justify-between bg-white">
        <div
          className="flex grow gap-4 justify-between h-12 relative md:grow-0 lg:h-16 after:content-[''] 
          after:block after:h-px after:w-screen after:bg-[#e2e6e9] after:absolute after:bottom-0"
        >
          <NavLink aria-current="page" to="/" className="flex px-4 lg:px-6">
            <picture className="flex items-center">
              <img src={logoMobile} alt="logo" className="block lg:hidden" />
              <img src={logoDesktop} alt="logo" className="hidden lg:block" />
            </picture>
          </NavLink>
          <div className="relative px-4 flex items-center border-l-[#E2E6E9] border-l md:hidden">
            <button
              onClick={() => showMenuMobile()}
              className={`${icon} bg-[url(/src/assets/menu-hamburguer-mobile.svg)]`}
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
                    ? `${baseClassesMenu} text-[#313237] after:w-full`
                    : `${baseClassesMenu} text-[#89939a] hover:text-[#313237] after:w-0 hover:after:w-full`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="flex items-center justify-center">
              <NavLink
                aria-current="page"
                to="/phones"
                className={({ isActive }) =>
                  isActive
                    ? `${baseClassesMenu} text-[#313237] after:w-full`
                    : `${baseClassesMenu} text-[#89939a] hover:text-[#313237] after:w-0 hover:after:w-full`
                }
              >
                Phones
              </NavLink>
            </li>
            <li className="flex items-center justify-center">
              <NavLink
                aria-current="page"
                to="/tablets"
                className={({ isActive }) =>
                  isActive
                    ? `${baseClassesMenu} text-[#313237] after:w-full`
                    : `${baseClassesMenu} text-[#89939a] hover:text-[#313237] after:w-0 hover:after:w-full`
                }
              >
                Tablets
              </NavLink>
            </li>
            <li className="flex items-center justify-center">
              <NavLink
                aria-current="page"
                to="/accessories"
                className={({ isActive }) =>
                  isActive
                    ? `${baseClassesMenu} text-[#313237] after:w-full`
                    : `${baseClassesMenu} text-[#89939a] hover:text-[#313237] after:w-0 hover:after:w-full`
                }
              >
                Accessories
              </NavLink>
            </li>
          </ul>
          <ul className="flex">
            <li
              className="flex items-center justify-center relative w-[50%] md:w-12 
            lg:w-16 border-l-[#E2E6E9] border-l"
            >
              <NavLink
                aria-current="page"
                to="/favorites"
                className={({ isActive }) =>
                  isActive
                    ? `${baseClassesMenu} text-[#313237] after:w-full`
                    : `${baseClassesMenu} text-[#89939a] hover:text-[#313237] after:w-0 hover:after:w-full`
                }
              >
                <div className="relative">
                  <img src={likeImg} alt="like" />
                  {favoritesCount > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {favoritesCount}
                    </span>
                  )}
                </div>
              </NavLink>
            </li>
            <li
              className="flex items-center justify-center relative w-[50%] md:w-12 
            lg:w-16 border-l-[#E2E6E9] border-l"
            >
              <NavLink
                aria-current="page"
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? `${baseClassesMenu} text-[#313237] after:w-full`
                    : `${baseClassesMenu} text-[#89939a] hover:text-[#313237] after:w-0 hover:after:w-full`
                }
              >
                <div className="relative">
                  <img src={cartImg} alt="cart" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <aside
        className={`fixed z-100 top-0 bottom-0 box-border w-full 
        bg-white h-screen overflow-auto font-bold 
        uppercase transition-all duration-300
        ${showHideMenuMobileState} md:hidden`}
      >
        <div
          className="flex grow gap-4 justify-between h-12 relative md:grow-0 lg:h-16
        after:content-[''] after:block after:h-px after:w-screen after:bg-[#e2e6e9] after:absolute after:bottom-0"
        >
          <NavLink aria-current="page" to="/" className="flex px-4 lg:px-6">
            <picture className="flex items-center">
              <img src={logoMobile} alt="logo" className="block lg:hidden" />
              <img src={logoDesktop} alt="logo" className="hidden lg:block" />
            </picture>
          </NavLink>
          <div className="relative px-4 flex items-center border-l border-[#E2E6E9] md:hidden">
            <button
              onClick={() => hideMenuMobile()}
              className={`${icon} bg-[url(/src/assets/close.svg)]`}
            ></button>
          </div>
        </div>
        <nav className="grow">
          <ul className="mt-6 list-none flex flex-col gap-4 md:flex-row md:mt-0 md:gap-8">
            <li className="flex items-center justify-center">
              <NavLink
                aria-current="page"
                to="/"
                onClick={() => hideMenuMobile()}
                className={({ isActive }) =>
                  isActive
                    ? `${baseClassesMenu} text-[#313237] after:w-full`
                    : `${baseClassesMenu} text-[#89939a] hover:text-[#313237] after:w-0 hover:after:w-full`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="flex items-center justify-center">
              <NavLink
                aria-current="page"
                to="/phones"
                onClick={() => hideMenuMobile()}
                className={({ isActive }) =>
                  isActive
                    ? `${baseClassesMenu} text-[#313237] after:w-full`
                    : `${baseClassesMenu} text-[#89939a] hover:text-[#313237] after:w-0 hover:after:w-full`
                }
              >
                Phones
              </NavLink>
            </li>
            <li className="flex items-center justify-center">
              <NavLink
                aria-current="page"
                to="/tablets"
                onClick={() => hideMenuMobile()}
                className={({ isActive }) =>
                  isActive
                    ? `${baseClassesMenu} text-[#313237] after:w-full`
                    : `${baseClassesMenu} text-[#89939a] hover:text-[#313237] after:w-0 hover:after:w-full`
                }
              >
                Tablets
              </NavLink>
            </li>
            <li className="flex items-center justify-center">
              <NavLink
                aria-current="page"
                to="/accessories"
                onClick={() => hideMenuMobile()}
                className={({ isActive }) =>
                  isActive
                    ? `${baseClassesMenu} text-[#313237] after:w-full`
                    : `${baseClassesMenu} text-[#89939a] hover:text-[#313237] after:w-0 hover:after:w-full`
                }
              >
                Accessories
              </NavLink>
            </li>
          </ul>
          <ul className="flex fixed bottom-0 right-0 left-0 h-[68px] border-t border-[#E2E6E9]">
            <li className="flex items-center justify-center relative w-1/2 border-l border-[#E2E6E9] md:w-12 lg:w-16">
              <NavLink
                aria-current="page"
                to="/favorites"
                onClick={() => hideMenuMobile()}
                className={({ isActive }) =>
                  isActive
                    ? `${baseClassesMenu} text-[#313237] after:w-full`
                    : `${baseClassesMenu} text-[#89939a] hover:text-[#313237] after:w-0 hover:after:w-full`
                }
              >
                <div className="relative">
                  <img src={likeImg} alt="like" className="mt-6" />
                  {favoritesCount > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {favoritesCount}
                    </span>
                  )}
                </div>
              </NavLink>
            </li>
            <li className="flex items-center justify-center relative w-1/2 border-l border-[#E2E6E9] md:w-12 lg:w-16">
              <NavLink
                aria-current="page"
                to="/cart"
                onClick={() => hideMenuMobile()}
                className={({ isActive }) =>
                  isActive
                    ? `${baseClassesMenu} text-[#313237] after:w-full`
                    : `${baseClassesMenu} text-[#89939a] hover:text-[#313237] after:w-0 hover:after:w-full`
                }
              >
                <div className="relative">
                  <img src={cartImg} alt="cart" className="mt-6" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-4 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
