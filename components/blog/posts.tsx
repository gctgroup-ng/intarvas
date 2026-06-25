"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

type Feature = {
    name: string;
    detail: string;
};

type Pillar = {
    number: number;
    title: string;
    detail?: string;
    description?: string;
    features?: Feature[];
};

type PainPoint = {
    title: string;
    detail: string;
};

type Outcome = {
    title: string;
    detail: string;
};

type Post = {
    id: string;
    date: string;
    title: string;
    read_time: string;
    author: string;
    excerpt: string;
    cta_label: string;
    cover_image: {
        src?: string;
        alt: string;
        description: string;
    };
    type: "case_study" | "article";
    content: {
        intro: string;
        challenge?: {
        heading: string;
        description: string;
        pain_points: PainPoint[];
        };
        solution: {
        heading: string;
        description?: string;
        infrastructure_diagram?: {
            label: string;
            outputs: string[];
        };
        pillars: Pillar[];
        };
        results?: {
        heading: string;
        description: string;
        outcomes: Outcome[];
        };
        cta: {
        heading: string;
        body: string;
        };
    };
};

const SingleBlog = ({ post }: { post: Post }) => {
    const router = useRouter();
    const handleNavigate = () => {
        router.push(`/blog/${post.id}`);
    };

    return (
        <>
        {/* Card */}
        <div className="flex flex-col group cursor-pointer" onClick={() => handleNavigate}>
            {/* Cover Image */}
            <div className="w-full aspect-[16/9] rounded-2xl group-hover:rounded-none overflow-hidden">
                <img src={post.cover_image.src || "/placeholder.svg"} alt={post.cover_image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Card Body */}
            <div className="mt-5 flex flex-col gap-3">
                <p className="text-[#0A0F8F] text-xs font-semibold tracking-widest uppercase">
                    {post.date}
                </p>
                <h2 className="text-gray-900 text-xl font-bold leading-snug group-hover:text-[#0A0F8F] transition-colors duration-200">
                    {post.title}
                </h2>
                <button onClick={(e) => { e.stopPropagation(); handleNavigate(); }} className="flex items-center gap-2 text-gray-600 hover:text-[#0A0F8F]/70 text-sm font-semibold w-fit group/cta">
                    {post.cta_label}
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover/cta:translate-x-1"/>
                </button>
            </div>
        </div>
        </>
    );
};

export default SingleBlog;
export type { Post };