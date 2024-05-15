function MenuHeade({ openNav, setOpenNav }) {
  return (
    <>
      {openNav && (
        <div className="fixed z-50  right-0 top-0 bottom-0  w-[256px] min-h-screen bg-white dark:bg-zinc-700 py-3 px-4 transition-al">
          <header className="flex items-center  justify-between border-b border-b-gray-100 dark:border-b-white/10  pb-5">
            <div className="text-orange-300 flex items-center gap-x-[14px]">
              <svg className="w-10 h-10">
                <use href="#logo"></use>
              </svg>
              <svg className="w-[100px] h-[40px]">
                <use href="#logo-type"></use>
              </svg>
            </div>
            <div
              className=" cursor-pointer "
              onClick={() => setOpenNav(!openNav)}
            >
              <svg className="w-5 h-5  text-zinc-700 dark:text-white ">
                <use href="#x-mark"></use>
              </svg>
            </div>
          </header>
          <div>
            <div className="border-b border-b-gray-100 dark:border-white/10 pb-2 ">
              <div
                clas
                className=" flex items-center w-[224px] h-10 gap-x-2  p-2.5 text-orange-300 mt-6 bg-orange-200/20 rounded-[6px]"
              >
                <svg className=" w-5 h-5">
                  <use href="#home"></use>
                </svg>
                <span>صفحه اصلی</span>
              </div>

              <ul className="text-zinc-700 dark:text-white  child:pr-2 child:gap-x-2  child:mb-6 pt-4   ">
                <li className="flex  justify-between ">
                  <div>
                    <div className="flex items-center gap-x-2 hover:text-orange-300 hover:cursor-pointer ">
                      <svg className=" w-5 h-5">
                        <use href="#shoping"></use>
                      </svg>
                      <span> فروشگاه</span>
                    </div>
                    <div>
                      <ul className="  mr-[30px] mt-3 child:mb-3 text-sm child-hover:text-orange-300  ">
                        <li>
                          <a href="">قهوه ویژه</a>
                        </li>
                        <li>
                          <a href=""> ویژه در سطح جهانی</a>
                        </li>
                        <li>
                          <a href="">قهوه درج یک</a>
                        </li>
                        <li>
                          <a href="">قهوه تجاری</a>
                        </li>
                        <li>
                          <a href="">کپسول قهوه</a>
                        </li>
                        <li>
                          <a href="">قهوه برزلی</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <svg className="w-4 h-4  rotate-90 hover:text-orange-300 hover:cursor-pointer">
                    <use href="#chever-arow"></use>
                  </svg>
                </li>
                <li className="flex items-center hover:text-orange-300 hover:cursor-pointer">
                  <svg className=" w-5 h-5">
                    <use href="#chat"></use>
                  </svg>
                  <span>دکشنری</span>
                </li>
                <li className="flex items-center">
                  <svg className=" w-5 h-5">
                    <use href="#doucmnt-text"></use>
                  </svg>
                  <span> بلاگ</span>
                </li>
                <li className="flex items-center hover:text-orange-300 hover:cursor-pointer">
                  <svg className=" w-5 h-5">
                    <use href="#beak"></use>
                  </svg>
                  <span> درباره ما</span>
                </li>
                <li className="flex items-center hover:text-orange-300 hover:cursor-pointer">
                  <svg className=" w-5 h-5">
                    <use href="#phone"></use>
                  </svg>
                  <span>تماس با ما </span>
                </li>
              </ul>
            </div>

            <footer>
              <ul className="text-zinc-700  child:pr-2 child:gap-x-2  child:mb-6 pt-8 child:text-orange-300 child:cursor-pointer">
                <li className="flex items-center">
                  <svg className=" w-5 h-5">
                    <use href="#shoping"></use>
                  </svg>
                  <span>ورود | ثبت‌نام </span>
                </li>
                <li className="flex items-center">
                  <svg className=" w-5 h-5">
                    <use href="#moon"></use>
                  </svg>
                  <span>تم تیره</span>
                </li>
                <li className="flex items-center">
                  <svg className=" w-5 h-5">
                    <use href="#shopping-cart"></use>
                  </svg>
                  <span>سبد خرید</span>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuHeade;
