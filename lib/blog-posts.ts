import { Post } from "@/components/blog/type";

export const posts: Post[] = [
    {
        id: "vehiculars-cloud-pbx",
        date: "24 June 2026",
        author: "IntarvAS Marketing Team",
        read_time: "6 min read",
        title:
        "The Digital Garage: How Vehiculars.ng Powers a Full-Range Automotive Service with Cloud PBX Infrastructure",
        excerpt:
        "For a high-velocity B2C/B2B Service Provider like Vehicular, a mobile application means nothing if customers get a busy signal during an emergency. A quick and apt response is a core part of the brand's value and business model. IntarvAS exists to help customer-facing brands like Vehiculars live up to expectations by providing a PBX telecommunication infrastructure that enables them to serve and satisfy as many customers as possible.",
        cta_label: "Read full case study",
        cover_image: {
        src: "/image/pbx/pbxHeroImg.png",
        alt: "Cloud PBX call history dashboard",
        description:
            "Split view of a mobile app showing total call stats and a tablet showing call history with employee names, durations, and timestamps",
        },
        type: "case_study",
        content: {
        intro: [
            "When Vehiculars set out to revolutionize the Nigerian automotive maintenance and documentation landscape, they faced the classic dilemma of the logistics age: how to manage a massive influx of daily customer interactions without dealing with poor network connections, missed calls and low completion rate. The answer lay in a strategic partnership with IntarvAS, a premium cloud PBX provider for modern businesses.",
            "By deploying the comprehensive IntarvAS Cloud PBX Infrastructure, Vehiculars has transformed its operational backend into a scalable, highly responsive system that untangles complex logistics from traditional communication bottlenecks.",
        ],
        blocks: [
            {
            type: "prose",
            heading: "The Challenge: Managing High-Friction Mobility Services",
            paragraphs: [
                "Vehiculars operates as a comprehensive digital department of motor vehicles (DMV), roadside rescue assistant, and auto-financing portal all in one. On any given Tuesday, their backend agents are simultaneously processing vehicle registration renewals, routing emergency tow trucks to stranded drivers, clearing car parts at the port, and qualifying leads for car loans.",
                "As the platform scaled to thousands of daily active users across major hubs, legacy communication setups created severe operational blind spots:",
            ],
            },
            {
            type: "item_group",
            numbered: false,
            layout: "list",
            items: [
                {
                title: "Inbound Calls Not Connecting",
                detail: [
                    "Legacy SIM cards and rigid mobile networks frequently crashed or maxed out during peak rush hours. This can result in immediate network rejections, completely blocking drivers from reaching emergency dispatchers.",
                ],
                },
                {
                title: "Low Call Completion Rates",
                detail: [
                    "Because massive spikes in daily traffic constantly overloaded the hardware, the platform's connection success percentage reduced significantly. Dropped connections and failed attempts meant a stranded motorist was left vulnerable on a highway.",
                ],
                },
                {
                title: "Context Blindness Across Silos",
                detail: [
                    "Customer inquiries, car document uploads, and service updates were scattered across separate mobile devices and personal WhatsApp numbers. Frontline support agents had no unified history of user interactions, slowing down critical delivery handoffs.",
                ],
                },
                {
                title: "Inflexible Routing Barriers",
                detail: [
                    "Connecting a client instantly to the specific department they needed — such as matching a breakdown emergency directly with a roadside dispatch unit — was impossible without manual transferring, creating long wait times.",
                ],
                },
                {
                title: "Loss of Lead Visibility",
                detail: [
                    "High-value auto-financing requests and corporate fleet contracts routinely slipped through the cracks because there was no centralized system to record call histories or track follow-up performance.",
                ],
                },
            ],
            },
            {
            type: "prose",
            heading: "The Solution: A Unified, Intelligent Cloud Telecom Engine",
            paragraphs: [
                "IntarvAS stepped in not merely as a service vendor, but as a partner, engineering a custom cloud telecommunications framework tailored for high-velocity logistics and digital services.",
                "The transformation was built on five core operational pillars:",
            ],
            },
            {
            type: "item_group",
            numbered: true,
            layout: "list",
            diagram: {
                label: "IntarvAS Engine",
                outputs: [
                "Cloud PBX Phone Lines (Virtual Numbers, Recording, Live Coaching)",
                "WhatsApp Automation (Automated Bots & Shared Team Inboxes)",
                "High-Speed Text Alerts (Instant OTPs & Auto-Reminders)",
                ],
            },
            items: [
                {
                title: "Cloud PBX with Device-Agnostic Mobility",
                detail: [
                    "At the heart of the technical overhaul is the IntarvAS Cloud PBX system. This technology completely freed the company's communication infrastructure from localized desk phones or single SIM hardware constraints. The entire phone network was digitized and hosted in a secure cloud environment.",
                    "Whether an agent is working out of a central corporate office, tracking documentation at a government registry, or managing field operations on a smartphone, the system provides an identical, professional interface. A single business extension ring path lives simultaneously across a mobile phone, a PC dashboard, and a web browser.",
                ],
                },
                {
                title: "Interactive Voice Response (IVR) & Intelligent Queues",
                detail: [
                    "To eliminate long wait times and messy call transfers, Vehiculars adopted an advanced, automated Interactive Voice Response (IVR) greeting.",
                    'When a user calls the business hotline, they are greeted by a crisp, automated audio directory: "Press 1 for Roadside Assistance; Press 2 for Vehicle Registration & Licenses; Press 3 for Auto Financing."',
                    "The system dynamically measures the type of inquiry and routes the caller straight to the exact department equipped to handle it. While the call rings through, customized queue music or informative audio guides keep the client engaged.",
                ],
                },
                {
                title: "Integrated WhatsApp Business API",
                detail: [
                    "Recognizing that WhatsApp is the primary transactional channel for document collection in the region, IntarvAS integrated the official WhatsApp Business API directly into Vehiculars' backend. This enabled the deployment of intelligent IVR workflows over WhatsApp.",
                    "Automated, conversational AI bots walk users through routine tasks 24/7, such as selecting a pricing tier, submitting car model specifications, or scheduling vehicle inspection dates. For complex logistics, the bot seamlessly hands off the entire session log to a live relationship manager without losing any context.",
                ],
                },
                {
                title: "Automated High-Throughput SMS Alerts",
                detail: [
                    "Vehicle document renewals are deeply time-sensitive, governed by rigid annual expiration dates. IntarvAS fortified the platform's database with a heavy-duty, outbound enterprise SMS gateway. This setup auto-triggers personalized notifications straight to a user's phone 30 days before their vehicle papers expire, allowing them to initiate renewals instantly. It also manages critical transactional touchpoints, delivering real-time dispatch tracking links and secure One-Time Passwords (OTPs) for auto-financing users.",
                ],
                },
                {
                title: "Centralized Compliance and Analytics Vault",
                detail: [
                    "Every interaction across the infrastructure is logged automatically. The IntarvAS platform records call histories, monitors individual agent completion rates, and stores full, tamper-proof audio recordings of client interactions. This gives management an unedited view of customer support performance while providing an archival safety net for resolving disputes regarding insurance documentation or financing agreements.",
                ],
                },
            ],
            },
            {
            type: "prose",
            heading: "The Result: Maximized Call Completion and Automated Growth",
            paragraphs: [
                "Transitioning to the IntarvAS cloud-native ecosystem unlocked the elasticity needed to scale operations flawlessly, leading to an immediate turnaround in daily efficiency metrics.",
            ],
            },
            {
            type: "item_group",
            numbered: false,
            layout: "grid",
            items: [
                {
                title: "Elimination of Dropped Calls",
                detail: [
                    "By implementing software-defined call channels, Vehiculars successfully eradicated the busy signals that previously turned customers away. The network's Call Completion Rate stabilized at an all-time high. Even during sudden seasonal registration surges, the system scales its concurrent virtual paths automatically to ensure every driver is answered.",
                ],
                },
                {
                title: "Streamlined Logistics Handoffs",
                detail: [
                    "The dangerous gap of context blindness vanished. Frontline agents no longer operate in disconnected informational silos. Because the Cloud PBX tracks and synchronizes the user's history across voice calls and WhatsApp, support staff know exactly what a client needs the moment they pick up the line. Average handle times for emergency roadside dispatches dropped significantly.",
                ],
                },
                {
                title: "Frictionless Customer Accessibility",
                detail: [
                    "By centralizing its multi-channel offerings under one unified cloud network, the structural barriers to reaching the brand disappeared. The automated WhatsApp bot handles up to 70% of routine data collection workflows. This hybrid approach successfully pairs automated, high-volume digital workflows with hyper-personalized voice care for urgent emergencies.",
                ],
                },
            ],
            },
            {
            type: "cta",
            heading: "Build Your Scalable Infrastructure Today",
            paragraphs: [
                "The success story of Vehiculars proves that modern operational growth is tied directly to communication agility. If your customer-facing business is ready to ditch legacy hardware limitations, fix plummeting call completion rates, and maximize team efficiency, you need a cloud telecom partner that understands enterprise scale.",
                "Let IntarvAS design a custom cloud infrastructure for your business. Contact the IntarvAS enterprise team today to schedule a consultation and take your operations into the future.",
            ],
            },
        ],
        },
    },

    {
        id: "nigerian-businesses-poor-communication",
        date: "23 June 2026",
        author: "IntarvAS Technical Team",
        read_time: "5 min read",
        title: "How Nigerian Businesses Lose Customers Through Poor Communication Systems",
        excerpt:
        "Customer communication has gradually become a top growth and sales strategy for small businesses in Nigeria. Yet, many Nigerian businesses still operate with fragmented communication systems that create confusion, missed opportunities, and extremely poor customer experiences.",
        cta_label: "Read full case study",
        cover_image: {
        src: "/invas/invas-about-us.jpg",
        alt: "Person using a tablet to interact with a call centre agent dashboard",
        description:
            "Close-up of hands navigating a tablet screen showing a call centre agent management interface with status indicators and agent cards",
        },
        type: "article",
        content: {
        intro: [
            "Customer communication has gradually become a top growth and sales strategy for small businesses in Nigeria. Yet, many Nigerian businesses still operate with fragmented communication systems that create confusion, missed opportunities, and extremely poor customer experiences.",
            "Imagine this: a customer sends a message on Instagram and is required to contact the business on WhatsApp before they can get a response. They head over to WhatsApp after searching for the exact contact line for 45 minutes, only to be met with a non-empathic response 5 hours later.",
            "Not only have you lost that customer, but you also successfully gained a bad review — if not a callout on TikTok for bad customer service. Another customer calls a business line multiple times but never gets connected to the right department. A sales lead gets lost because messages are spread across different phones and social media platforms.",
            "These situations happen every day in Nigeria, subsequently leading to poor brand image, declining customer trust, lower conversion rates, and ultimately revenue depletion.",
            "The reality is simple: modern customers expect fast, organized, and reliable communication. Businesses that fail to provide it are already losing market share to competitors with better communication systems.",
        ],
        blocks: [
            {
            type: "prose",
            heading: "Engineering a Software-Defined Communication Infrastructure with IntarvAS",
            paragraphs: [
                "To eliminate these structural communication gaps and vulnerabilities, high-growth businesses are abandoning legacy telecom networks for IntarvAS — a premium, cloud-based telecommunications platform that pulls your phone lines, WhatsApp, and SMS tracking into one central, easy-to-use dashboard.",
            ],
            },
            {
            type: "item_group",
            numbered: true,
            layout: "list",
            diagram: {
                label: "IntarvAS Engine",
                outputs: [
                "Cloud PBX Telephony (Virtual Numbers, Call Recording, Whispering)",
                "INVAS (Intelligent WhatsApp Business API Workflows)",
                "High-Throughput Transactional SMS Gateway",
                ],
            },
            items: [
                {
                title: "Enterprise Cloud PBX & Borderless Mobility",
                description:
                    "The central pillar of IntarvAS infrastructure is the complete digitalization of the corporate phone network.",
                features: [
                    {
                    name: "Virtual Extensions",
                    detail: "Connects remote team members under one professional business phone directory seamlessly.",
                    },
                    {
                    name: "Call Recording",
                    detail: "Automatically archives entire conversation audio logs for training and dispute resolution.",
                    },
                    {
                    name: "Analytics & Reporting",
                    detail: "Tracks individual agent performance metrics and overall call completion rates daily.",
                    },
                    {
                    name: "Voicemail-to-Email",
                    detail: "Converts missed client audio messages into text notes sent directly to inboxes.",
                    },
                    {
                    name: "Call Forwarding & Routing",
                    detail: "Redirects incoming calls dynamically to available agents to eliminate long waits.",
                    },
                    {
                    name: "Seamless Scalability",
                    detail: "Expands phone line capacities instantly to accommodate high business traffic surges.",
                    },
                ],
                },
                {
                title: "Specialized Numbering Architecture (Smart Numbers)",
                description:
                    "IntarvAS provides businesses with strategic corporate identities through customized, high-capacity numbering profiles.",
                features: [
                    {
                    name: "Vanity Numbers (0700)",
                    detail:
                        "Creates memorable, branded phone words (e.g. 0700PROVIDUS) to boost marketing recall and customer inbound calls.",
                    },
                    {
                    name: "Toll-Free Numbers (0800)",
                    detail: "Allows clients to call your business completely free, eliminating pricing barriers for support.",
                    },
                    {
                    name: "Enhanced Customer Trust",
                    detail: "Displays a verified corporate telecom presence that instantly builds brand credibility over personal SIMs.",
                    },
                    {
                    name: "Call Routing Options",
                    detail: "Directs incoming calls automatically to the right staff members based on custom rules.",
                    },
                    {
                    name: "Scalable for All Businesses",
                    detail: "Adjusts line capacity effortlessly to handle growing call volumes as your operations expand.",
                    },
                    {
                    name: "Customer Accessibility",
                    detail: "Simplifies how clients reach your platform, ensuring your brand stays constantly open and available.",
                    },
                ],
                },
                {
                title: "Smart IVR Directories & Intelligent Queueing",
                description:
                    "To optimize inbound traffic flows and eliminate manual transfers, IntarvAS deploys advanced Interactive Voice Response (IVR) architectures.",
                features: [
                    {
                    name: "Automated Audio Directory",
                    detail: "Greets customers with a crisp, professional automated greeting.",
                    },
                    {
                    name: "Traffic Segmentation",
                    detail: 'Instantly segments traffic (e.g. "Press 1 for Sales; Press 2 for Support").',
                    },
                    {
                    name: "Smart Routing",
                    detail: "Routes the caller straight to the designated department automatically.",
                    },
                ],
                },
                {
                title: "Advanced Operational Oversight: Call Recording & Whispering",
                description:
                    "IntarvAS provides management teams with data-driven visibility into customer support and sales performance through powerful quality assurance features.",
                features: [
                    {
                    name: "Tamper-Proof Call Recording",
                    detail:
                        "Every voice interaction is automatically archived in a secure cloud vault for compliance, audit safety, and dispute resolution.",
                    },
                    {
                    name: "Real-Time Call Whispering",
                    detail:
                        "Supervisors can silently listen to live calls and speak directly to an agent's earpiece to provide real-time coaching, completely hidden from the customer.",
                    },
                ],
                },
                {
                title: "INVAS: Automated WhatsApp Business API Workflows",
                description:
                    "Recognizing that WhatsApp is the dominant transactional layer for commerce in Nigeria, IntarvAS embeds the official WhatsApp Business API deep into your business infrastructure, transforming your WhatsApp line into a robust customer service engine.",
                features: [
                    {
                    name: "WhatsApp Call Center",
                    detail: "Centralizes your entire team onto a single corporate WhatsApp profile for simultaneous customer chatting.",
                    },
                    {
                    name: "Chatbot Automation",
                    detail: "Deploys intelligent, 24/7 conversational bots to answer FAQs and pre-qualify inbound sales leads.",
                    },
                    {
                    name: "Launch Broadcast Campaigns",
                    detail: "Sends bulk, targeted promotional messages and seasonal offers directly to your customer database safely.",
                    },
                    {
                    name: "Create Pre-Approved Templates",
                    detail: "Saves time by building reusable templates for quick support answers and order confirmations.",
                    },
                    {
                    name: "Advanced Chatting Features",
                    detail: "Equips your team with media-rich options and organization tags to keep histories crisp.",
                    },
                    {
                    name: "Seamless Live-Agent Handoff",
                    detail: "Escalates complex issues to human representatives instantly, passing along full, unedited chat logs.",
                    },
                ],
                },
                {
                title: "High-Throughput Transactional SMS Gateways",
                description:
                    "To guarantee immediate delivery of time-sensitive alerts, IntarvAS links corporate databases to a heavy-duty outbound SMS gateway.",
                features: [
                    {
                    name: "Bulk SMS Delivery",
                    detail: "Sends high-volume text messages and OTPs to your entire customer database without system delays.",
                    },
                    {
                    name: "A2P Messaging APIs",
                    detail: "Connects your software directly to the gateway for automated transactional and security alerts.",
                    },
                    {
                    name: "Real-Time Delivery Reports",
                    detail: "Tracks exact message delivery statuses instantly so you know who received your texts.",
                    },
                    {
                    name: "Custom Sender IDs",
                    detail: "Displays your official brand name instead of random numbers to build customer trust.",
                    },
                ],
                },
            ],
            },
            {
            type: "cta",
            heading: "Future-Proof Your Customer Engagement",
            paragraphs: [
                "The math is simple: businesses that invest in agile, centralized cloud communication convert more leads, retain more clients, and insulate themselves against operational downtime. By consolidating voice telephony, official WhatsApp automations, and transactional SMS onto the IntarvAS cloud matrix, modern enterprises successfully replace chaotic hardware processes with a scalable revenue engine.",
                "Don't let rigid hardware limits and dropped calls slow down your organization's potential. Contact the IntarvAS team today to design a custom cloud infrastructure built for your operational scale.",
            ],
            },
        ],
        },
    },

    {
        id: "invas-whatsapp-infrastructure",
        date: "20th July 2026",
        author: "IntarvAS Marketing Team",
        read_time: "5 min read",
        title: "InvAS: A Better WhatsApp Infrastructure for Customer Engagement and Automation",
        excerpt:
        "For many businesses, customer engagement ends in the comment section but that is roughly 5% of the customer's journey. A well thought out customer engagement infrastructure provides a connected system that gives you easy access to relevant information about your audience.",
        cta_label: "Read full article",
        cover_image: {
            src: "/image/newsletter-4.png", // TODO: cover image path
            alt: "Why choose INVAS Dashboard", // TODO: alt text
            description: "Why choose invas Dashboard", // TODO: description
        },
        type: "article",
        content: {
        intro: [
            "For many businesses, customer engagement ends in the comment section but that is roughly 5% of the customer's journey.",
            "Customer engagement is the front end of your business interaction that keeps your customers connected to your brand. It shows up on different levels such as consistent conversations and chats, inquiries and complaints, community, sales funnel integrations and conversation strategies.",
            "A modern business keeps the customer engaged from the first interaction to the end point of conversion. Even after the sale is complete customer engagement continues in the form of after sales service, follow-ups and informational updates, and social media engagement.",
            "A well thought out customer engagement infrastructure provides a connected system that gives you easy access to relevant information about your audience and leaves little to no room for missed opportunities or inconsistencies.",
            "For millions of Nigerian consumers, that system is WhatsApp.",
        ],
        blocks: [
            {
            type: "prose",
            heading: "The Evolution of WhatsApp as a Business Communication tool",
            paragraphs: [
                "Recently, WhatsApp has been experimenting with structural updates, including the highly discussed rollout of unique usernames designed to let users chat without sharing their mobile numbers and everybody is excited because an improved whatsapp interface is a huge business opportunity for Nigerians.",
                "But long before this update, a good number of businesses owners have been making the most use of WhatsApp through the INVAS WhatsApp API",
                "A single phone number tied to a physical device cannot handle hundreds of daily inquiries. Messages get missed, data becomes fragmented across employee phones, and launching coordinated customer campaigns becomes impossible.",
                "Intarvas has built a telecommunication powerhouse called InvAS which transforms WhatsApp from a simple chat app into an elite, automated customer engagement and support tool that integrates a call center, booking management, phone book, automated messaging, call routing and marketing campaigns in one platform",
            ],
            },
            {
            type: "prose",
            heading: "Unlocking Efficiency with InvAS Chatbot Automation",
            paragraphs: [
                "One of the most powerful elements of the InvAS WhatsApp Business solution is advanced chatbot automation. Imagine a scenario where a customer messages your brand at 2:00 AM asking about pricing, delivery options, or basic troubleshooting. Instead of leaving them waiting until business hours, an intelligent InvAS chatbot can immediately and politely answer their questions, and guide them through a predefined workflow.",
                "This automation does not replace the human element; it enhances it.",
                "By handling repetitive, low-level FAQs automatically, your support agents are freed up to tackle complex customer problems that require real human empathy and critical thinking.",
                "InvAS allows you to build custom workflows that mirror your business processes, ensuring that every automated interaction feels natural, on-brand, and highly efficient.",
            ],
            },
            {
            type: "prose",
            heading: "Elevating Customer Support into a WhatsApp Call Center",
            paragraphs: [
                "While text-based chatting is perfect for quick updates and order tracking, complex inquiries often require a voice conversation. InvAS bridges this gap completely by turning your digital setup into a fully functional WhatsApp Call Center, which is recorded as the first ever whatsapp call center in nigeria.",
                "Through this system, your teams can handle both advanced chatting and direct voice interactions natively within a unified omnichannel framework and respond to a number of calls at the same time using Interactive Voice Response, Call routing and Queuing.",
                "Meaning that your staffs can all have access to a single whatsapp profile from where they interact with your customers and everyone can see the conversations and respond accordingly",
            ],
            },
            {
            type: "prose",
            heading: "Launching targeted Campaigns and Template Creation with InvAS",
            paragraphs: [
                "Beyond reactive customer support, proactive engagement is what drives revenue. InvAS empowers business owners to take the offensive by launching high-impact marketing and notification campaigns. Whether you are announcing a weekend flash sale, sending automated payment reminders, or distributing shipping updates, the platform provides the infrastructure to broadcast messages safely and effectively to thousands of customers at the same time.",
                "To ensure strict compliance with global communication standards, InvAS features robust tools to create templates. These approved templates allow you to reach out to your database at scale, complete with real-time delivery reports so you can track precisely how your campaigns are performing. With IntarvAS already trusted to deliver over 1 million messages daily across its cloud-powered infrastructure, you can be rest assured that your high-volume broadcasts will be fast, secure, and reliable.",
            ],
            },
            {
            type: "prose",
            heading: "Streamlining Operations with inVAS Booking Management",
            paragraphs: [
                "This is one of the best features on the InvAS platform.",
                "Friction in the scheduling process costs businesses high-value clients. inVAS Booking Management bridges the gap between customer engagement and instant conversion by allowing clients to book, reschedule, or cancel appointments directly within WhatsApp. Instead of forcing customers to navigate external links or wait for manual email confirmations, your team can present real-time calendar availability natively in the chat. This eliminates double-booking errors, drastically reduces no-shows with automated reminders, and frees your front-desk staff from endless scheduling loops. By securing your appointments where the conversation is already happening, you keep your sales pipeline moving efficiently 24/7.",
            ],
            },
            {
            type: "prose",
            heading: "Mastering Quality Assurance with Management Insights",
            paragraphs: [
                "Managing a high-volume customer service team requires absolute clarity, not guesswork. inVAS Management Insights provides complete conversational intelligence, allowing you to track which calls were missed and ensure they are assigned for immediate follow-up. Managers can monitor how staff interact with customers, viewing the progression of chats and calls from initial inquiry to resolution. Furthermore, with advanced live Call Whispering, supervisors can silently listen in and coach agents mid-conversation without the customer ever knowing. This total oversight guarantees brand consistency, improves staff accountability, and turns raw interaction data into actionable business intelligence.",
            ],
            },
            {
            type: "cta",
                paragraphs: [
                    "Don't miss the opportunity to streamline your operations and protect your profits.",
                    "Book a demo at intarvas.com to get started",
                ],
            },
        ],
        },
    },

    {
        id: "seven-reasons-all-in-one-system",
        date: "23rd July 2026",
        author: "IntarvAS Marketing Team",
        read_time: "5 min read",
        title: "7 Reasons Why Large-Scale Enterprises Are Adopting the All-In-One system",
        excerpt:
        "A lot of large-scale corporations deal with an immense volume of incoming calls, inquiries, complaints, and requests daily. Recent workplace communication statistics reveal that large companies lose an average of $62.4 million annually purely due to communication inefficiencies and fragmented systems.",
        cta_label: "Read full article",
        cover_image: {
            src: "/images/allinsoluheroimg.png", // TODO: cover image path
            alt: "All in One Solution Dashboard", // TODO: alt text
            description: "Dashboard of all the solutions", // TODO: description
        },
        type: "article",
        content: {
        intro: [
            "The answer is not far-fetched. A lot of large-scale corporations deal with an immense volume of incoming calls, inquiries, complaints, and requests daily.",
            "The recent workplace communication statistics reveal that large companies lose an average of $62.4 million (£48.5 million) annually purely due to communication inefficiencies and fragmented systems.",
            "Yes, you know how much you made in the first quarter of 2026, and you might even know how many sales in total were made to get to that exact figure. But do you know how many calls, Instagram DMs, Facebook chats, WhatsApp direct DMs, landing page leads, and email systems brought in those conversions? Knowing how many TikTok DMs it takes to get up to 50 conversions is not just data—it is an asset that helps you make smarter marketing and operational decisions.",
        ],
        blocks: [
            {
            type: "prose",
            heading: "The intarvAS Advantage: Unifying High-Volume Networks",
            paragraphs: [
                "The intarvAS omnichannel service was engineered for large-scale businesses like financial institutions, insurance companies, logistics brands, e-commerce businesses, and healthcare services—assisting them to scale their communication ecosystem, keep an organized conversation history of generated leads, and make data-driven decisions.",
                "intarvAS has perfected the omnichannel infrastructure, a solution that has been notoriously known to be one of the hardest technical challenges in modern IT because of the different codebases, data structures, and API protocols involved.",
                "Today, modern businesses have a communication edge that is effective, seamless, and beneficial in seven major ways:",
            ],
            },
            {
            type: "item_group",
            numbered: true,
            layout: "list",
            items: [
                {
                title: "Organized Workflow",
                detail: [
                    "With the all-in-one system, all customer interactions converge into a single dashboard. Support teams eliminate time wasted switching tabs between phone systems, emails, and social apps. This unified workspace streamlines interaction tracking, task assignment, and follow-ups, resulting in an organized workflow with zero missed opportunities.",
                ],
                },
                {
                title: "End-to-End Lead Visibility",
                detail: [
                    "An omnichannel system removes guesswork by tracking exactly where leads originate and which channels convert the highest. Instead of estimating performance, marketing and sales teams pinpoint whether Instagram DMs, landing pages, or direct calls drive revenue. This visibility ensures smarter ad spend and a higher campaign ROI.",
                ],
                },
                {
                title: "Accelerated Response Times",
                detail: [
                    "When messages converge into one inbox, teams resolve inquiries and complaints at lightning speed. Agents no longer manually dig through disconnected platforms to reconstruct a customer's message history. Faster replies protect customer retention and solidify brand reliability.",
                ],
                },
                {
                title: "Frictionless Customer Experiences",
                detail: [
                    "Customers demand seamless communication, not a repetitive interrogation when moving from email to live chat. A unified platform grants your support team instant access to the entire conversational history. Agents pick up exactly where the client left off, creating a personalized experience that builds long-term loyalty.",
                ],
                },
                {
                title: "Seamless Cross-Department Coordination",
                detail: [
                    "Restricting teams to disconnected communication tools forces sales, support, and marketing into isolated silos. A unified omnichannel platform establishes a single source of truth. This transparency eliminates duplicate work, prevents internal confusion, smooths departmental handoffs, and ensures clear accountability.",
                ],
                },
                {
                title: "Granular, Data-Driven Decisions",
                detail: [
                    "To scale effectively, leadership needs more than top-line revenue reports; you must understand the communication pathways driving those numbers. All-in-one platforms pull channel performance, agent response metrics, and conversion trends into one view, backing your corporate strategy with hard data.",
                ],
                },
                {
                title: "Future-Proof, Scalable Infrastructure",
                detail: [
                    "As enterprises grow, message volume spikes exponentially across sales and support functions. Fragmented systems break under this pressure. An omnichannel framework provides the structural foundation necessary to process high-volume influxes without operational chaos, supporting geographical expansion and complex workflows.",
                ],
                },
            ],
            },
            {
            type: "prose",
            heading: "The Future Belongs to Connected Systems",
            paragraphs: [
                "As customer expectations continue to rise and business operations become increasingly complex, organizations can no longer afford disconnected data and isolated departments.",
                "Enterprises that want to stay ahead must unify their customer experience, streamline operations, and empower teams with a functional tool.",
                "An all-in-one omnichannel platform is more than a software solution. It is the foundation for faster service, smarter decision-making, and scalable business growth.",
            ],
            },
            {
            type: "cta",
                paragraphs: ["Book a demo at intarvas.com to get started"],
            },
        ],
        },
    },
];