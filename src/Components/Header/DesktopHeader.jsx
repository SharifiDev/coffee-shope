import { useState } from "react";
import CartDeskTop from '../Cart/CartDeskTop'
import DeskTopMenu from '../Menues/DeskTopMenu'

function DesktopHeader() {
  const [theme, setTheme] = useState(true);

  let html = document.querySelector("#html");

  let changeTheme = () => {
    if (theme) {
      setTheme(false);
      html.setAttribute("class", "dark");
    } else {
      setTheme(true);
      html.removeAttribute("class", "dark");
    }
  };

  return (
    <>
      {/* <!---------- App Header Desktop-----------  --> */}
      <header className=" hidden md:block z-20 fixed left-0 right-0 mt-9 h-24 w-[98%] xl:w-[95%] mx-auto py-5 px-5 lg:px-8 xl:px-10  rounded-3xl bg-black/50 backdrop-blur-xl text-white tracking-[6.5%]">
        <div className="flex items-center  justify-between">
          {/*---------------- right header --------------------------- */}
          <div class="right text-white  ">
            <ul className="child:leading-[54px] flex items-center   gap-x-5 xl:gap-x-9  text-xl  child-hover:text-orange-300 tracking-tighter ">
              <li>
                <a href="ٌ#">
                  <img src="./../../images/app-logo.png" alt="logo" />
                </a>
              </li>
              <li class="text-white ">
                <a href="" class="text-orange-200">
                  صفحه اصلی
                </a>
              </li>
              <li className=" group">
                <a href="" className="">
                  فروشگاه
                </a>
                {/*---------------- Menu mobile --------------------------- */}
                <DeskTopMenu/>
              </li>
              <li>
                <a href="">دکشنری</a>
              </li>
              <li>
                <a href=""> بلاگ </a>
              </li>
              <li>
                <a href="">درباره ما</a>
              </li>
              <li>
                <a href="">تماس با ما</a>
              </li>
            </ul>
          </div>

          {/*---------------- left header --------------------------- */}
          <div class="left flex items-center gap-5">
            {/*---------------- baskit --------------------------- */}
            <div className="relative group ">
              <svg className="w-8 h-8   text-orange-200">
                <use href="#shopping-cart"></use>
              </svg>
            {/*---------------- Cart DeskTop --------------------------- */}
              <CartDeskTop/>
           
            </div>

            {/*---------------- theme --------------------------- */}
            <div className=" cursor-pointer " onClick={changeTheme}>
              <svg className="w-8 h-8 text-orange-200 ">
                {theme ? <use href="#moon"></use> : <use href="#sun"></use>}
              </svg>
            </div>

            {/*---------------- Line  --------------------------- */}
            <div className="flex items-center   xl:mx-10 ">
              <span className="line mb-[65px]"></span>
            </div>
            {/*---------------- loging --------------------------- */}
            <div className=" ">
              <div className="flex items-center gap-2 cursor-pointer">
                <svg className="w-8 h-8 text-orange-200">
                  <use href="#arrow-left"></use>
                </svg>
                <span className="hidden lg:inline-block text-orange-200 text-xl">
                  ورود | ثبت‌نام
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <div className="bg-[#00000066]/40  fixed inset-0 ">ss</div> */}
    </>
  );
}

export default DesktopHeader;
