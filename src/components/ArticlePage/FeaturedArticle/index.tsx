"use client"
import { Link } from "@/i18n/routing";
import React from "react";
import {motion} from 'framer-motion'

interface FeaturedArticleProps{
    img: string, title: string, time: string, summary: string, link: string 
}

const FeaturedArticle:React.FC<FeaturedArticleProps> = ({ img, title, time, summary, link }) => {
    
    const truncateSummary = (summary: string, maxLines: number): string => {
        if (!summary) return '';
        const summaryLines = summary.split('\n');
        const truncatedSummary = summaryLines.slice(0, maxLines).join('\n');
        return truncatedSummary;
    };
    
    const maxLines = 2;

    const truncatedSummary = truncateSummary(summary, maxLines);
    const isTruncated = summary !== truncatedSummary;

    return (
        <li className='relative col-span-1 w-full p-4 bg-ligth border border-solid bg-light border-dark rounded-2xl dark:bg-dark dark:border-light'>
            <div className="absolute top-0 -right-3 z-[-10] w-[102%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
            <Link href={link} className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <motion.img src={img} alt={title} width={1200} height={500}  className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw"
                />
            </Link>
            <Link href={link}>
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">{title}</h2>
            </Link>
            <p className="mt-4 text-sm mb-2 text-justify">{truncatedSummary}</p>
            <div className="flex justify-between mt-5">
            {isTruncated && (
                <Link href={link}>
                    <span className="text-primary font-semibold dark:text-primaryDark cursor-pointer hover:underline">View More</span>
                </Link>
            )}
            <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
            </div>
        </li>
    )
}


export default FeaturedArticle