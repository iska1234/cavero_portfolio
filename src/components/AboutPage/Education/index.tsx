"use client"
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import { useTranslations } from 'next-intl';
import LilIcon from '@/components/LilIcon/LilIcon';

interface DetailsProps{
  type: string
  time: string
  place: string
  info : string
}  

export const Details:React.FC<DetailsProps> = ({ type, time, place, info }) => {

  const ref = useRef(null);

  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>

    <LilIcon reference={ref} />
    <motion.div className="" initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
      <h3 className="capitalize font-bold text-2xl text-justify mb-1 sm:text-xl xs:text-lg">{type}</h3>
      <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
        {time} | {place}
      </span>
      <p className="mt-2 font-medium w-full text-justify md:text-sm">
        {info}
      </p>
    </motion.div>
  </li>
}

const Education = () => {
  const t = useTranslations();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );

  return (
    <div className='mb-8'>
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4x1 md:mb-16">
        {t("education.title")}
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
         md:w-[2px] md:left-[30px] xs:left-[20px]" />

        <ul className="w-full flex flex-col items-start jusitfy-between ml-4 xs:ml-2">
          <Details
            type={t("education.type1")}
            time={t("education.time1")}
            place="IDAT"
            info={t("education.info1")}
          />

          <Details
            type={t("education.type2")}
            time={t("education.time2")}
            place="Codeable"
            info={t("education.info2")}
          />


        </ul>

      </div>
    </div>

  )
}

export default Education
