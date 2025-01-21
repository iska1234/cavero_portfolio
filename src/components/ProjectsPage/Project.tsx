"use client"
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { GithubIcon } from "../Navbar/NavIcons";

interface ProjectProps{
    type: string; title: string; summary: string; img: string; link: string; github: string;
}

const Project:React.FC<ProjectProps> = ({ title, type, img, link, github }) => {
    const t = useTranslations();
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className="absolute top-0 -right-3 z-[-10] w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light dark:border-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
            <Link href={link} className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <motion.img src={img} alt={title} className='w-full h-auto rounded-lg border-2 border-dark dark:border-light'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"/>
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base ">{type}</span>
                <Link href={link} className='hover:underline underline-offset-2'>
                    <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-2xl">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} className='text-lg font-semibold underline md:text-base'>
                    {t("projects.visit")}
                    </Link>
                    <Link href={github} target='_blank' className='w-8 md:w-6'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default Project