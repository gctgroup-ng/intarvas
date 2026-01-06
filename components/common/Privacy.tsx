"use client";

export default function Privacy() {
    const effectiveDate = "January 6, 2026"; // Update this date as needed
    return (
        <section className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="m-12 mt-20 text-center">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-6 text-gray-900 dark:text-white">
                        PRIVACY POLICY
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Last Updated: {effectiveDate}
                    </p>
                </header>

                {/* Section 1: Introduction */}
                <section className="mb-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                        1. INTRODUCTION
                    </h2>
                    <div className="space-y-4 text-justify">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            IntarvAS Communications Limited (hereinafter referred to as "IntarvAS", "our", "we", "us") recognises the confidential nature of the Personal Data of Users (hereinafter referred to as "You") collected through this Website (<a href="https://www.intarvas.com" className="text-primary underline">https://www.intarvas.com</a>) and takes responsibility to comply with the extant Data Protection Laws. We are a data controller within the meaning of the Nigeria Data Protection Act committed to protecting and respecting your privacy. We treat your Personal Data as confidential and are dedicated to protecting your privacy by providing you with the highest level of security appropriate to the nature of the data and the risks involved at any point of interaction with the Website.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Personal Data may be received from third parties or collected using the Website and other digital channels. In line with this Policy, we ensure that we gather, store and handle data fairly, transparently, and with respect for individual rights. As a result of government regulations, new technologies, or other developments in data protection laws or privacy generally, you should check the website periodically to view the most up-to-date privacy policy. This website privacy policy will inform you about how we look after your personal data when you visit the Website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                            By accessing or using the Website, you hereby agree with the method of collection, use, disclosure and processing of your Personal Information as described in this Privacy Policy and the Terms of Use.
                        </p>
                    </div>
                </section>

                {/* Section 2: Definition of Terms */}
                <section className="mb-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                        2. DEFINITION OF TERMS
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-1">"Consent"</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                means any freely given, specific, informed and unambiguous indication of the Data Subject's wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the Processing of Personal Data relating to him or her.
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-1">"Cookies"</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                are files containing identifiers (a string of letters and numbers) that are sent by a web server to a web browser and are stored by the browser. The identifiers are then sent back to the server each time the browser requests a page from the server.
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-1">"Data Controller"</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                means IntarvAS (and words such as "our", "we", or "us" shall be interpreted accordingly) or any other person who either alone, jointly or in common with other persons or as a statutory body, determines the purposes for and the manner Personal Data is processed or is to be processed.
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-1">"Data Subject"</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                means You, as an identifiable person; one who can be identified directly or indirectly, by reference to an identifier such as a number or to one or more factors specific to his or her physical, physiological, mental, economic, cultural or social identity.
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-1">"Data Protection Laws"</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                means the Constitution of the Federal Republic of Nigeria, 1999, the Nigeria Data Protection Act (NDPA) 2023, and any subsidiary regulations, guidelines or frameworks issued thereunder, including the Nigeria Data Protection Regulation 2019 (NDPR), the NDPR 2019 Implementation Framework, and any relevant data protection laws.
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-1">"Data Protection Officer" (DPO)</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                refers to our designated personnel assigned with the duties of ensuring compliance with Data Protection Laws, our relevant data privacy instruments and data protection directives.
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-1">"NDPC"</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                means the Nigeria Data Protection Commission.
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-1">"Personal Data/Information"</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                means any information relating to an identified or identifiable natural person ('Data Subject'). It may include a name, address, photo, email address, identification number, location data, online identifier, bank details, posts on social networking websites, medical information, and other unique identifiers including MAC address, IP address, IMEI number, IMSI number, SIM, to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-1">"Personal Data Breach"</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                refers to a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, Personal Data transmitted, stored, or otherwise processed.
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-1">"Policy"</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                means this Website Privacy Policy.
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-1">"Process" or "Processing"</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                refers to any operation or set of operations which is performed on Personal Data or on sets of Personal Data, whether by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-1">"Pseudonymisation"</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                means replacing information that directly or indirectly identifies an individual with one or more artificial identifiers or pseudonyms so that the person, to whom the data relates, cannot be identified without the use of additional information which is meant to be kept separately and secure.
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-1">"Third Party"</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                means any natural or legal person, public authority, establishment or any other body other than you and us.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3: Scope */}
                <section className="mb-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                        3. SCOPE
                    </h2>
                    <div className="space-y-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            This Policy applies to all Personal Data processed by IntarvAS through this Website and related digital channels. It forms part of the Website's Terms of Use and applies whenever you access or use the Website or any services provided through it.
                        </p>
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 p-4">
                            <p className="text-yellow-800 dark:text-yellow-200">
                                <span className="font-bold">Note:</span> The Website is not intended for children, and IntarvAS does not knowingly process Personal Data relating to children. Where IntarvAS becomes aware that Personal Data relating to a child has been inadvertently collected without a lawful basis, such data shall be deleted promptly unless retention is permitted by law, including where valid parental or guardian consent exists.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 4: Consent */}
                <section className="mb-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                        4. CONSENT
                    </h2>
                    <div className="space-y-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            IntarvAS processes your Personal Data only where permitted by law and on one or more lawful bases, including consent, performance of a contract, compliance with legal obligations, protection of vital interests, or performance of tasks carried out in the public interest or under official authority. Where processing is based on your consent, you may withdraw such consent at any time by contacting us through the details provided on the Website.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Withdrawal of consent shall not affect the lawfulness of processing carried out prior to such withdrawal. Where you provide Personal Data relating to a third party, you confirm that you have obtained the necessary authority or consent to disclose such information to IntarvAS. Where consent is not the appropriate lawful basis, IntarvAS relies on other lawful bases such as contractual necessity, legal obligation, or legitimate interest.
                        </p>
                    </div>
                </section>

                {/* Section 5: The Data We Collect About You */}
                <section className="mb-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                        5. THE DATA WE COLLECT ABOUT YOU
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Depending on your interaction with the Website, we may process the following categories of Personal Data:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">(a) Identity Data</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                which includes your name, username, title, and gender
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">(b) Contact Data</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                which includes your delivery address, email address, and telephone number(s)
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">(c) Transaction Data</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                which includes payment and service-related information
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">(d) Technical Data</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                which includes IP address, browser type and version, device information, operating system and access logs
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">(e) Usage Data</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                which includes information about how you use the Website, products, and services
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">(f) Marketing and Communications Data</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                which includes preferences relating to marketing communications
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                        Where required by law, sensitive personal data is processed only with explicit consent or other lawful basis.
                    </p>
                </section>

                {/* Section 6: Purposes of Processing */}
                <section className="mb-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                        6. PURPOSES OF PROCESSING
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        We collect Personal Information for the following reasons:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 mb-4">
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="font-medium">to provide, operate and maintain the Website and related services;</span>
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="font-medium">to manage billing, payments and contractual relationships;</span>
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="font-medium">to communicate service-related updates, notices and administrative information;</span>
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="font-medium">to send marketing or promotional communications, subject to your preferences and rights;</span>
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="font-medium">to analyse usage, improve service quality, security and user experience;</span>
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="font-medium">to comply with applicable legal, regulatory and governance obligations; and</span>
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="font-medium">to support corporate transactions such as mergers, acquisitions or reorganisations subject to appropriate safeguards.</span>
                        </li>
                    </ol>
                </section>

                {/* Section 7: How is Your Personal Data Collected? */}
                <section className="mb-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                        7. HOW IS YOUR PERSONAL DATA COLLECTED?
                    </h2>
                    <div className="space-y-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            We use different methods to collect Personal Data from and about you, including through:
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">(a) Direct interactions</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                You may give us your Identity and Contact Data by filling forms or by corresponding with us by post, phone, email or otherwise.
                            </p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">(b) Automated technologies or interactions</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                including cookies, server logs, pixel tags and similar technologies that collect Technical and Usage Data.
                            </p>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Cookies used on the Website may be categorised as strictly necessary, functional, analytical or advertising cookies. Non-essential cookies are used only where permitted by law and subject to your preferences.
                        </p>
                    </div>
                </section>

                {/* Section 8: Legal Bases for Processing Your Personal Data */}
                <section className="mb-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                        8. LEGAL BASES FOR PROCESSING YOUR PERSONAL DATA
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        We process your Personal Data on the following legal bases:
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                            <p className="text-gray-700 dark:text-blue-200 font-semibold">Consent</p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                            <p className="text-gray-700 dark:text-blue-200 font-semibold">Performance of a contract</p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                            <p className="text-gray-700 dark:text-blue-200 font-semibold">Compliance with a legal obligation</p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                            <p className="text-gray-700 dark:text-blue-200 font-semibold">Protection of vital interests</p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg col-span-2 sm:col-span-1 md:col-span-2">
                            <p className="text-gray-700 dark:text-blue-200 font-semibold">Performance of a task carried out in the public interest or in exercise of official public mandate vested in the controller</p>
                        </div>
                    </div>
                </section>

                {/* Section 9: Your Rights as a Data Subject */}
                <section className="mb-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                        9. YOUR RIGHTS AS A DATA SUBJECT
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Subject to applicable law, you have rights which include the right to:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3">
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="font-medium">request access to your Personal Data;</span>
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="font-medium">withdraw consent to our Processing of Personal Data;</span>
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="font-medium">request Personal Data be erased, deleted or corrected;</span>
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="font-medium">request a copy of the safeguards under which Personal Data is transferred outside of Nigeria;</span>
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="font-medium">request that your Personal Data be transferred to another Data Controller;</span>
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">
                            <span className="font-medium">lodge a complaint with the Nigeria Data Protection Commission.</span>
                        </li>
                    </ol>
                </section>

                {/* Section 10: Transfer of Personal Data */}
                <section className="mb-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                        10. TRANSFER OF PERSONAL DATA
                    </h2>
                    <div className="space-y-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Personal Data may be shared with IntarvAS's affiliates, service providers and professional advisers, subject to contractual confidentiality and data protection obligations.
                        </p>
                        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400 p-4">
                            <p className="text-green-800 dark:text-green-200">
                                <span className="font-bold">Important:</span> Personal Data may be transferred outside Nigeria only where appropriate safeguards are in place in accordance with the Nigeria Data Protection Act 2023.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 11: Retention of Personal Data */}
                <section className="mb-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                        11. RETENTION OF PERSONAL DATA
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Personal Data is retained only for as long as necessary to fulfil the purposes for which it was collected, taking into account legal, regulatory, contractual and operational requirements. Where retention is no longer required, data is securely deleted or anonymised.
                    </p>
                </section>

                {/* Section 12: Data Security and Personal Data Breach */}
                <section className="mb-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                        12. DATA SECURITY AND PERSONAL DATA BREACH
                    </h2>
                    <div className="space-y-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            IntarvAS maintains appropriate technical and organisational security measures, including encryption and pseudonymisation where appropriate, to protect Personal Data.
                        </p>
                        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 p-4">
                            <p className="text-red-800 dark:text-red-200">
                                <span className="font-bold">Data Breach Protocol:</span> In the event of a Personal Data Breach, IntarvAS will assess the risks involved and notify the Nigeria Data Protection Commission and affected Data Subjects in accordance with applicable legal requirements.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 13: Tracking Technologies */}
                <section className="mb-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                        13. TRACKING TECHNOLOGIES
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Cookies and similar technologies are used to personalise content, analyse usage and improve Website functionality. You may control cookie preferences through your browser settings, although disabling cookies may affect Website functionality.
                    </p>
                </section>

                {/* Section 14: Third-Party Websites */}
                <section className="mb-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                        14. THIRD-PARTY WEBSITES
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        The Website may contain links to third-party websites. IntarvAS does not control or operate such websites and is not responsible for their privacy practices. Users are encouraged to review the privacy policies of any third-party websites they visit.
                    </p>
                </section>

                {/* Section 15: Changes to the Policy */}
                <section className="mb-12">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                        15. CHANGES TO THE POLICY
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        This Policy is effective as of {effectiveDate} and may be updated periodically to reflect changes in law, regulation or operational practices. Updates will be published on this page, and continued use of the Website constitutes acceptance of the revised Policy.
                    </p>
                </section>

                {/* Section 16: Contact */}
                <section className="mb-12 rounded-xl">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                        16. CONTACT
                    </h2>
                    <div className="space-y-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            If you have any questions or comments about this Policy, do not hesitate to contact us through our Email: <a href="mailto:info@intarvas.com" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">info@intarvas.com</a>, who will be happy to address your concerns and respond to your comments.
                        </p>
                        {/* <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">Contact Details:</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                <span className="font-medium">Email:</span> <a href="mailto:info@intarvas.com" className="text-blue-600 dark:text-blue-400 hover:underline">info@intarvas.com</a>
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mt-1">
                                <span className="font-medium">Website:</span> <a href="https://www.intarvas.com" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.intarvas.com</a>
                            </p>
                        </div> */}
                    </div>
                </section>

                {/* Footer Note */}
                {/* <footer className="pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                        This privacy policy may be updated periodically. Please check this page for the latest version.
                    </p>
                </footer> */}
            </div>
        </section>
    );
}