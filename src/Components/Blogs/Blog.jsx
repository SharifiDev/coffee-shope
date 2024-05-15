import React from 'react'

export default function Blog({ id, img, title, data }) {
  return (
    <div>
      <div className="Blog flex sm:block gap-x-2.5 p-2.5  md:pb-2 bg-white dark:bg-zinc-700 shadow rounded-2xl">
        <div className="Blog__img group relative w-[180px] shrink-0 h-[130px] sm:w-auto sm:h-auto rounded-2xl rounded-bl-[32px] overflow-hidden ">
          <img src={img} className="h-full object-cover sm:h-auto" />
          <div className="  absolute inset-0 hidden md:flex-center opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-75   ">
            <svg className="w-[138] h-[54px]  text-amber-900">
              <use href="#logo-type"></use>
            </svg>
          </div>
        </div>
        <div className="Blog-Content w-full  sm:flex sm:mt-4 pl-2 sm:pl-0  items-start  justify-between">
          <a href="#" className="text-zinc-700 dark:text-white h-14 sm:max-w-[193px] mb-5  mt-2.5 sm:mt-0 font-danaMedium md:font-dana text-sm/7 md:text-lg  line-clamp-2 pl-2">{title} </a>
          <div className="Blog-content__desktop  hidden sm:flex gap-5 sm:gap-2.5 md:gap-5 ">
            <span className="hidden xl:block w-px h-[61px] bg-gray-100 dark:bg-white/10  "></span>
            <div className="flex flex-col items-end ml-[12px] lg:ml-[18px]  text-teal-600 dark:text-emerald-500 ">
              <span className=" font-danaMedium text-xl lg:text-2xl">{data.month}</span>
              <span className="text-sm">{data.monthName}</span>
              <span className="text-sm">{data.year}</span>
            </div>
          </div>
          <div className="Blog-content__mobile flex sm:hidden justify-between  items-end  border-t border-t-gray-100 dark:border-t-white/10 pt-[18px]">
            <span className="text-teal-600 dark:text-emerald-500 text-xs">
              {data.month} {data.monthName} {data.year}
            </span>
            <a
              href="#"
              className="flex items-center gap-1 font-danaMedium text-xs h-5 rounded-md pr-2.5 pl-2 bg-orange-200/20 text-orange-300"
            >
              مطالعه
              <svg className="w-3.5 h-3.5 ">
                <use href="#arrow-icon"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>


    </div>
  )
}
