function Home() {
  return (
    <>
      {/*----------------------section App Home ---------------------- */}
      <section className="bg-gray-100 dark:bg-zinc-800 relative  home h-[200px]   xm:h-auto xm:aspect-[2/1] md:aspect-auto bg-[url('../public/images/headerBgMobile.webp')] md:bg-[url('../public/images/headerBgDesktop.webp')]  bg-no-repeat  bg-cover  bg-[center_top]">
        <div className=" relative overflow-y-hidden  container h-full  md:min-h-[650px]   flex  items-end justify-center flex-col">
          <div className="text-start text-white">
            <h5 className="text-2xl md:text-6xl   font-morabbaMedium mb-0.5 md:mb-2 ">
              قهوه عربیکا تانزانیا
            </h5>
            <p className="font-morabba text-xl md:text-5xl">
              یک فنجان بالانس !
            </p>
            <span className="w-[100px] h-0.5 bg-orange-300 block my-3 md:my-8"></span>
            <p className=" w-[200px] md:w-[460px] text-[12px] md:text-2xl">
              قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه
              است که در نواحی مختلف کمربند قهوه کشت میشود.
            </p>
          </div>

          <div className="cyrcl cyrcl-main cyrcl-lg hidden md:flex">
            <div className="cyrcl cyrcl-md">
              <div className="cyrcl cyrcl-sm"></div>
            </div>
          </div> 
        </div>
        
        <svg className="hidden md:block absolute bottom-0 right-0 left-0 m-auto text-gray-100 dark:text-zinc-800 w-[100px] h-[22px]">
          <use href="#crve"></use>
        </svg>

        <div className="hidden md:flex translate-y-2/4 absolute bottom-0 right-0 left-0 m-auto  items-center justify-center w-[30px] h-[30px] border-2  border-orange-300 rounded-full ">
          <svg className="w-5 h-5 text-zinc-700 dark:text-white  -rotate-90 ">
            <use href="#chever-arow"></use>
          </svg>
        </div>
      </section>
    </>
  );
}

export default Home;
