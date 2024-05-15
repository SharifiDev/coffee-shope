function CartDeskTop() {
  return (
    <>
      <div className="  z-50  opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute top-11 -left-1  transition-all  flex flex-col text-base p-4 w-[400px]  text-zinc-700 dark:text-white bg-white dark:bg-zinc-700 border-t-[3px] border-t-orange-300  rounded-2xl ">
        <header className="flex items-center justify-between">
          <span className="text-gray-300 text-xs"> 1مورد </span>
          <a href="#" className="text-center text-orange-300 text-xs/6">
            مشاهده سبد خرید
            <svg className="w-4 h-4 inline-block">
              <use href="#chever-arow"></use>
            </svg>
          </a>
        </header>
        {/* -----------body-------- */}
        <div className=" mt-5 space-y-5">
          <div className="flex items-center gap-x-2.5 pb-6 border-b border-b-gray-300  dark:border-b-white/10 ">
            <div className="w-[120px] h-[120px]">
              <img src="./../../images/products/p1.png" alt="" />
            </div>
            <div>
              <h5 className="text-base mb-6 dark:text-white text-gray-700">
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
        {/* -----------footer-------- */}
        <footer className="my-5 flex items-center justify-between ">
          <div>
            <span className="text-xs text-gray-300">مبلغ قابل پرداخت </span>
            <div>
              <span className=" dark:text-white gray-300 text-xl font-danaMedium">
                350,000
              </span>
              <span className=" dark:text-white text-gray-700 text-bbse">
                تومان
              </span>
            </div>
          </div>
          <div className=" w-[144px] h-[56px] bg-teal-600 dark:bg-emerald-500 rounded-xl flex items-center justify-center text-xl text-white cursor-pointer">
            <a className="">ثبت سفارش</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default CartDeskTop;
