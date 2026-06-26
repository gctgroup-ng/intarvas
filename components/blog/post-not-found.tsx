"use client";

import Link from "next/link";
import { ArrowLeft, FileSearch } from "lucide-react";

const PostNotFound = () => {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">

        {/* Body */}
        <div className="flex-1 flex items-center justify-center px-8 py-24">
            <div className="flex flex-col items-center text-center max-w-md">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-[#E5F2FF] border border-[#C6E2FF] flex items-center justify-center mb-6">
                <FileSearch size={36} className="text-[#0A0F8F]/50" />
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Article not found
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
                The article you&apos;re looking for doesn&apos;t exist or may have
                been moved. Head back to the blog to explore our latest insights.
            </p>

            {/* CTA */}
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-[#0A0F8F] text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#0A0F8F]/90 transition"
            >
                <ArrowLeft size={16} />
                Back to Blog
            </Link>
            </div>
        </div>
        </main>
    );
};

export default PostNotFound;