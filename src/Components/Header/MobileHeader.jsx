import { useState } from "react";
import CartMobile from "../Cart/CartMobile";
import MobileMenu from "../Menues/MobileMenu"

function MobileHeader() {
  const [openNav, setOpenNav] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      {/*------------- App Header Phone ------------------ */}
      <header className="md:hidden flex items-center justify-between dark:bg-zinc-700 bg-white w-full h-16 py-5 px-4 ">
        <div>
          <svg
            className="w-6 h-6 dark:text-white text-zinc-700 cursor-pointer "
            onClick={() => setOpenNav(!openNav)}
          >
            <use href="#bars-3"></use>
          </svg>
        </div>

        <div>
          <svg className="w-[100px] h-10 text-orange-300">
            <use href="#logo-type"></use>
          </svg>
        </div>
        {openNav && <MobileMenu openNav={openNav} setOpenNav={setOpenNav} />}

        <div>
          <svg className="w-6 h-6 dark:text-white text-zinc-700 cursor-pointer  " onClick={() => setOpenCart(!openCart)}>
            <use href="#shopping-cart"></use>
          </svg>
        </div>
        { openCart && <CartMobile openCart={openCart} setOpenCart={setOpenCart} />}
      </header>
    </>
  );
}

export default MobileHeader;
