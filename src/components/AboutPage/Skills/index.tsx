"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

interface SkillProps{
  name: string;
  y: string;
  x: string;
}

const Skill:React.FC<SkillProps> = ({ name, x, y }) => {
  const [showName, setShowName] = useState(false);

  const handleClick = () => {
    setShowName(!showName);
  };

  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light 
       px-3 shadow-dark cursor-pointer absolute w-20 h-20 dark:text-dark dark:bg-light
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
    xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      onClick={handleClick}
    >
      {showName && (
        <motion.div
          className="bottom-0 text-sm text-white text-center dark:text-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {name.toUpperCase()}
        </motion.div>
      )}
      {!showName && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: showName ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            width={20}
            height={20}
            src={`../${name}.svg`}
            alt={name}
            className="w-full h-auto fill-dark dark:fill-light"
          />
        </motion.div>
      )}
    </motion.div>
  )
}

const Skills = () => {
  const  t  = useTranslations();
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">{t("about.titleskill")}</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
    lg:h[80vh] sm:h[60vh] xs:h[50vh]
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg
    md:bg-circularLightMd md:dark:bg-circularDarkMd
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm
    ">

        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web & Móvil
        </motion.div>

        <Skill name="html" x="-13vw" y="-2vw" />
        <Skill name="css" x="13vw" y="-1vw" />
        <Skill name="js" x="1vw" y="9vw" />
        <Skill name="db" x="0vw" y="-9vw" />

        <Skill name="reactjs" x="15vw" y="9vw" />
        <Skill name="design" x="-11vw" y="-11vw" />
        <Skill name="nodejs" x="13vw" y="-10vw" />
        <Skill name="kotlin" x="-18vw" y="5vw" />

        <Skill name="nestjs" x="24vw" y="-8vw" />
        <Skill name="flutter" x="-20vw" y="12vw" />
        <Skill name="firebase" x="-25vw" y="-8vw" />
        <Skill name="postgres" x="13vw" y="16vw" />
        <Skill name="MySQL" x="-2vw" y="-18vw" />

        <Skill name="jetpack" x="-7vw" y="22vw" />
        <Skill name="MVVM" x="-34vw" y="4vw" />
        <Skill name="spring" x="33vw" y="5vw" />
        <Skill name="tailwind" x="15vw" y="-20vw" />
        <Skill name="mui" x="-16vw" y="-20vw" />

      </div>
    </>
  )
}

export default Skills