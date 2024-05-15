import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className=' relative bg-zinc-700 py-8 md:py-11  w-full flex justify-center'>
                <svg className=" rotate-180 hidden md:block absolute top-0 right-0 left-0 m-auto text-gray-100 dark:text-zinc-800 w-[100px] h-[22px]">
                    <use href="#crve"></use>
                </svg>
                <div className="hidden md:flex -translate-y-2/4 absolute top-0 right-0 left-0 m-auto  items-center justify-center w-[30px] h-[30px] border-2  border-orange-300 rounded-full ">
                    <svg className="w-5 h-5 text-zinc-700 dark:text-white  rotate-90">
                        <use href="#chever-arow"></use>
                    </svg>
                </div>
                <div className=' sm:w-[94%] lg:w-[90%]  px-5 md:mx-0 '>
                    <div className=' flex justify-between flex-wrap flex-col md:flex-row mx-auto text-gray-300'>
                        <div className='flex flex-col gap-y-6 md:gap-y-[18px]'>
                            <div className=" flex items-center gap-x-5">
                                <svg className="w-[57px] h-[54px]">
                                    <use href="#logo"></use>
                                </svg>
                                <svg className="w-[138px] h-[54px]">
                                    <use href="#logo-type"></use>
                                </svg>
                            </div>
                            <p className=' text-lg md:text-xl/[48px] xl:max-w-[606px] '>ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.</p>
                        </div>
                        <div>
                            <h1 className='text-2xl mb-7 mt-[26px] font-danaMedium text-white'>دسترسی سریع</h1>
                            <div className='grid grid-cols-2 gap-y-2.5 gap-x-10 md:gap-x-16 md:gap-y-5 max-w-[350px] md:max-w-[500px]'>
                                <a href="#" className='text-base md:text-xl  hover:text-orange-300  '>
                                    <span className='w-2.5 h-1 ml-2.5 md:ml-3 bg-current bg-gray-300 inline-block rounded-full'></span>
                                    حریم خصوصی
                                </a>
                                <a href="#" className='text-base md:text-xl  hover:text-orange-300  '>
                                    <span className='w-2.5 h-1 ml-2.5 md:ml-3 bg-current bg-gray-300 inline-block rounded-full'></span>
                                    عودت کالا
                                </a>
                                <a href="#" className='text-base md:text-xl  hover:text-orange-300  '>
                                    <span className='w-2.5 h-1 ml-2.5 md:ml-3 bg-current bg-gray-300 inline-block rounded-full'></span>
                                    شرایط استفاده
                                </a>
                                <a href="#" className='text-base md:text-xl  hover:text-orange-300  '>
                                    <span className='w-2.5 h-1 ml-2.5 md:ml-3 bg-current bg-gray-300 inline-block rounded-full'></span>
                                    ثبت سفارش
                                </a>
                                <a href="#" className='text-base md:text-xl  hover:text-orange-300  '>
                                    <span className='w-2.5 h-1 ml-2.5 md:ml-3 bg-current bg-gray-300 inline-block rounded-full'></span>
                                    پسرش های متداول
                                </a>
                                <a href="#" className='text-base md:text-xl  hover:text-orange-300  '>
                                    <span className='w-2.5 h-1 ml-2.5 md:ml-3 bg-current bg-gray-300 inline-block rounded-full'></span>
                                    فرصت های شغلی
                                </a>
                                <a href="#" className='text-base md:text-xl  hover:text-orange-300  '>
                                    <span className='w-2.5 h-1 ml-2.5 md:ml-3 bg-current bg-gray-300 inline-block rounded-full'></span>
                                    ضمانت نامه ها
                                </a>
                                <a href="#" className='text-base md:text-xl  hover:text-orange-300  '>
                                    <span className='w-2.5 h-1 ml-2.5 md:ml-3 bg-current bg-gray-300 inline-block rounded-full'></span>
                                    ارتباط با ما
                                </a>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className='text-2xl mb-7 mt-[26px] font-danaMedium text-white'> در تماس باشیم</h1>
                            <div>
                                <div className='md:text-xl mb-6  md:mb-10 '>
                                    <span className='flex items-center text-xl gap-x-2 md:gap-x-3 mb-4 md:mb-5 '>
                                        <svg class=" shrink-0 w-5 h-5 md-w-6 md:-h-6 text-white">
                                            <use href='#map-pin'></use>
                                        </svg>
                                        مشهد امام رضا دو  بلوار ساجدی ساجدی یک پلاک 135

                                    </span>
                                    <div className='flex flex-col flex-wrap  gap-y-4  text-xl'>
                                        <a href='mailto:sinasharifi@gmail.com' className='flex text-xl gap-x-2 md:gap-x-3 text-orange-300 '>
                                            <svg class="w-5 h-5 md-w-6 md:-h-6 ">
                                                <use href='#email'></use>
                                            </svg>
                                            sinasharifi@gmail.com
                                        </a>
                                        <div className='flex items-center gap-x-2 md:gap-x-3 '>
                                            <svg class="w-5 h-5 md-w-6 md:-h-6">
                                                <use href='#phone'></use>
                                            </svg>
                                            <span className=' inline-block'>0903 589 9040</span>
                                            <span>0991 839 8593</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-1.5 md:gap-x-6 ltr-text font-danaMedium md:text-xl'>
                                    <a href="#" className='flex-center flex-grow items-center gap-x-2 text-zinc-700  bg-gradient-to-r from-orange-200 to-orange-300 rounded-xl h-12 '>
                                        @golden-coffee
                                        <svg className='w-[26px] h-[26px] md:w-[38px]  md:h-[38px] '>
                                            <use href='#telegram'></use>
                                        </svg>
                                    </a>
                                    <a href="#" className='flex-center flex-grow items-center gap-x-2 border border-orange-200 text-orange-200 rounded-xl h-12'>
                                        @golden-coffee
                                        <svg className='w-[26px] h-[26px] md:w-[38px]  md:h-[38px] '>
                                            <use href='#instagram'></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='boot    border-t  border-t-white/10  mt-11 text-gray-300 gap-x-5 flex-wrap pt-11'>
                        <div className=' '>
                            <div></div>
                            <p >تمام حقوق این رابط کاربری متعلق به <span className='text-orange-200'>سبزلرن</span> میباشد و دانشجوی این دوره اجازه استفاده آن را در مصارف شخصی و تجاری ندارد.</p>
                        </div>
                        <div className='ltr-text text-left text-footer '>Copyright © 2023 Golden Coffee. All rights reserved.</div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
