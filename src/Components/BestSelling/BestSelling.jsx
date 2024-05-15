import ProductHeader from "../Products/ProductHeader";
import BestsellingSlider from "./BestSellingSlider";

function BestSelling() {
  return (
    <>
      <div className="container">
        <ProductHeader>
          <div className="text-zinc-700 dark:text-white">
            <h5 className="text-2xl md:text-5xl  font-morabbaMedium mb-[2px] md:mb-1.5">
            محصولات پر فروش
            </h5>
            <span className="text-[18px] md:text-3xl font-morabba">
            پیشنهاد قهوه خور ها ...
            </span>
          </div>
          <div className="flex gap-[18px]  ">
            <div className="--swiper-navigation-color cursor-pointer w-11 h-11 dark:bg-zinc-700 bg-white rounded-full  flex-center">
              <svg className=" rotate-180 md:w-[26px] w-5 h-5 md:h-[26px] text-zinc-700 dark:text-white font-danaBold text-2xl">
                <use href="#chever-arow"></use>
              </svg>
            </div>
            <div className="--swiper-navigation-color cursor-pointer w-11 h-11 dark:bg-zinc-700 bg-white rounded-full  flex-center">
              <svg className="md:w-[26px] w-5 h-5 md:h-[26px] text-zinc-700 dark:text-white font-danaBold text-2xl">
                <use href="#chever-arow"></use>
              </svg>
            </div>
          </div>
        </ProductHeader>

        <BestsellingSlider />
      </div>
    </>
  );
}

export default BestSelling;
