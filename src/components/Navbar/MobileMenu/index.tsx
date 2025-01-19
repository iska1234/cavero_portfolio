import React from 'react'
import { motion } from 'framer-motion'
import CustomMobileLink from '../CustomLinks/CustomMobileLink'
import LanguageSelectorSwitcher from '@/components/LanguageSelectorSwitcher'
import { getNavMobileLinks, socialMobileLinks } from '@/lib/constants/Navbar/MobileNavbarLinks'
import { useTranslations } from 'next-intl'

interface MobileMenuProps {
    handleClick: VoidFunction;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ handleClick }) => {
    
    const t = useTranslations("");
    const navMobileLinks = getNavMobileLinks(t);

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-80 backdrop-blur-xl rounded-lg"
        >
            <div className="absolute top-6 right-6">
                <button
                    onClick={handleClick}
                    className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full shadow-md hover:bg-gray-700 transition-all"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="white"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <nav className="flex flex-col items-center gap-8 mt-12">
                {navMobileLinks.map((link, index) => (
                    <CustomMobileLink
                        key={index}
                        href={link.href}
                        title={link.title}
                        toggle={() => { }}
                        className="text-2xl font-semibold text-gray-200 hover:text-white transition-all"
                    />
                ))}
            </nav>

            <div className="w-4/5 h-px bg-gray-700 my-8"></div>

            <nav className="flex items-center gap-6">
                {socialMobileLinks.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={link.className}
                    >
                        <link.Icon />
                    </motion.a>
                ))}
            </nav>

            <div className="mt-8">
                <LanguageSelectorSwitcher

                />
            </div>
        </motion.div>
    )
}

export default MobileMenu