export interface Post {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    date: string;
}