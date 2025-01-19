import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { GithubIcon } from "../Navbar/NavIcons";


interface FeaturedProjectProps {
    type: string; title: string; summary: string; img: string; link: string; github: string;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ type, title, summary, img, link, github }) => {
    const t = useTranslations();
    return (

        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark
        dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className="absolute top-0 -right-3 z-[-10] w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
            <Link target={'_blank'} href={link} className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <motion.img src={img} alt={title} className='w-full h-auto rounded-lg border-2 border-dark dark:border-light'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    sizes="(max-width: 768px) 50vw,
                (max-width: 1200px) 50vw,
                50vw"
                />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
                <Link target={'_blank'} href={link} className='hover:underline underline-offset-2'>
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-justify text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link target={'_blank'} href={github} className='w-10'>
                        <GithubIcon />
                    </Link>
                    <Link target={'_blank'} href={link} className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                    dark:bg-light dark:text-dark
                    sm:px-4 sm:text-base'>
                        {t("projects.visit")}
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default FeaturedProject