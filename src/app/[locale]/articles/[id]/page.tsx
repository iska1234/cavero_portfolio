"use client"
import AnimatedText from "@/components/AnimatedText";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TransitionEffect from "@/components/TransitionEffect";
import Layout from "@/layout";
import { articlesData } from "@/lib/constants/Articles/article";
import { useTranslations } from "next-intl";
import Head from "next/head";
import { useParams } from "next/navigation";

export default function ArticleDetailsPage() {


    const{id} = useParams()
    const t = useTranslations();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const article = articlesData.find((article) => article.id === parseInt(id?.toString() || ''));

    return (
        <>
            <Head>
                <title>{t(`articleDetails.title_article${article?.id}`)}</title>
                <meta name='description' content='Article details page' />
            </Head>
            <TransitionEffect />
            <main className={`w-full flex flex-col items-center justify-center overflow-hidden text-dark dark:text-light`}>
                <Layout className='min-h-screen flex py-8 flex-col gap-20'>
                <Navbar />
                    <AnimatedText text={t(`articleDetails.title_article${article?.id}`)} className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className="w-full max-w-4xl px-8 sm:px-4 py-8 mx-auto text-xl font-serif ">
                        <div id="article-content">
                            {article?.imgFront && (
                                <img className='mx-auto mb-8 rounded-md border-2 border-dark dark:border-light' src={article.imgFront} width={1200} height={500} alt="alt" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
                            )}
                            {article?.summary.split('\n').map((paragraph, index) => (
                                <p key={index} className="mt-4 mb-2 text-justify font-light">
                                    {paragraph}
                                    <br />
                                </p>
                            ))}
                            {article?.content.some(section => section.title.trim() !== '') && (
                                <div className="mt-8">
                                    <h2 className="text-2xl font-bold mb-4">CONTENTS</h2>
                                    <ol className="list-decimal pl-4 italic flex flex-col gap-y-6">
                                        {article.content.map((section, index) => (
                                            section.title.trim() !== '' && <li key={index}>{section.title}</li>
                                        ))}
                                    </ol>
                                </div>
                            )}

                            <div className="mt-8">
                                {article?.content.map((section, index) => (
                                    <div key={index} className="mb-8">
                                        <h2 className="text-3xl font-bold my-8">{section.title}</h2>
                                        {section.img && (
                                            <img className='mx-auto mb-8 shadow-xl rounded-md border-2 border-dark dark:border-light' src={section.img} width={1200} height={500} alt="alt" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
                                        )}
                                       
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Layout>
                <Footer />
            </main>
            <button onClick={scrollToTop} className="fixed bottom-20 right-48  md:right-2 bg-primary dark:bg-primaryDark dark:text-dark text-light px-4 py-4 md:py-1 md:px-1 items-center justify-center rounded-full shadow-md focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </>
    )
}