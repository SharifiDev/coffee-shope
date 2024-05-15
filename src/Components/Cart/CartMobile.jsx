function CartMobile({ openCart, setOpenCart }) {
  return (
    <>
      <div className="fixed flex flex-col  z-50 top-0 bottom-0 left-0 w-[256px] min-h-screen bg-white dark:bg-zinc-700 py-3 px-4">
        <header className="flex items-center  justify-between border-b border-b-gray-100 dark:border-b-white/10 pb-5">
          <div>
            <svg
              className="w-5 h-5  text-zinc-700 dark:text-white "
              onClick={() => setOpenCart(!openCart)}
            >
              <use href="#x-mark"></use>
            </svg>
          </div>
          <div>
            <samp className="text-base dark:text-white font-danaMedium">
              سبد خرید
            </samp>
          </div>
        </header>

        {/* -----------body-------- */}
        <div className="wrpper ">
          <div className=" mt-5 ">
            <div className="flex items-center   pb-6 border-b   border-b-gray-100 dark:border-b-white/10 ">
              <div className="w-[190px] h-[90px] flex alin-center">
                <img src="./../../images/products/p1.png" alt="" />
              </div>
              <div>
                <h5 className="text-sm mb-1.5 dark:text-white text-gray-700 ">
                  قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                </h5>
                <span className="text-teal-600 dark:text-emerald-500 text-xs tracking-[-5%]">
                  14.500 تومان تخفیف
                </span>
                <div>
                  <span className=" dark:text-white text-gray-700 text-xl font-danaMedium">
                    175,000{" "}
                  </span>
                  <span className=" dark:text-white text-gray-700 text-bbse">
                    تومان
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-5 ">
            <div className="flex items-center   pb-6 border-b border-b-gray-100  dark:border-b-white/10 ">
              <div className="w-[190px] h-[90px] flex alin-center">
                <img src="../../images/products/p1.png" alt="" />
              </div>
              <div>
                <h5 className="text-sm mb-1.5 dark:text-white text-gray-700 font-danaMedium">
                  قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                </h5>
                <span className="text-teal-600 dark:text-emerald-500 text-xs tracking-[-5%]">
                  14.500 تومان تخفیف
                </span>
                <div>
                  <span className=" dark:text-white text-gray-700 text-xl font-danaMedium">
                    175,000{" "}
                  </span>
                  <span className=" dark:text-white text-gray-700 text-bbse">
                    تومان
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----------footer-------- */}
        <footer className=" flex items-center justify-between mt-auto ml-1.5">
          <div className=" w-[112px] h-[44px] bg-teal-600 dark:bg-emerald-500 rounded-xl flex items-center justify-center text-base text-white cursor-pointer">
            <a className=""> ثبت سفارش</a>
          </div>
          <div>
            <span className="text-xs text-gray-300 tracking-[-5%]">
              مبلغ قابل پرداخت{" "}
            </span>
            <div className=" ">
              <span className=" dark:text-white gray-300 text-base font-danaMedium">
                350,000
              </span>
              <span className=" dark:text-white text-gray-700 text-xs ">
                تومان
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default CartMobile;
