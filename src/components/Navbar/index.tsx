"use client"
import React, { useState } from 'react'
import Logo from './Logo'
import CustomLink from './CustomLinks/CustomLink'
import { useLocale, useTranslations } from 'next-intl'
import {motion} from 'framer-motion'
import { SwitchThemeButton } from '../SwitchThemeButton'
import LanguageSelectorSwitcher from '../LanguageSelectorSwitcher'
import { Locale } from '@/i18n/routing'
import CustomMobileLink from './CustomLinks/CustomMobileLink'
import { GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './NavIcons'

const Navbar = () => {
    const locale = useLocale()
    const t = useTranslations('')
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen)
    }
  
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8
    '>
      <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5 '}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5 '}`}></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title={t("navbar.title1")} className='mr-4' />
          <CustomLink href="/about" title={t("navbar.title2")} className='mx-4' />
          <CustomLink href="/services" title={t("navbar.title5")} className='mx-4' />
          <CustomLink href="/projects" title={t("navbar.title3")} className='mx-4' />
          <CustomLink href="/articles" title={t("navbar.title4")} className='ml-4' />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a href="https://twitter.com/224_support" target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mr-4'>
            <TwitterIcon />
          </motion.a>
          <motion.a href="https://github.com/iska1234" target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mr-4'>
            <GithubIcon />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/sadhu-cavero-egusquiza/" target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mr-4'>
            <LinkedInIcon />
          </motion.a>
          <motion.a href="https://www.pinterest.es/shinonsupp/" target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mr-4 dark:bg-light rounded-full'>
            <PinterestIcon />
          </motion.a>

          <SwitchThemeButton />
          <div className="ml-6">

          <LanguageSelectorSwitcher defaultValue={locale as Locale}/>
          </div>

        </nav>
      </div>

      {
        isOpen ?

          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
      ">
            <nav className='flex items-center flex-col justify-center'>
              <CustomMobileLink href="/" title={t("navbar.title1")} toggle={handleClick} />
              <CustomMobileLink href="/about" title={t("navbar.title2")} toggle={handleClick} />
              <CustomMobileLink href="/projects" title={t("navbar.title3")} toggle={handleClick} />
              <CustomMobileLink href="/articles" title={t("navbar.title4")} toggle={handleClick} />
            </nav>

            <nav className="flex items-center justify-center flex-wrap mt-2">
              <motion.a href="https://twitter.com/224_support" target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mr-3 sm:mx-1'>
                <TwitterIcon />
              </motion.a>
              <motion.a href="https://github.com/iska1234" target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1'>
                <GithubIcon />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/sadhu-cavero-egusquiza/" target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 mx-3 sm:mx-1'>
                <LinkedInIcon />
              </motion.a>
              <motion.a href="https://www.pinterest.es/shinonsupp/" target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className='w-6 ml-3 bg-light rounded-full sm:mx-1'>
                <PinterestIcon />
              </motion.a>

              <SwitchThemeButton />
              <LanguageSelectorSwitcher defaultValue={locale as Locale}/>
            </nav>
          </motion.div>


          : null
      }

      <div className="absolute left-[50%] translate-x-[-50%] pt-2">
        <Logo />
      </div>
    </header>
  )
}

export default Navbar