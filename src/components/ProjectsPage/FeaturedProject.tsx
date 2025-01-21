"use client"
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { GithubIcon } from "../Navbar/NavIcons";
import TooltipComponent from "../TooltipProvider";

interface FeaturedProjectProps {
    type: string;
    title: string;
    summary: string;
    img: string;
    link: string;
    github: string;
    frontendIcons?: string[];
    backendIcons?: string[];
    databaseIcons?: string[];
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ type, title, summary, img, link, github, frontendIcons,
    backendIcons,
    databaseIcons, }) => {
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
                <div className="flex gap-2 w-full justify-between py-4">
                    <div className="flex flex-col gap-1 ">
                        <p className="font-semibold">Tecnologias Frontend</p>
                        <div className="grid grid-cols-4">
                            {frontendIcons?.map((icon, index) => (
                                 <TooltipComponent
                                 key={index} 
                                 content={ 
                                   <span className={`font-semibold text-md capitalize px-2 font-primarySemibold border-transparent text-center  mt-2 w-36 opacity-100 transition-opacity duration-300`}>
                                   {icon}
                                   </span>
                                 }
                                 triggerContent={
                                    <img  src={`../${icon}.svg`} className="w-[30px]" />
                                 }
                                 contentClass="bg-black text-white"
                                 triggerClass=""
                                 side="top"
                                 delayDuration={100}
                                 />
                              
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-semibold">Tecnologias Backend</p>
                        <div className="grid grid-cols-4 gap-2">
                            {backendIcons?.map((icon, index) => (
                             
                                <TooltipComponent
                                key={index} 
                                 content={ 
                                   <span className={`font-semibold text-md capitalize px-2 font-primarySemibold border-transparent text-center  mt-2 w-36 opacity-100 transition-opacity duration-300`}>
                                   {icon}
                                   </span>
                                 }
                                 triggerContent={
                                    <img src={`../${icon}.svg`} className="w-[30px]" />
                                 }
                                 contentClass="bg-black text-white"
                                 triggerClass=""
                                 side="top"
                                 delayDuration={100}
                                 />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-semibold">Bases de datos</p>
                        <div className="grid grid-cols-4">
                            {databaseIcons?.map((icon, index) => (
                                   <TooltipComponent
                                   key={index} 
                                   content={ 
                                     <span className={` font-semibold text-md capitalize px-2 font-primarySemibold border-transparent text-center  mt-2 w-36 opacity-100 transition-opacity duration-300`}>
                                     {icon}
                                     </span>
                                   }
                                   triggerContent={
                                    <img src={`../${icon}.svg`} className="w-[30px]" />
                                   }
                                   contentClass="bg-black text-white"
                                   triggerClass=""
                                   side="top"
                                   delayDuration={100}
                                   />
                             
                            ))}
                        </div>
                    </div>
                </div>
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