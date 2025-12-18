import { Button } from "@/components/ui/button";
export const DownloadButton = ({  
        icon: Icon, 
        href,
        store, 
        subtitle 
    }: { 
        icon: React.ElementType; 
        href: string;
        store: string; 
        subtitle: string; 
    }) => (
    <Button variant="primary-gradient" className="rounded-md py-6 shadow-lg relative group">
        <a href={href} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-row items-center space-x-3">
                <Icon className="text-white w-96 h-96 absolute -left-1 top-[70%] -translate-y-1/2 
                    transition-all duration-300 ease-in-out 
                    group-hover:rotate-12 group-hover:-translate-x-1 group-hover:brightness-12 group-hover:scale-110" 
                    style={{scale: 2.0}}/>
                <span className="flex flex-col space-y-0 space-x-0 text-left ml-12">
                    <span className="uppercase text-[6px] font-semibold leading-[6px] tracking-widest p-0 text-[#FFFFFF]/60">
                        {subtitle}
                    </span>
                    <span className="text-[15px] tracking-wide p-0">
                        {store}
                    </span>
                </span>
            </div>
        </a>
    </Button>
);