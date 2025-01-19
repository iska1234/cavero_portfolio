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
    const buttonStyles = [
      {
        className: `bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`,
      },
      {
        className: `bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`,
      },
      {
        className: `bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`,
      },
    ];

    const links = [
      { href: "/", title: t("navbar.title1"), className: "mr-4" },
      { href: "/about", title: t("navbar.title2"), className: "mx-4" },
      { href: "/services", title: t("navbar.title5"), className: "mx-4" },
      { href: "/projects", title: t("navbar.title3"), className: "mx-4" },
      { href: "/articles", title: t("navbar.title4"), className: "ml-4" },
    ];

    const socialLinks = [
      {
        href: "https://twitter.com/224_support",
        Icon: TwitterIcon,
        alt: "Twitter",
        className: "w-6 mr-2",
      },
      {
        href: "https://github.com/iska1234",
        Icon: GithubIcon,
        alt: "GitHub",
        className: "w-6 mr-2",
      },
      {
        href: "https://www.linkedin.com/in/sadhu-cavero-egusquiza/",
        Icon: LinkedInIcon,
        alt: "LinkedIn",
        className: "w-6 mr-2",
      },
      {
        href: "https://www.pinterest.es/shinonsupp/",
        Icon: PinterestIcon,
        alt: "Pinterest",
        className: "w-6 mr-2 dark:bg-light rounded-full",
      },
    ];

    const navMobileLinks = [
      { href: "/", title: "navbar.title1" },
      { href: "/about", title: "navbar.title2" },
      { href: "/projects", title: "navbar.title3" },
      { href: "/articles", title: "navbar.title4" },
    ];

    const socialMobileLinks = [
      { href: "https://twitter.com/224_support", Icon: TwitterIcon, alt: "Twitter", className: 'w-6 mr-3 sm:mx-1' },
      { href: "https://github.com/iska1234", Icon: GithubIcon, alt: "GitHub", className: 'w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1' },
      { href: "https://www.linkedin.com/in/sadhu-cavero-egusquiza/", Icon: LinkedInIcon, alt: "LinkedIn", className: 'w-6 mx-3 sm:mx-1' },
      { href: "https://www.pinterest.es/shinonsupp/", Icon: PinterestIcon, alt: "Pinterest", className: 'w-6 ml-3 bg-light rounded-full sm:mx-1' },
    ];
  
  return (
    <header className='w-full py-8 font-medium flex items-center justify-between
    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8
    '>
     <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
      {buttonStyles.map((style, index) => (
        <span key={index} className={style.className}></span>
      ))}
    </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
        {links.map((link, index) => (
        <CustomLink 
          key={index} 
          href={link.href} 
          title={link.title} 
          className={link.className} 
        />
      ))}
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
        {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className={link.className}
        >
          <link.Icon />
        </motion.a>
      ))}
      <SwitchThemeButton />
      <div className="ml-6">
        <LanguageSelectorSwitcher defaultValue="en" /> {/* O cualquier valor de locale que estés utilizando */}
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
            {navMobileLinks.map((link, index) => (
          <CustomMobileLink key={index} href={link.href} title={link.title} toggle={() => {}} />
        ))}
            </nav>

            <nav className="flex items-center justify-center flex-wrap mt-2">
            {socialMobileLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={link.className}
          >
            <link.Icon />
          </motion.a>
        ))}

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