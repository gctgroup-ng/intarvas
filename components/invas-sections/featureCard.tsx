"use client";

const FeatureCard = ({ icon, title, description, img }) => {
    const handleImageLoad = () => {
        // Refresh ScrollTrigger when card images load to recalculate positions
        if (globalThis.window !== undefined) {
            // Dynamic import to avoid SSR issues
            import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                ScrollTrigger.refresh();
            });
        }
    };

    return (
        <div className="md:w-[619px] bg-white border hover:border-blue-200 rounded-3xl">
            <div className=" flex flex-col justify-between space-y-4 p-8 h-full ">
                <div className="flex flex-col items-start space-y-1">
                    <span className="bg-blue-100 text-blue-700 p-2 rounded">{icon}</span>
                    <h3 className="font-inter font-semibold text-[24px]">{title}</h3>
                    <p className="text-[16px] text-[#667085]">{description}</p>
                </div>
                <div className="block w-full overflow-hidden rounded-lg">
                    <img src={img} alt="" className="w-full object-contain" onLoad={handleImageLoad}/>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
