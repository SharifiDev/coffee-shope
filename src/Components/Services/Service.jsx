import React from 'react'

export default function Service({ props }) {

    return (
        props.map(item => {
            return (
                <div className='w-[288px] h-[73px] flex gap-y-5 gap-x-4 items-center '>
                    <svg className='w-[110px] h-[73px]'>
                        <use href={`#${item.svgId}`} className='text-start'></use>
                    </svg>
                    <div className="flex flex-col  ">
                        <h5 className=' font-danaMedium md:text-lg/6 mb-3.5'>پشتیبانی شبانه روزی</h5>
                        <span className='md:text-sm'>7 روز هفته ، 24 ساعته</span>
                    </div>
                </div>
            )
        })
    )
}
