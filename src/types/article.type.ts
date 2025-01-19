export interface Article{
    id: number;
    title: string;
    imgFront: string;
    date: string;
    summary: string;
    content: ArticleContent[];
}

export interface ArticleContent{
    title: string;
    img: string;
    content_0?: string;
    subtitle_1?: string;
    content_1?: string;
    subtitle_2?: string;
    content_2?: string;
    subtitle_3?: string;
    content_3?: string;
    subtitle_4?: string;
    content_4?: string;
    subtitle_5?: string;
    content_5?: string;
    subtitle_6?: string;
    content_6?: string;
    subtitle_7?: string;
    content_7?: string;
    subtitle_8?: string;
    content_9?: string;
    subtitle_10?: string;
    content_10?: string;
}