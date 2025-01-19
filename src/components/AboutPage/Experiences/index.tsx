import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import LilIcon from '@/components/LilIcon/LilIcon';
import { useTranslations } from 'next-intl';

interface DetailsProps{
  position:string, company:string, companyLink:string, time:string, address:string, work:string
}

const Details:React.FC<DetailsProps> = ({ position, company, companyLink, time, address, work }) => {

  const ref = useRef(null);

  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

    <LilIcon reference={ref} />
    <motion.div className="" initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
      <h3 className="capitalize font-bold text-2xl text-justify mb-1 sm:text-xl xs:text-lg">{position}&nbsp;<a className='text-primary dark:text-primaryDark capitalize' href={companyLink}>@{company}</a></h3>
      <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm ">
        {time} | {address}
      </span>
      <p className="mt-2 font-medium w-full text-justify md:text-sm">
        {work}
      </p>
    </motion.div>
  </li>
}

const Experiences = () => {
  const t = useTranslations();

  const ref = useRef(null);

  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );

  return (
    <div className='my-64'>
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4x1 md:mb-16">
      {t("experience.title")}
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]
        " />

        <ul className="w-full flex flex-col items-start jusitfy-between ml-4 xs:ml-2">
          <Details
            position={t("experience.position5")}
            company={t("experience.company5")}
            companyLink="#"
            time={t("experience.time5")}
            address="Lima, Perú"
            work={t("experience.work5")}
          />
          <Details
            position={t("experience.position1")}
            company={t("experience.company1")}
            companyLink="#"
            time={t("experience.time1")}
            address="Lima, Perú"
            work={t("experience.work1")}
          />

          <Details
            position={t("experience.position2")}
            company={t("experience.company2")}
            companyLink="#"
            time={t("experience.time2")}
            address="Lima, Perú"
            work={t("experience.work2")}
          />

          <Details
            position={t("experience.position3")}
            company={t("experience.company3")}
            companyLink="#"
            time={t("experience.time3")}
            address="Lima, Perú"
            work={t("experience.work3")}
          />

          <Details
            position={t("experience.position4")}
            company={t("experience.company4")}
            companyLink="#"
            time={t("experience.time4")}
            address="Lima, Perú"
            work={t("experience.work4")}
          />
        </ul>

      </div>
    </div>

  )
}

export default Experiences
