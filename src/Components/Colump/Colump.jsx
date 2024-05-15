function Colump() {
  return (
    <>
      <div className="my-8 md:my-20">
        <div className="container">
          <div className="wrapper py-8 px-3  sm:p-8 gap-y-8  lg:px-5 xl:px-11   lg:py-6 flex flex-col lg:flex-row lg:justify-between lg:items-center text-white  rounded-2xl bg-emerald-600">
            {/* section one  */}
            <div className="lg:flex-center flex lg:shrink-0 ">
              <img
                src="./images/club/diamond.png"
                className="w-[87px] h-[78px] xl:w-[110px] sm:h-24"
                alt=""
              />
              <div className="mr-3 sm:mr-6">
                <h2 className="text-2xl sm:text-5xl  sm:mb-2  font-morabbaBold">
                  کافی کلاپ
                </h2>
                <p className="text-[18px]/[24px] sm:text-2xl font-morabba ">
                  میدونستی میتونی با امتیاز هات قهوه بگیری ؟
                </p>
              </div>
            </div>

            <div className="flex items-center w-full justify-between ">
              {/* section tow  */}
              <div className="flex justify-center items-center gap-5  xl:gap-5 m-2 xl:mr-28">
                <div className="bg-white w-[72px] h-[72px] sm:w-[98px] sm:h-[98px] rounded-2xl flex justify-center items-end ">
                  <a href="#" className="flex flex-col items-center ">
                    <svg className="w-[33px] h-[33px] sm:w-12 sm:h-12">
                      <use href="#club1"></use>
                    </svg>
                    <span className="text-zinc-700 text-xs sm:text-sm mt-1.5 mb-1">
                      ماموریت ها
                    </span>
                  </a>
                </div>
                <div className="bg-white w-[72px] h-[72px] sm:w-[98px] sm:h-[98px] rounded-2xl flex justify-center items-end ">
                  <a href="#" className="flex flex-col items-center ">
                    <svg className="w-[33px] h-[33px] sm:w-12 sm:h-12">
                      <use href="#club1"></use>
                    </svg>
                    <span className="text-zinc-700 text-xs sm:text-sm mt-1.5 mb-1">
                      ماموریت ها
                    </span>
                  </a>
                </div>
                <div className="bg-white w-[72px] h-[72px] sm:w-[98px] sm:h-[98px] rounded-2xl flex justify-center items-end ">
                  <a href="#" className="flex flex-col items-center ">
                    <svg className="w-[33px] h-[33px] sm:w-12 sm:h-12">
                      <use href="#club1"></use>
                    </svg>
                    <span className="text-zinc-700 text-xs sm:text-sm mt-1.5 mb-1">
                      ماموریت ها
                    </span>
                  </a>
                </div>
              </div>
              {/* section three  */}
              <div className="mrw-5">
                <div className="flex flex-col items-centder  ">
                  <span className="text-2xl sm:text-3xl font-danaBold pr-[7px]">
                    542
                  </span>
                  <span className="text-xs sm:text-sm  tracking-[1px] font-dana pr-[7px] sm:mt-1">
                    امتیاز شما
                  </span>
                  <div className="flex  rounded-full bg-orange-300 py-1 sm:py-1.5 pr-[7px] sm:pr-2.5 items-center mt-1 sm:mt-2">
                    <span className="text-xs sm:text-sm">دریافت جایزه</span>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6">
                      <use href="#chever-arow"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Colump;
