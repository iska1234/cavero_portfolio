"use client"
import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl';
import Layout from '@/layout';


const Footer = () => {
  const t  = useTranslations();
  return (
    <footer className=' w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; {t("footer.rights")}</span>
            <div className="flex items-center lg:py-2">
            {t("footer.made")} <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
            {t("footer.by")}&nbsp;<Link href="#" className='underline-offset-2'>SICEH</Link>
            </div>
            <Link href="#">{t("footer.slogan")}</Link>
        </Layout>
    </footer>
  )
}

export default Footer
