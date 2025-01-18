import { Link, usePathname, useRouter } from "@/i18n/routing";

interface CustomMobileLinkProps {
    title: string;
    href: string;
    className?: string
    toggle: VoidFunction
}

const CustomMobileLink: React.FC<CustomMobileLinkProps> = ({ href, title, className = "", toggle }) => {

    const pathname = usePathname()
    const router = useRouter()
    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <Link href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`
        h-[1px] inline-block bg-light
        dark:bg-light
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${pathname === href ? 'w-full' : 'w-0'}
  
        dark:bg-dark`}>&nbsp;</span>
        </Link>
    )
}

export default CustomMobileLink