import Education from '@/components/AboutPage/Education';
import Experiences from '@/components/AboutPage/Experiences';
import Skills from '@/components/AboutPage/Skills';
import AnimatedNumbers from '@/components/AnimatedNumbers';
import AnimatedText from '@/components/AnimatedText';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TransitionEffect from '@/components/TransitionEffect';
import Layout from '@/layout';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import React from 'react'

export const metadata: Metadata = {
  title: "Sobre Mí | Siceh Developer - Experiencias digitales únicas",
  description: "Conoce a Siceh Developer, un desarrollador Fullstack y diseñador UI/UX con 3 años de experiencia creando soluciones digitales innovadoras y centradas en el usuario",
  alternates: {
    canonical: "https://cavero-portfolio.vercel.app/about",
    languages: {
       es: "https://cavero-portfolio.vercel.app/es/about",
       en:"https://cavero-portfolio.vercel.app/en/about"
    }
  },
};

export default function About() {
  const t  = useTranslations();
    return (
      <>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-10'>
        <Navbar />
          <AnimatedText text={t("about.banner")} className='mt-16 mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='flex md:flex-col w-full gap-16 sm:gap-8'>
            <div className="w-[35%] md:w-full flex flex-col items-start text-justify xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">{t("about.subtitle")}</h2>
              <p className="font-medium">{t("about.desc1")}</p>
              <p className="my-4 font-medium">{t("about.desc2")}</p>
              <p className="my-4 font-medium">{t("about.desc3")}</p>
            </div>

            <div className="w-[40%] md:w-full relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 z-[-10] w-[103%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <img src='../profile2.webp' alt="alt" className='w-full h-auto rounded-2xl'
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

            <div className="w-[25%] md:w-full flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  +<AnimatedNumbers value={20} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">{t("about.goal1")}</h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  +<AnimatedNumbers value={15} />
                </span>
                <h2 className="text-md font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">{t("about.goal2")}</h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  +<AnimatedNumbers value={3} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">{t("about.goal3")}</h2>
              </div>
            </div>


          </div>
          <Skills />
          <Experiences />
          <Education />
        </Layout>
        <Footer />
      </main>
    </>
    );
  }
  