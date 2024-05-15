function CategoryBannerBox({ props }) {
  return props.map((data) => {
    return (
      <a
        href="#"
        className="category-banner__item1 bg-zinrc-700 rond h-[142px] md:h-[248px] rounded-2xl flex flex-col justify-center pr-12"
      >
        <h5 className={" md:font-danaBold text-2xl md:text-4xl mb-4 md:mb-7"}>
          {data.title}
        </h5>
        <span className=" md:font-danaMedium md:text-xl">
          {" "}
          {data.subTitle}{" "}
        </span>
      </a>
    );
  });
}

export default CategoryBannerBox;
