import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Navbar/NavIcons";
import { Link } from "@/i18n/routing";
import Layout from "@/layout";
import { useTranslations } from "next-intl";
import TransitionEffect from "@/components/TransitionEffect";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio Cavero | Transformando ideas en realidad con código y diseño",
  description: "Descubre el portafolio de un desarrollador full-stack apasionado. Explora proyectos innovadores y artículos sobre React.js y desarrollo web",
  alternates: {
    canonical: "https://cavero-portfolio.vercel.app",
    languages: {
       es: "https://cavero-portfolio.vercel.app/es",
       en:"https://cavero-portfolio.vercel.app/en"
    }
  },
};

export default function Home() {
  const t = useTranslations();
  return (
    <>
      <TransitionEffect />
      <main className='flex flex-col h-full items-center text-dark w-full  dark:text-light'>
        <Layout className='min-h-screen flex py-8 flex-col gap-20'>
          <Navbar />
          <div className="flex gap-8 items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full rounded-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600  shadow-lg overflow-hidden imgPic p-8">
              <img
                src={"../profileia.webp"}
                alt="Ia"
                className="-mb-8 mt-6 imgPic rounded-full w-full h-auto lg:hidden md:inline-block md:w-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text={t("index.banner")} className='!text-6xl !text-left
            xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl
            
            '/>
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">{t("index.subtitle")}</p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link href={t("cvLink.lng")} target={"_blank"}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light
            hover:text-dark border-2 border-solid border-transparent hover:border-dark
             dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base'
                  download={true}
                >{t("index.arrow")} <LinkArrow className={"w-6 ml-1"} /></Link>
                <Link href="mailto:sadhuisaac1@gmail.com" target={"_blank"}
                  className='ml-10 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >{t("index.contact")}</Link>
              </div>

            </div>
          </div>
       
        </Layout>
        <Footer />
        <HireMe />

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <img src={"../miscellaneous_icons_1.svg"} alt="alt" className='w-full h-auto' />
        </div>
      </main>
    </>
  );
}
