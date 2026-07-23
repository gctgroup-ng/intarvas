"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Post } from "@/components/blog/type"

const SingleBlog = ({ post }: { post: Post }) => {
    const router = useRouter();
    const handleNavigate = () => {
        router.push(`/blog/${post.id}`);
    };

    return (
        <>
        {/* Card */}
        <div className="flex flex-col group cursor-pointer" onClick={handleNavigate} >
            {/* Cover Image */}
            <div className="w-full aspect-[16/9] rounded-2xl sm:group-hover:rounded-none overflow-hidden">
                <img src={post.cover_image.src || "/placeholder.svg"} alt={post.cover_image.alt} className="w-full h-full object-cover transition-transform duration-500 sm:group-hover:scale-110"/>
            </div>

            {/* Card Body */}
            <div className="mt-4 sm:mt-5 flex flex-col gap-2 sm:gap-3">
                <p className="text-[#0A0F8F] text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
                {post.date}
                </p>
            
                <h2 className="text-gray-900 text-lg sm:text-xl font-bold leading-snug sm:group-hover:text-[#0A0F8F] transition-colors duration-200">
                {post.title}
                </h2>
            
                <button
                onClick={(e) => {
                    e.stopPropagation(); // prevent double-fire from parent onClick
                    handleNavigate();
                }}
                className="flex items-center gap-2 text-gray-600 hover:text-[#0A0F8F]/70 text-sm font-semibold w-fit group/cta min-h-[44px] sm:min-h-0"
                >
                {post.cta_label}
                <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover/cta:translate-x-1"
                />
                </button>
            </div>
        </div>
        </>
    );
};

export default SingleBlog;
export type { Post };