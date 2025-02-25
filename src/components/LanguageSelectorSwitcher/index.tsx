"use client"
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import React from 'react'
import { Button } from '../ui/button';
import { useLocale } from 'next-intl';

const LanguageSelectorSwitcher: React.FC = () => {

    const router = useRouter()
    const pathname = usePathname()
    const language = useLocale(); 

    function handleLanguageChange(nextLocale: Locale) {
        router.replace(
            {
                pathname,
            },
            {
                locale: nextLocale,
            }
        );
    }
    return (
        <div className='flex items-center'>
            <Button
                variant={"ghost"}
                size={"icon"}
                onClick={() => handleLanguageChange('en')}
                className={`dark:text-light ${language === 'en' ? 'border-2 rounded-full dark:border-blue-50 border-blue-950 p-1' : ''}`}
            >
                <img src={"../../usaflag.svg"} alt="usa" className='w-7 lg:w-8 sm:w-8 h-auto lg:hidden md:inline-block md:w-full' />
            </Button>
            <Button
                variant={"ghost"}
                size={"icon"}
                onClick={() => handleLanguageChange('es')}
                className={`dark:text-light ${language === 'es' ? 'border-2 rounded-full dark:border-blue-50 border-blue-950 p-1' : ''}`}
            >
                <img src={"../../spainflag.svg"} alt="esp" className='w-7 lg:w-8 sm:w-8 h-auto lg:hidden md:inline-block md:w-full' />
            </Button>
        </div>

    )
}

export default LanguageSelectorSwitcher