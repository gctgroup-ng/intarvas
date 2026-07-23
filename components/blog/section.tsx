"use client";

import { useState, useMemo } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import SingleBlog from "./posts";
import { posts } from "@/lib/blog-posts";

const POSTS_PER_PAGE = 4;

const BlogSection = () => {
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return posts;
        return posts.filter(
        (p) =>
            p.title.toLowerCase().includes(q) ||
            p.excerpt.toLowerCase().includes(q)
        );
    }, [query]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));

    const handleSearch = (value: string) => {
        setQuery(value);
        setCurrentPage(1);
    };

    const paginated = filtered.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    const goTo = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Build page number array with ellipsis: e.g. [1, "...", 4, 5, 6, "...", 12]
    const pageNumbers = useMemo(() => {
        if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
        const pages: (number | "...")[] = [1];
        if (currentPage > 3) pages.push("...");
        for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
        ) {
        pages.push(i);
        }
        if (currentPage < totalPages - 2) pages.push("...");
        pages.push(totalPages);
        return pages;
    }, [currentPage, totalPages]);

    return (
        <section className="bg-gray-50 min-h-screen pb-14">
            {/* Header Banner */}
            <div className="max-w-7xl mx-auto font-sans bg-[#E5F2FF] border border-[#C6E2FF] py-11 px-8">
                <h1 className="text-[#0A0F8F] text-7xl font-bold">Blog</h1>
                <p className="text-gray-700 text-xs mt-2">
                Stay updated with the latest trends and insights in the world of
                business communication.
                </p>

                {/* Search Bar */}
                <div className="mt-6 relative max-w-md">
                <Search
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0A0F8F]/40 pointer-events-none"
                />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#C6E2FF] rounded-lg text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0A0F8F]/20 focus:border-[#0A0F8F]/40 transition"
                />
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                {paginated.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-end">
                    {paginated.map((post) => (
                        <SingleBlog key={post.id} post={post} />
                    ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                    <Search size={36} className="text-[#0A0F8F]/20 mb-4" />
                    <p className="text-gray-500 text-sm">
                        No articles found for{" "}
                        <span className="font-semibold text-[#0A0F8F]">"{query}"</span>
                    </p>
                    <button
                        onClick={() => handleSearch("")}
                        className="mt-4 text-xs text-[#0A0F8F] underline underline-offset-2 hover:opacity-70 transition min-h-[44px] px-2"
                    >
                        Clear search
                    </button>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 sm:mt-12 pb-12">

                    {/* Result count — centred on mobile, left on sm+ */}
                    <p className="text-xs text-gray-500 text-center sm:text-left">
                        Showing{" "}
                        <span className="font-medium text-gray-700">
                        {(currentPage - 1) * POSTS_PER_PAGE + 1}–
                        {Math.min(currentPage * POSTS_PER_PAGE, filtered.length)}
                        </span>{" "}
                        of{" "}
                        <span className="font-medium text-gray-700">{filtered.length}</span>{" "}
                        articles
                    </p>

                    {/* Page controls */}
                    <div className="flex items-center gap-1">

                        {/* Prev */}
                        <button
                        onClick={() => goTo(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center gap-1 px-2 sm:px-3 py-2 min-h-[44px] rounded-lg text-xs font-medium text-gray-500 hover:bg-[#E5F2FF] hover:text-[#0A0F8F] disabled:opacity-30 disabled:cursor-not-allowed transition"
                        >
                        <ChevronLeft size={14} />
                        <span className="hidden sm:inline">Prev</span>
                        </button>

                        {/* Page numbers */}
                        {pageNumbers.map((p, i) =>
                        p === "..." ? (
                            <span
                            key={`ellipsis-${i}`}
                            className="px-2 py-2 text-xs text-gray-400 select-none"
                            >
                            …
                            </span>
                        ) : (
                            <button
                            key={p}
                            onClick={() => goTo(p as number)}
                            className={`w-9 h-9 min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 rounded-lg text-xs font-medium transition ${
                                currentPage === p
                                ? "bg-[#0A0F8F] text-white shadow-sm"
                                : "text-gray-600 hover:bg-[#E5F2FF] hover:text-[#0A0F8F]"
                            }`}
                            >
                            {p}
                            </button>
                        )
                        )}

                        {/* Next */}
                        <button
                        onClick={() => goTo(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-1 px-2 sm:px-3 py-2 min-h-[44px] rounded-lg text-xs font-medium text-gray-500 hover:bg-[#E5F2FF] hover:text-[#0A0F8F] disabled:opacity-30 disabled:cursor-not-allowed transition"
                        >
                        <span className="hidden sm:inline">Next</span>
                        <ChevronRight size={14} />
                        </button>

                    </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogSection;