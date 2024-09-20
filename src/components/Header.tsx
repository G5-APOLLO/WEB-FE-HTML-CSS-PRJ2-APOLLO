import { Link } from 'react-router-dom';
import { importImage } from '../utils/importImage';

export function Header() {
  return (
    <header className="h-[70px] sm:h-[100px] bg-custom-radial-header flex justify-between items-center pl-2 sm:pl-6 pr-7">
      <div className="flex-shrink-0">
        <Link to="/">
          <img 
            className="w-[100px] h-[40px] sm:w-[140px] sm:h-[70px] object-contain" 
            src={importImage("Logo.png")}
            alt="Logo compañía" 
          />
        </Link>
      </div>
      
      <div className="flex items-center pl-[10px] sm:pl-[80px] ">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-[50%] ml-[5px] sm:w-[100%] h-[40px] sm:h-[100%] px-4 py-3 text-base border border-gray-300 rounded-l-xl bg-[#413b3c] 
          text-white focus:bg-[#645b5d] transform focus:scale-105 sm:placeholder-white placeholder-transparent"
        />
        <button className="flex-shrink-0 px-2 sm:px-4  py-3  border border-gray-300 border-l-0 cursor-pointer rounded-r-xl bg-[#413b3c]">
          <img 
            className=" w-[15px] h-[14px] sm:w-[25px] sm:h-[21px]"
            src={importImage("search-alt-2-svgrepo-com.svg")}
            alt="Buscar" 
          />
        </button>
      </div>
      
      <nav className="flex items-center">
        <a href="#" className="flex items-center text-white ml-2 mr-3">
          <img 
            className=" w-[25px] h-[25px] sm:w-[40px] sm:h-[40px]" 
            src={importImage("account-svgrepo-com.svg")}
            alt="Cuenta" 
            width="40" 
            height="40" 
          />
          <span className="text-xs sm:text-base ml-2">Mi Cuenta</span>
        </a>
        <Link to="/cart" className="flex items-center text-white ml-6">
          <img 
            className="w-[25px] h-[25px] sm:w-[40px] sm:h-[40px]"
            src={importImage("shopping-cart-svgrepo-com.svg")}
            alt="Carrito" 
          />
          <span className="text-xs sm:text-base ml-2">Carrito</span>
        </Link>
      </nav>
    </header>
  );
}

