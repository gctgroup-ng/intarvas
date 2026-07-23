
export type Post = {
    id: string;
    date: string;
    author: string;
    read_time: string;
    title: string;
    excerpt: string;
    cta_label: string;
    cover_image: {
        src: string;
        alt: string;
        description: string;
    };
    type: "case_study" | "article";
    content: PostContent;
};

export type PostContent = {
    intro: string[];
    blocks: ContentBlock[];
};

export type ContentBlock =
    | ProseBlock
    | ItemGroupBlock
    | DiagramBlock
    | CtaBlock;

export type ProseBlock = {
    type: "prose";
    heading?: string;
    paragraphs: string[];
};

export type DiagramBlock = {
    type: "diagram";
    label: string;
    outputs: string[];
};

export type ItemGroupBlock = {
    type: "item_group";
    heading?: string;
    paragraphs?: string[];
    diagram?: { label: string; outputs: string[] };
    numbered: boolean;
    layout: "list" | "grid";
    items: ItemGroupEntry[];
};

export type ItemGroupEntry = {
    title: string;
    description?: string;
    detail?: string[];
    features?: { name: string; detail: string }[];
};

export type CtaBlock = {
    type: "cta";
    heading?: string;
    paragraphs: string[];
};