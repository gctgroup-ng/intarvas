import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const APPS = [
    // PBX Features
    { icon: "/correctpuzlleicon.svg", name: "Virtual Extensions", href: "/services/pbx", group: "Intarvas PBX" },
    { icon: "/callrecordicon.svg", name: "Call Recording", href: "/services/pbx", group: "Intarvas PBX" },
    { icon: "/analysicreporticon.svg", name: "Analytics & Reporting", href: "/services/pbx", group: "Intarvas PBX" },
    { icon: "/voicetoemailicon.svg", name: "Voicemail-to-Email", href: "/services/pbx", group: "Intarvas PBX" },
    { icon: "/callroutingicon.svg", name: "Call Forwarding & Routing", href: "/services/pbx", group: "Intarvas PBX" },
    { icon: "/seamlessscalabilityicon.svg", name: "Seamless Scalability", href: "/services/pbx", group: "Intarvas PBX" },
    // Bulk Messaging
    { icon: "/bulksmsicon.svg", name: "Bulk SMS Delivery", href: "/services/bulk-messaging", group: "Bulk Messaging" },
    { icon: "/ussdservicesicon.svg", name: "USSD Services", href: "/services/bulk-messaging", group: "Bulk Messaging" },
    { icon: "/a2pmessagingicon.svg", name: "A2P Messaging APIs", href: "/services/bulk-messaging", group: "Bulk Messaging" },
    { icon: "/twowaymessagingicon.svg", name: "Two-way Messaging", href: "/services/bulk-messaging", group: "Bulk Messaging" },
    { icon: "/realtimedeliveryicon.svg", name: "Real-Time Delivery Reports", href: "/services/bulk-messaging", group: "Bulk Messaging" },
    { icon: "/customSIDicon.svg", name: "Custom Sender IDs", href: "/services/bulk-messaging", group: "Bulk Messaging" },
    // All-in-One
    { icon: "/headphoneicon.svg", name: "Unified Omnichannel Support", href: "/services/all-in-one", group: "All-in-One" },
    { icon: "/smartcrmicon.svg", name: "Smart CRM", href: "/services/all-in-one", group: "All-in-One" },
    { icon: "/ticketingautomationicon.svg", name: "Ticketing & Automation", href: "/services/all-in-one", group: "All-in-One" },
    { icon: "/securityicon.svg", name: "Security & Compliance", href: "/services/all-in-one", group: "All-in-One" },
    { icon: "/customworkflows.svg", name: "Custom Workflows", href: "/services/all-in-one", group: "All-in-One" },
    { icon: "/aianalyticsicon.svg", name: "AI-powered Analytics", href: "/services/all-in-one", group: "All-in-One" },
    // Numbers
    { icon: "/memorablevanity.svg", name: "Vanity Numbers (0700)", href: "/services/numbers", group: "Smart Numbers" },
    { icon: "/tollfreeicon.svg", name: "Toll-Free Numbers (0800)", href: "/services/numbers", group: "Smart Numbers" },
    { icon: "/enhancedtrusticon.svg", name: "Enhanced Customer Trust", href: "/services/numbers", group: "Smart Numbers" },
    { icon: "/callroutingicon.svg", name: "Call Routing Options", href: "/services/numbers", group: "Smart Numbers" },
    { icon: "/scalableicon.svg", name: "Scalable for All Businesses", href: "/services/numbers", group: "Smart Numbers" },
    { icon: "/customeraccessibilityicon.svg", name: "Customer Accessibility", href: "/services/numbers", group: "Smart Numbers" },
    //  invax
    { icon: "/invas-whatsapp.svg", name: "WhatsApp Business", href: "/services/invas", group: "Invas" },
    { icon: "/invas-template.svg", name: "Create Templates", href: "/services/invas", group: "Invas" },
    { icon: "/invas-chat-advance.svg", name: "Advanced Chatting", href: "/services/invas", group: "Invas" },
    { icon: "/invas-campaign.svg", name: "Launch Campaigns", href: "/services/invas", group: "Invas" },
    { icon: "/invas-phonebook.svg", name: "Create Phonebooks", href: "/services/invas", group: "Invas" },
    { icon: "/invas-chatbot.svg", name: "Chatbot Automation", href: "/services/invas", group: "Invas" },
];

const GROUP_COLORS = {
    "Intarvas PBX": { accent: "#0A0F8F", light: "#EBF4FF" },
    "Bulk Messaging": { accent: "#00B87A", light: "#E6F9F3" },
    "All-in-One": { accent: "#8B5CF6", light: "#F3EEFF" },
    "Smart Numbers": { accent: "#F97316", light: "#FFF3EB" },
    "Invas": { accent: "#353ca1ff", light: "#eaeafbff" },
};

// Group apps
const grouped = APPS.reduce((acc: Record<string, typeof APPS[0][]>, app) => {
    if (!acc[app.group]) acc[app.group] = [];
    acc[app.group].push(app);
    return acc;
}, {} as Record<string, typeof APPS[0][]>);

export default function Services() {

    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(imageRef.current, {
                opacity: 0,
                y: 60,
                duration: 1,
                delay: 0.5,
                ease: "power3.out",
            });
        }, imageRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={imageRef} className="relative z-10 flex justify-center px-4 pb-16 pt-10 mt-auto bg-white">
            <div className="w-full max-w-5xl mt-10 overflow-hidden">
                {/* Header pill */}
                <p className="text-[16px] text-[#0A0F8F] text-center font-semibold tracking-wider bg-[#DFE0F8] p-2 max-w-sm mx-auto rounded-full mb-10">
                    Explore our products &amp; services
                    {/* → */}
                </p>

                {/* Grouped sections */}
                <div className="mx-3 space-y-5 my-3">
                    {Object.entries(grouped).map(([groupName, apps]) => {
                        const { accent, light } = GROUP_COLORS[groupName];
                        return (
                            <div key={groupName}>
                                {/* Group label */}
                                <div className="flex items-center gap-2 mb-2 px-1">
                                    <span
                                        className="text-[13px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full"
                                        style={{ color: accent, backgroundColor: light }}
                                    >
                                        {groupName}
                                    </span>
                                    <div className="flex-1 h-px" style={{ backgroundColor: light }} />
                                </div>

                                {/* 6-column grid per group */}
                                <div className="grid grid-cols-3 sm:grid-cols-6 gap-1">
                                    {apps.map((app) => (
                                        <Link key={app.name} href={app.href}
                                            className="group flex flex-col items-center justify-start py-4 px-2 rounded-xl transition-all duration-200 hover:bg-white hover:shadow-md"
                                        >
                                            {/* Icon container */}
                                            <div className="flex items-center justify-center w-14 h-14 rounded-2xl mb-2.5 transition-all duration-200 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:shadow-lg" style={{ backgroundColor: light }}>
                                                <img src={app.icon} alt="" style={{ width: "28px", height: "28px" }} />
                                            </div>

                                            {/* Label */}
                                            <span
                                                className="text-[13px] font-medium text-center leading-tight text-gray-600 transition-colors duration-200 group-hover:font-semibold group-hover:text-[color:var(--hover-color)]"
                                                style={{ "--hover-color": accent } as React.CSSProperties}
                                            >
                                                {app.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}