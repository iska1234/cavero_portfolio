"use client"
import React, { useState } from 'react'
import Logo from './Logo'
import CustomLink from './CustomLinks/CustomLink'
import { useLocale, useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { SwitchThemeButton } from '../SwitchThemeButton'
import LanguageSelectorSwitcher from '../LanguageSelectorSwitcher'
import { Locale } from '@/i18n/routing'
import MobileMenu from './MobileMenu'
import { getLinks, socialLinks } from '@/lib/constants/Navbar/NavbarLinks'
import { getNavButtonStyles } from '@/lib/constants/Navbar/NavbarButtonStyles'

const Navbar = () => {
  const locale = useLocale()
  const t = useTranslations('')
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const navButtonStyles = getNavButtonStyles(isOpen);

  const links = getLinks(t);

  return (
    <header className='w-full font-medium flex items-center justify-between
    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8
    '>
      <button className="pt-2 flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
        {navButtonStyles.map((style, index) => (
          <span key={index} className={style.className}></span>
        ))}
      </button>
      <div className='hidden xs:block'>
        <SwitchThemeButton />
      </div>

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

        <nav className="flex items-center gap-2 justify-center flex-wrap">
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
            <LanguageSelectorSwitcher defaultValue="en" />
          </div>
        </nav>
      </div>

      {isOpen ? <MobileMenu handleClick={handleClick} locale={locale as Locale} /> : null}
      <div className="absolute left-[50%] translate-x-[-50%] pt-2">
        <Logo />
      </div>
    </header>
  )
}

export default Navbar