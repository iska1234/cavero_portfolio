"use client"
import AnimatedText from "@/components/AnimatedText";
import Footer from "@/components/Footer";
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
        <main className='w-full flex flex-col items-center justify-center dark:text-light'>
        <Layout className='min-h-screen flex py-8 flex-col gap-20'>
            <Navbar />
                <AnimatedText text={t("projects.banner")} className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                <div className="flex flex-col pb-16 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Zalto CRM"
                                img={"../ZaltoCrm.webp"}
                                summary={t("projects.summary.summary1")}
                                link="https://dashboard.bancodelapeseta.com/"
                                github="https://github.com/rayexbomx/bancodelapeseta-frontend"
                                type={t("projects.feature")}
                                frontendIcons={[
                                    "reactjs",
                                    "vite",
                                    "shadcn",
                                    "tailwind"
                                ]}
                                backendIcons={[
                                    "nodejs",
                                    "express",
                                    "socketio"
                                ]}
                                databaseIcons={[
                                    "mongodb"
                                ]}
                            />
                        </div>
                        <div className="col-span-12 sm:col-span-12">
                        <FeaturedProject
                                title="Projects Management"
                                img={"../ProjectsManagementAngular.webp"}
                                summary={t("projects.summary.summary2")}
                                link="https://supportguide.netlify.app"
                                github="https://github.com/iska1234/supportguide"
                                type={t("projects.feature")}
                                 frontendIcons={[
                                    "angular",
                                    "tailwind"
                                ]}
                                backendIcons={[
                                    "nodejs"
                                ]}
                                databaseIcons={[
                                    "postgres"
                                ]}
                            />
                        </div>
                        <div className="col-span-12 sm:col-span-12">
                        <FeaturedProject
                                title="Support Guide"
                                img={"../SupportGuide.webp"}
                                summary={t("projects.summary.summary3")}
                                link="https://supportguide.netlify.app"
                                github="https://github.com/iska1234/supportguide"
                                type={t("projects.feature")}
                                 frontendIcons={[
                                    "reactjs",
                                    "vite",
                                    "shadcn",
                                    "tailwind"
                                ]}
                                backendIcons={[
                                    "nodejs",
                                ]}
                                databaseIcons={[
                                    "postgres"
                                ]}
                            />
                        </div>
                        <div className="col-span-12 sm:col-span-12">
                        <FeaturedProject
                                title="Banco de la Peseta"
                                img={"../BancoPeseta.webp"}
                                summary={t("projects.summary.summary4")}
                                link="https://dashboard.bancodelapeseta.com/"
                                github="https://github.com/rayexbomx/bancodelapeseta-frontend"
                                type={t("projects.feature")}
                                frontendIcons={[
                                    "angular",
                                    "tailwind"
                                ]}
                                backendIcons={[
                                    "spring"
                                ]}
                                databaseIcons={[
                                    "MySQL"
                                ]}
                            />
                        </div>
                        <div className="flex md:flex-col md:gap-24 gap-12">

                  
                        <div className="w-full ">
                            <Project
                                title="React Veltrix Dashboard"
                                img={"../Veltrix.webp"}
                                summary=""
                                link="#"
                                github="#"
                                type={t("projects.progress")}
                            />
                        </div>
                        <div className="w-full">
                            <Project
                                title="React Chat App"
                                img={"../ChatApp.webp"}
                                summary="The e-commerce admin dashboard, developed with React and Bootstrap, seamlessly integrates with MongoDB to offer robust management capabilities. Administrators can efficiently oversee product listings, track orders, manage inventory, and analyze sales performance through intuitive data visualization tools. Leveraging the flexibility of MongoDB, the dashboard ensures efficient data storage and retrieval, empowering administrators to streamline operations and enhance the e-commerce experience for both customers and merchants."
                                link="#"
                                github="#"
                                type={t("projects.progress")}
                            />
                        </div>
                        </div>
                        <div className="flex md:flex-col md:gap-24 gap-12">

                        <div className="w-full">
                            <Project
                                title="React Digital Marketing"
                                img={"../DigitalMarketing.webp"}
                                summary="a feature"
                                link="#"
                                github="#"
                                type={t("projects.progress")}
                            />
                        </div>
                        <div className="w-full">
                            <Project
                                title="Angular Agency Landing"
                                img={"../LandingAgency.webp"}
                                summary="a feature"
                                link="#"
                                github="#"
                                type={t("projects.progress")}
                            />
                        </div>
                        </div>
                    </div>

            </Layout>
            <Footer />
        </main>
    </>
    );
}
