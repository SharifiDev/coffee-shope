function Product({ props }) {
  return (
    <>
      {props.map((item) => {
        const { id, title, img, price, price2 } = item;
        return (
          <>
            <div className="  dark:text-white bg-white dark:bg-zinc-700 rounded-2xl shadow-lg   p-2 md:p-5">
              <div className="relative min-h-[190px] ">
                <img src={img} alt="p1" className=" mx-auto w-fuwll " />
                <span className=" absolute top-1.5 right-1.5  leading-[34px] font-danaBold block text-xs/[24] pt-1.5 md:text-base/[34] h-5 md:h-[30px] dark:text-zinc-700 text-white px-2.5 md:px-3.5 flex-center rounded-full bg-orange-300">
                  12%
                </span>
              </div>

              {/*<---  section course info  ----> */}
              <div className="mt-2 md:mt-5">
                <h4 className=" text-sm/[28px] md:text-xl  mb-1.5 mb:mb-2.5  font-danaMedium dark:text-white text-zinc-700 line-clamp-2 ">
                  {title}
                </h4>

                <div className="flex gap-2 md:gap-2.5">
                  {/*<---  section price  ----> */}
                  <div>
                    <span className="text-teal-600 dark:text-emerald-500 text-base md:text-xl font-danaBold">
                      {price}
                    </span>
                    <span className="text-teal-600 dark:text-emerald-500 text-xs md:text-sm tracking-tighter">
                      تومان
                    </span>
                  </div>

                  {/*<---  section offer token  ----> */}
                  <div className=" under text-gray-400 ">
                    <span className="text-gray-400 text-xs md:text-xl font-danaMedium">
                      {price2}
                    </span>
                    <span className="hidden lg:inline text-gray-400 text-sm tracking-tighter">
                      تومان
                    </span>
                  </div>
                </div>
              </div>

              {/*<---  section footer  ----> */}
              <footer className="mt-2.5 md:mt-4 flex justify-between items-center w-full ">
                {/*<---  section content  ----> */}
                <div className="flex items-center ">
                  <div className="w-[26px] md:w-[36px] h-[26px] md:h-[36px] bg-gray-100 hover:bg-teal-600 text-gray-400 hover:text-white dark:hover:bg-emerald-500 dark:bg-zinc-900 rounded-full ml-2.5 md:ml-3  flex items-center justify-center transition-all">
                    <svg className="w-4 md:w-[22px] h-4 md:h-[22px] ">
                      <use href="#shopping-cart"></use>
                    </svg>
                  </div>
                  <svg className="w-4 h-4 md:w-6 md:h-6 hover:text-teal-600 text-gray-400 transition-all">
                    <use href="#arrows-left-right"></use>
                  </svg>
                </div>

                {/*<---  section scors  ----> */}
                <div className="flex items-center text-gray-400">
                  <svg className="w-4 h-4 md:w-6 md:h-6">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-yellow-400">
                    <use href="#star"></use>
                  </svg>
                </div>
              </footer>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Product;
