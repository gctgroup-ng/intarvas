"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";

import { Post } from "@/components/blog/posts";
import { ShareDropdown } from "@/components/blog/share";


const PanelContent = ({ post }: { post: Post }) => {
    const { content } = post;

    return (
        <div className="text-gray-700 leading-relaxed space-y-6 m-12">
        {/* Intro */}
        <div className="space-y-3">
            {content.intro.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
            ))}
        </div>

        {/* Challenge Section */}
        {content.challenge && (
            <div>
            <h3 className="text-lg font-bold text-[#0A0F8F] mb-2">
                {content.challenge.heading}
            </h3>
            <div className="space-y-2 mb-4">
                {content.challenge.description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
                ))}
            </div>
            <div className="space-y-4">
                {content.challenge.pain_points.map((point, i) => (
                <div key={i} className="pl-4 border-l-2 border-[#0A0F8F]/20">
                    <p className="font-semibold text-[#1a1a4e]">{point.title}</p>
                    <p className="text-gray-600 text-sm mt-0.5">{point.detail}</p>
                </div>
                ))}
            </div>
            </div>
        )}

        {/* Solution Section */}
        <div>
            <h3 className="text-lg font-bold text-[#0A0F8F] mb-2">
            {content.solution.heading}
            </h3>
            {content.solution.description && (
            <div className="space-y-2 mb-4">
                {content.solution.description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
                ))}
            </div>
            )}

            {content.solution.infrastructure_diagram && (
                <InfrastructureDiagram diagram={content.solution.infrastructure_diagram} />
            )}

            <div className="space-y-5 mt-4">
            {content.solution.pillars.map((pillar) => (
                <div key={pillar.number}>
                <p className="font-semibold text-[#1a1a4e] mb-1">
                    <span className="text-[#0A0F8F] mr-1">{pillar.number}.</span>
                    {pillar.title}
                </p>
                {pillar.description && (
                    <p className="text-gray-600 mb-2">{pillar.description}</p>
                )}
                {pillar.detail && (
                    <div className="space-y-1">
                    {pillar.detail.split("\n\n").map((para, i) => (
                        <p key={i} className="text-gray-600">
                        {para}
                        </p>
                    ))}
                    </div>
                )}
                {pillar.features && (
                    <ul className="mt-2 space-y-1.5">
                    {pillar.features.map((feature, fi) => (
                        <li key={fi} className="flex gap-2 text-gray-600">
                        <span className="text-[#0A0F8F] shrink-0 mt-0.5">•</span>
                        <span>
                            <span className="font-medium text-[#1a1a4e]">{feature.name}:</span>{" "}
                            {feature.detail}
                        </span>
                        </li>
                    ))}
                    </ul>
                )}
                </div>
            ))}
            </div>
        </div>

        {/* Results Section */}
        {content.results && (
            <div>
            <h3 className="text-base font-bold text-[#0A0F8F] mb-2">
                {content.results.heading}
            </h3>
            <p className="mb-4">{content.results.description}</p>
            <div className="space-y-4">
                {content.results.outcomes.map((outcome, i) => (
                <div key={i} className="bg-[#F0F5FF] rounded-lg p-4">
                    <p className="font-semibold text-[#1a1a4e] mb-1">{outcome.title}</p>
                    <p className="text-gray-600">{outcome.detail}</p>
                </div>
                ))}
            </div>
            </div>
        )}

        {/* CTA Section */}
        <div className="border-t border-gray-200 pt-5">
            <h3 className="text-base font-bold text-[#0A0F8F] mb-2">{content.cta.heading}</h3>
            <div className="space-y-2">
            {content.cta.body.split("\n\n").map((para, i) => (
                <p key={i} className=" text-gray-600">
                {para}
                </p>
            ))}
            </div>
        </div>
        </div>
    );
};


const InfrastructureDiagram = ({
    diagram,
    }: {
    diagram: { label: string; outputs: string[] };
    }) => (
    <div className="my-6 bg-[#F0F5FF] border border-[#C6D8FF] rounded-xl p-5 font-mono text-sm text-[#0A0F8F]">
        <div className="font-semibold mb-3 uppercase tracking-widest text-[#0A0F8F]/60">
            Infrastructure
        </div>
        <div className="flex flex-col gap-2">
        {diagram.outputs.map((output, i) => (
            <div key={i} className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0">
                {i === 0 ? "┌──►" : i === diagram.outputs.length - 1 ? "└──►" : ` ┼──► [${diagram.label}]`}
            </span>
            <span className="text-[#1a1a4e] leading-relaxed">{output}</span>
            </div>
        ))}
        </div>
        {/* <div className="mt-3 pt-3 border-t border-[#C6D8FF] text-[#0A0F8F]/50">
        [{diagram.label}]
        </div> */}
    </div>
);

export default function ViewPost({
    post,
}: {
    post: Post;
}) {

    const router = useRouter();
    function closePanel() {
        router.push("/blog");
    }

    return (
        <section className="bg-[#E5F2FF] py-10 px-5 pt-28">
            <div className="max-w-7xl mx-auto bg-white rounded-xl">
                <div className="px-8 pt-8 pb-5">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-[#0A0F8F] font-semibold tracking-widest uppercase">
                            {post.date}
                        </p>
                        <div className="flex items-center gap-3">
                            <ShareDropdown postUrl={'https://intarvas.com/blog/'+post.id} postTitle={post.title} />
                            <button className="text-black flex items-center hover:text-gray-500 transition-colors" onClick={() => closePanel()} title="Close">
                                <X size={20} />
                            </button>
                        </div>
                    </div>
                    <h2 className="md:text-5xl text-2xl my-4 md:mx-16 font-bold text-gray-900" style={{lineHeight: "60px", letterSpacing: "-2%"}}>
                        {post.title}
                    </h2>
                    <div className="mt-3 w-fit  my-4 md:mx-16">
                        <div className="flex space-x-4 gap-3 px-5 py-3" >
                            <p className="text-[#0A0F8F] font-semibold">
                                By {post.author}
                            </p>
                            <div className="w-px h-6 bg-[#0A0F8F]/60"></div>
                            <p className="text-[#0A0F8F] font-semibold">
                                {post.read_time}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 mx-auto" style={{ borderBottom: "2px solid #E5F2FF" }}></div>
                {/* Panel Body */}
                <div className="flex-1 overflow-y-auto px-8 py-6">
                    <div className="w-5/6 md:w-3/4 mx-auto aspect-auto rounded-xl overflow-hidden mb-10">
                        <img src={post.cover_image.src || "/placeholder.svg"} alt={post.cover_image.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <PanelContent post={post} />
                </div>
            </div>
        </section>
    );
}