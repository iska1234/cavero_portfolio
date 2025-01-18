import { Link, usePathname } from '@/i18n/routing'
import React from 'react'

interface CustomLinkProps{
    title: string;
    href: string;
    className?: string
}

const CustomLink:React.FC<CustomLinkProps> = ({ href, title, className = "" }) => {

    const pathname = usePathname()
    
    return (
      <Link href={href} className={`${className} relative group`}>
        {title}
  
        <span className={`
        h-[1px] inline-block bg-dark
        dark:bg-light
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${pathname === href ? 'w-full' : 'w-0'}
        `}>&nbsp;</span>
      </Link>
    )
  }

export default CustomLink