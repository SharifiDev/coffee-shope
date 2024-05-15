function SubMenu() {
    return ( 
        <>
        <ul className=" opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute  top-20 transition-all child:cursor-pointer flex flex-col child-hover:text-orange-300 text-base gap-y-4 pt-5  pr-6 pb-7 w-[208px] h-[272px] text-zinc-700 dark:text-white bg-white dark:bg-zinc-700 border-t-[3px] border-t-orange-300  rounded-2xl ">
            <li >
                <a href="">قهوه ویژه</a>
                </li>
            <li >
                <a href=""> ویژه در سطح جهانی</a>
                </li>
            <li >
                <a href="">قهوه درج یک</a>
                </li>
            <li >
                <a href="">قهوه تجاری</a>
                </li>
            <li >
                <a href="">کپسول قهوه</a>
                </li>
            <li >
                <a href="">قهوه برزلی</a>
                </li>
        </ul>
        </>
     );
}

export default SubMenu;