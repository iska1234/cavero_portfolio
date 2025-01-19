import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl';
import { CircularText } from '../Navbar/NavIcons';

const HireMe = () => {
    const t  = useTranslations();
    return (
        <div className='xs:hidden fixed left-2 bottom-8 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute'>
            <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
                <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />
                <Link href="mailto:sadhuisaac1@gmail.com" target={"_blank"} className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full text-xs font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light transition
                md:w-12 md:h-12 md:text-[8px]

                ">
                    {t("index.contact")}
                </Link>
            </div>
        </div>
    )
}

export default HireMe