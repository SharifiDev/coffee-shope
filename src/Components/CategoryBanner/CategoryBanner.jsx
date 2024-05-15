import CategoryBannerBox from "./CategoryBannerBox";
import categoryBannerData from "./CatgegoryBannerData";
function CategoryBanner() {
  return (
    // category banner
    <div className="my-8 md:my-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
          {/* category banner box   */}
          <CategoryBannerBox props={categoryBannerData} />
        </div>
      </div>
    </div>
  );
}

export default CategoryBanner;
