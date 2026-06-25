"use client";

import ViewPost from "@/components/blog/view-post";
import NotFoundSection from "@/components/common/notfound";
import ScrollToTop from "@/components/ScrollToTop";
import { posts } from "@/lib/blog-posts";
import { useParams } from "next/navigation";

export default function Blog() {
    const { id } = useParams();
    const post = posts.find((post) => post.id === id);
    if (!post) {
        return (
            <>
                <NotFoundSection/>
            </>
        )
    }
    return (
        <main className="pt-20">
            <ViewPost key={post.id} post={post} />
            <ScrollToTop />
        </main>
    );
}

