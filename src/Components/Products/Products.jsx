import Product from "./Product";
import ProductHeader from "./ProductHeader";
import dataProducts from "./DataProducts";
import { useState } from "react";

function Products() {
  const [dataP, setDataP] = useState(dataProducts);

  return (
    <>
      <section className="bg-porducts dark:bg-zinc-800 pt-8 md:pt-[192px]">
        <div className="container ">
          <div className="wrapper">
            {/* productHeader  */}
            <ProductHeader>
              <div className="text-zinc-700 dark:text-white">
                <h5 className="text-2xl md:text-5xl  font-morabbaMedium mb-[2px] md:mb-1.5">
                  جدیدترین محصولات
                </h5>
                <span className="text-[18px] md:text-3xl font-morabba">
                فرآوری شده از دانه قهوه
                </span>
              </div>
              <div className="text-orange-300 flex items-center md:gap-x-[4px]">
                <a href="#" className="">
                  <span className="text-base md:text-xl "> مشاهده همه </span>
                  <samp className="text-base md:text-xl hidden md:inline-block  font-dana">
                    محصولات
                  </samp>
                </a>
                <svg className="w-5 h-5">
                  <use href="#chever-arow"></use>
                </svg>
              </div>
            </ProductHeader>
            <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4   md:gap-5 gap-3.5 mt-5 md:mt-12">
              {/*<---  section course  ----> */}
              <Product props={dataP} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
