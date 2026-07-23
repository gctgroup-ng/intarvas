"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { Post, ContentBlock } from "@/components/blog/type";
import { ShareDropdown } from "@/components/blog/share";

const Paragraphs = ({ paragraphs, className }: { paragraphs: string[]; className?: string }) => (
    <div className="space-y-2">
        {paragraphs.map((para, i) => (
        <p key={i} className={className ?? "text-sm sm:text-base"}>
            {para}
        </p>
        ))}
    </div>
);

const DiagramView = ({ label, outputs }: { label: string; outputs: string[] }) => (
    <div className="my-4 sm:my-6 bg-[#F0F5FF] border border-[#C6D8FF] rounded-xl p-3 sm:p-5 font-mono text-xs sm:text-sm text-[#0A0F8F] overflow-x-auto">
        <div className="font-semibold mb-3 uppercase tracking-widest text-[#0A0F8F]/60 text-xs">
        {label}
        </div>
        <div className="flex flex-col gap-2 min-w-0">
        {outputs.map((output, i) => (
            <div key={i} className="flex items-start gap-2 sm:gap-3">
            <span className="mt-0.5 shrink-0 text-[10px] sm:text-xs">
                {i === 0 ? "┌──►" : i === outputs.length - 1 ? "└──►" : "├──►"}
            </span>
            <span className="text-[#1a1a4e] leading-relaxed break-words min-w-0">{output}</span>
            </div>
        ))}
        </div>
    </div>
);

const BlockView = ({ block }: { block: ContentBlock }) => {
    switch (block.type) {
        case "prose":
        return (
            <div>
            {block.heading && (
                <h3 className="text-base sm:text-lg font-bold text-[#0A0F8F] mb-2">{block.heading}</h3>
            )}
            <Paragraphs paragraphs={block.paragraphs} />
            </div>
        );

        case "diagram":
        return <DiagramView label={block.label} outputs={block.outputs} />;

        case "item_group": {
        const { heading, paragraphs, diagram, numbered, layout, items } = block;
        return (
            <div>
            {heading && <h3 className="text-base sm:text-lg font-bold text-[#0A0F8F] mb-2">{heading}</h3>}
            {paragraphs && <div className="mb-4"><Paragraphs paragraphs={paragraphs} /></div>}
            {diagram && <DiagramView label={diagram.label} outputs={diagram.outputs} />}

            {layout === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
                {items.map((item, i) => (
                    <div key={i} className="bg-[#F0F5FF] rounded-lg p-3 sm:p-4">
                    <p className="font-semibold text-[#1a1a4e] mb-1 text-sm sm:text-base">{item.title}</p>
                    {item.detail?.map((d, di) => (
                        <p key={di} className="text-gray-600 text-xs sm:text-sm">{d}</p>
                    ))}
                    </div>
                ))}
                </div>
            ) : (
                <div className="space-y-5 mt-4">
                {items.map((item, i) => (
                    <div key={i} className={numbered ? undefined : "pl-3 sm:pl-4 border-l-2 border-[#0A0F8F]/20"}>
                    <p className="font-semibold text-[#1a1a4e] mb-1 text-sm sm:text-base">
                        {numbered && <span className="text-[#0A0F8F] mr-1">{i + 1}.</span>}
                        {item.title}
                    </p>
                    {item.description && (
                        <p className="text-gray-600 mb-2 text-sm sm:text-base">{item.description}</p>
                    )}
                    {item.detail?.map((d, di) => (
                        <p key={di} className="text-gray-600 text-sm sm:text-base">{d}</p>
                    ))}
                    {item.features && (
                        <ul className="mt-2 space-y-1.5">
                        {item.features.map((feature, fi) => (
                            <li key={fi} className="flex gap-2 text-gray-600 text-sm sm:text-base">
                            <span className="text-[#0A0F8F] shrink-0 mt-0.5">•</span>
                            <span>
                                <span className="font-medium text-[#1a1a4e]">{feature.name}:</span> {feature.detail}
                            </span>
                            </li>
                        ))}
                        </ul>
                    )}
                    </div>
                ))}
                </div>
            )}
            </div>
        );
        }

        case "cta":
        return (
            <div className="border-t border-gray-200 pt-5">
            {block.heading && (
                <h3 className="text-sm sm:text-base font-bold text-[#0A0F8F] mb-2">{block.heading}</h3>
            )}
            <Paragraphs paragraphs={block.paragraphs} className="text-gray-600 text-sm sm:text-base" />
            </div>
        );

        default:
        // Exhaustiveness check: TS will flag this if a new block type is added
        // to blog-types.ts without a case here.
        return null;
    }
};

const PanelContent = ({ post }: { post: Post }) => {
    return (
        <div className="text-gray-700 leading-relaxed space-y-6 px-4 sm:px-8 md:px-12 py-6">
        <Paragraphs paragraphs={post.content.intro} />
        {post.content.blocks.map((block, i) => (
            <BlockView key={i} block={block} />
        ))}
        </div>
    );
};

export default function ViewPost({ post }: { post: Post }) {
    const router = useRouter();
    function closePanel() {
        router.push("/blog");
    }

    return (
        <section className="bg-[#E5F2FF] min-h-screen py-6 sm:py-10 px-3 sm:px-5 pt-20 sm:pt-28">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm">
            {/* Header */}
            <div className="px-4 sm:px-8 pt-5 sm:pt-8 pb-4 sm:pb-5">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
                <p className="text-[#0A0F8F] font-semibold tracking-widest uppercase text-xs sm:text-sm">
                {post.date}
                </p>
                <div className="flex items-center gap-2 sm:gap-3">
                <ShareDropdown postUrl={"https://intarvas.com/blog/" + post.id} postTitle={post.title} />
                <button
                    className="text-black flex items-center hover:text-gray-500 transition-colors p-1"
                    onClick={() => closePanel()}
                    title="Close"
                >
                    <X size={20} />
                </button>
                </div>
            </div>

            <h2
                className="text-xl sm:text-3xl md:text-5xl my-3 sm:my-4 sm:mx-8 md:mx-16 font-bold text-gray-900"
                style={{ lineHeight: "1.2", letterSpacing: "-0.02em" }}
            >
                {post.title}
            </h2>

            <div className="mt-2 sm:mt-3 w-fit my-2 sm:my-4 sm:mx-8 md:mx-16">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 sm:px-5 py-2 sm:py-3">
                <p className="text-[#0A0F8F] font-semibold text-xs sm:text-sm">By {post.author}</p>
                <div className="w-px h-4 sm:h-6 bg-[#0A0F8F]/60"></div>
                <p className="text-[#0A0F8F] font-semibold text-xs sm:text-sm">{post.read_time}</p>
                </div>
            </div>
            </div>

            <div className="w-11/12 mx-auto" style={{ borderBottom: "2px solid #E5F2FF" }}></div>

            {/* Panel Body */}
            <div className="flex-1 overflow-y-auto px-3 sm:px-8 py-4 sm:py-6">
            <div className="w-full sm:w-5/6 md:w-3/4 mx-auto aspect-video rounded-xl overflow-hidden mb-6 sm:mb-10">
                <img
                src={post.cover_image.src || "/placeholder.svg"}
                alt={post.cover_image.alt}
                className="w-full h-full object-cover"
                />
            </div>

            <PanelContent post={post} />
            </div>
        </div>
        </section>
    );
}