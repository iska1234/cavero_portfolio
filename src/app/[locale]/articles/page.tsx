"use client"

import AnimatedText from "@/components/AnimatedText";
import Article from "@/components/ArticlePage/Article";
import FeaturedArticle from "@/components/ArticlePage/FeaturedArticle";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TransitionEffect from "@/components/TransitionEffect";
import Layout from "@/layout";
import { articlesData } from "@/lib/constants/Articles/article";
import { useTranslations } from "next-intl";
import Head from "next/head";

export default function Articles() {
    const t = useTranslations();
    return (
        <>
        <Head>
            <title>{t("articles.title")}</title>
            <meta name='description' content='any description' />
        </Head>
        <TransitionEffect />
        <main className='w-full flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            <Layout className='min-h-screen flex py-8 flex-col gap-20'>
            <Navbar />
                <AnimatedText text={t("articles.banner")} className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                <ul className='flex md:flex-col gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                {articlesData.slice(0, 2).map((article, index) => (
                        <FeaturedArticle
                        key={index}
                        title={article.title}
                        summary={article.summary}
                        time="11 min read"
                        link={`${t('articleDetails.route')}/${article.id}`}
                        img={article.imgFront}
                    />
                    ))}
                </ul>
                <h2 className="font-bold text-4xl w-full text-center mt-16">{t("articles.subtitle")}</h2>
                <ul className="">
                {articlesData.slice(2).map((article, index) => (
                <Article
                    key={index}
                    title={article.title}
                    date={article.date}
                    link=''
                    //`${t('articleDetails.route')}/${article.id}`
                    img={article.imgFront}
                />
            ))}
                </ul>
            </Layout>
            <Footer />
        </main>
    </>
    )
}