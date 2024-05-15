import React from "react";
import ProductHeader from "../Products/ProductHeader";
import Blog from "./Blog";
import blogsData from './blogsData'
export default function Blogs() {
  return (
    <div className=" mb-12 md:mb-28">
      <div className="container">
        {/* section head  */}
        <ProductHeader>
          <div className="text-zinc-700 dark:text-white ">
            <h5 className="text-2xl md:text-5xl  font-morabbaMedium mb-[2px] md:mb-1.5">
              مطالب خواندنی
            </h5>
          </div>
          <div className="text-orange-300 flex items-center md:gap-x-[4px]">
            <a href="#" className="">
              <span className="text-base md:text-xl "> مشاهده همه مطالب</span>
            </a>
            <svg className="w-5 h-5">
              <use href="#chever-arow"></use>
            </svg>
          </div>
        </ProductHeader>
        {/* Section Content row  */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">
          {/* box */}
          {
            blogsData.map(item =>(
              <Blog {...item}/>

            ))
          }

        </div>
      </div>
    </div>
  );
}
