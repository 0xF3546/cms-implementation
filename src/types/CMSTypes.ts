export type CMSPageData = {
    title?: string;
    images?: Array<ImageBlockData>;
    textBlocks?: Array<TextBlockData>;
};

export type ImageBlockData = {
    id?: string;
    imageUrl?: string;
    altText?: string;
    description?: (string) | null;
};

export type TextBlockData = {
    id?: string;
    content?: string;
};