"use client"
import AnimatedText from "@/components/AnimatedText";
import Navbar from "@/components/Navbar";
import FeaturedProject from "@/components/ProjectsPage/FeaturedProject";
import Project from "@/components/ProjectsPage/Project";
import TransitionEffect from "@/components/TransitionEffect";
import Layout from "@/layout";
import { useTranslations } from "next-intl";
import Head from "next/head";

export default function Projects() {
    const t = useTranslations();
    return (
        <>
        <Head>
            <title>{t("projects.title")}</title>
            <meta name='description' content="any description" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-10'>
            <Navbar />
                <AnimatedText text={t("projects.banner")} className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                <div className="flex flex-col gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Zalto CRM"
                                img={"../ZaltoCrm.webp"}
                                summary="The Banco de la Peseta project is a digital bank application developed using Angular for the frontend and Spring Boot for the backend. It aims to provide users with a seamless banking experience, offering intuitive interfaces and comprehensive functionalities. With features like account management, fund transfers, bill payments, and more, Banco de la Peseta prioritizes security and scalability to ensure a reliable platform for financial transactions."
                                link="https://dashboard.bancodelapeseta.com/"
                                github="https://github.com/rayexbomx/bancodelapeseta-frontend"
                                type={t("projects.feature")}
                            />
                        </div>
                        <div className="col-span-12 sm:col-span-12">
                        <FeaturedProject
                                title="Support Guide"
                                img={"../SupportGuide.webp"}
                                summary="The Banco de la Peseta project is a digital bank application developed using Angular for the frontend and Spring Boot for the backend. It aims to provide users with a seamless banking experience, offering intuitive interfaces and comprehensive functionalities. With features like account management, fund transfers, bill payments, and more, Banco de la Peseta prioritizes security and scalability to ensure a reliable platform for financial transactions."
                                link="https://dashboard.bancodelapeseta.com/"
                                github="https://github.com/rayexbomx/bancodelapeseta-frontend"
                                type={t("projects.feature")}
                            />
                        </div>
                        <div className="col-span-12 sm:col-span-12">
                        <FeaturedProject
                                title="Banco de la Peseta"
                                img={"../BancoPeseta.webp"}
                                summary="The Banco de la Peseta project is a digital bank application developed using Angular for the frontend and Spring Boot for the backend. It aims to provide users with a seamless banking experience, offering intuitive interfaces and comprehensive functionalities. With features like account management, fund transfers, bill payments, and more, Banco de la Peseta prioritizes security and scalability to ensure a reliable platform for financial transactions."
                                link="https://dashboard.bancodelapeseta.com/"
                                github="https://github.com/rayexbomx/bancodelapeseta-frontend"
                                type={t("projects.feature")}
                            />
                        </div>
                        <div className="flex gap-12">

                  
                        <div className="w-full ">
                            <Project
                                title="React Veltrix Dashboard"
                                img={""}
                                summary=""
                                link="#"
                                github="#"
                                type={t("projects.progress")}
                            />
                        </div>
                        <div className="w-full">
                            <Project
                                title="React Chat App"
                                img={""}
                                summary="The e-commerce admin dashboard, developed with React and Bootstrap, seamlessly integrates with MongoDB to offer robust management capabilities. Administrators can efficiently oversee product listings, track orders, manage inventory, and analyze sales performance through intuitive data visualization tools. Leveraging the flexibility of MongoDB, the dashboard ensures efficient data storage and retrieval, empowering administrators to streamline operations and enhance the e-commerce experience for both customers and merchants."
                                link="#"
                                github="#"
                                type={t("projects.progress")}
                            />
                        </div>
                        </div>
                        <div className="flex gap-12">

                        <div className="w-full">
                            <Project
                                title="React Digital Marketing"
                                img={""}
                                summary="a feature"
                                link="#"
                                github="#"
                                type={t("projects.progress")}
                            />
                        </div>
                        <div className="w-full">
                            <Project
                                title="Angular Agency Landing"
                                img={""}
                                summary="a feature"
                                link="#"
                                github="#"
                                type={t("projects.progress")}
                            />
                        </div>
                        </div>
                    </div>

            </Layout>
        </main>
    </>
    );
}
