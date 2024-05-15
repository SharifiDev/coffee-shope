import React from 'react'

export default function ContactUs() {
    return (
        <div className='Contact-u mb-16 md:mb-28'>
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center lg:items-start  gap-y-8 md:gap-x-5 text-zinc-700 dark:text-white">
                    <img src="./public/images/contact.png" alt="contact as" className='w-[296px] ' />
                    <div>
                        <h3 className=' font-morabba text-2xl md:text-5xl mb-0.5 md:mb-1.5'>یکی از بهترین قهوه ها !</h3>
                        <span className='font-morabba text-[18px] md:text-3xl mb-5 md:mb-6 inline-block '>کیفیت قهوه را از ما بخواهید ...</span>
                        <div className=' flex gap-x-2.5 mb-5 md:mb-6 '>
                            <span className='w-1 h-1 rounded-full inline-block bg-zinc-700 dark:bg-gray-400'></span>
                            <span className='w-1 h-1 rounded-full inline-block bg-zinc-700 dark:bg-gray-400'></span>
                            <span className='w-1 h-1 rounded-full inline-block bg-zinc-700 dark:bg-gray-400'></span>
                        </div>
                        <p className='text[18px] md:text-2xl mb-5 md:mb-7'>فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می سازد!</p>
                        <a href="#" className='flex-center  border md:border-2   border-orange-300 rounded-full w-[180px] h-[50px] md:h-[60px] md:w-[216px]  gap-x-2 md:text-xl text-orange-300'>
                            <svg className='w-5 h-5 md:h-8 md:w-8'>
                                <use href='#phone'></use>
                            </svg>
                            ثبت سفارش تلفنی
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
