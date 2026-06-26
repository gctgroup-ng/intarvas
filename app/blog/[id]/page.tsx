"use client";

import { useParams } from "next/navigation";
import ViewPost from "@/components/blog/view-post";
import PostNotFound from "@/components/blog/post-not-found";
import ScrollToTop from "@/components/ScrollToTop";
import { posts } from "@/lib/blog-posts";

export default function Blog() {
    const params = useParams();

    const id = params?.id as string | undefined;

    if (!id) {
        return null;
    }

    const post = posts.find((post) => post.id === id);

    if (!post) {
        return <PostNotFound />;
    }

    return (
        <main className="pt-20">
        <ViewPost key={post.id} post={post} />
        <ScrollToTop />
        </main>
    );
}