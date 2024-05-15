// import img from "./../src/images/categories/category1.png";
import productsCategoryData from "./ProductsCategoryData";
function ProductsCategory() {
  return (
    <>
      <div className="my-10 md:my-20">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-y-6 gap-x-[29px]  md:gap-[50px] items-center  ">
            {productsCategoryData.map((item) => {
              return (
                <>
                  <div className="text-zinc-700 dark:text-white flex flex-col items-center  w-[100px] md:w-[200px] ">
                    <a href="#">
                      <img
                        src={item.img}
                        className="w-full  "
                        loading="lazy"
                        alt=""
                      />
                    </a>
                    <h4 className="text-sm  md:text-xl mt-1.5 md:mt-2.5 font-danaBold text-center">
                      {item.title}
                    </h4>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsCategory;
