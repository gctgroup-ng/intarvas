"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { useState, useEffect, useCallback, useMemo } from "react"

interface MenuItem {
    name: string;
    path: string;
}

const SERVICES: MenuItem[] = [
    { name: "IntarvAS PBX", path: "/services/pbx" },
    { name: "All In one Solution", path: "/services/all-in-solution" },
    { name: "Bulk Messaging", path: "/services/bulk-messaging" },
    { name: "Vanity & toll free numbers", path: "/services/numbers" },
];

export default function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    // const pathname = usePathname();
    const baseUrl = usePathname();
    const pathname = `/${baseUrl.split('/')[1]}`;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const shouldUseBlackLogo = useMemo(
        () =>
        pathname.includes("/services") || pathname === "/contact" || isScrolled,
        [pathname, isScrolled]
    );

    const isActive = useCallback(
        (path: string) => pathname === path,
        [pathname]
    );

    const getLinkClass = useCallback(
        (path: string) => {
            const active = isActive(path);
            return `flex items-center gap-1 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:origin-bottom-right after:transition-transform after:duration-300 transition-colors
                ${active ? "text-[#007DFE] font-semibold" : (isScrolled ? "text-black" : "text-[#A3A9B6]")} 
                ${active ? "" : "hover:text-[#007DFE]"}
                ${active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left"}`;
        },
        [isActive, isScrolled]
    );
    // ${active ? "text-[#007DFE]" : `${isScrolled ? "text-black" : "text-gray-400"} hover:text-[#007DFE]`} 
    const getMobileLinkClass = useCallback(
        (path: string) => {
        const active = isActive(path);
        return `text-2xl font-semibold transition-colors relative inline-block 
            ${active ? "text-[#007DFE] font-semibold" : (isScrolled ? "text-black" : "text-[#A3A9B6]")} 
            ${active ? "" : "hover:text-[#007DFE]"}
            after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:origin-bottom-right after:transition-transform after:duration-300 
            ${active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left"}`;
        },
        [isActive, isScrolled]
    );

    const getMobileSubLinkClass = useCallback(
        (path: string) => {
        const active = isActive(path);
        return `relative inline-block after:w-full after:content-[''] after:absolute after:h-0.5 after:bottom-0 after:left-0 after:bg-[#007DFE] after:transition-transform after:duration-300
            ${active ? "text-[#007DFE] after:scale-x-20" : "text-gray-700 hover:text-[#007DFE] after:scale-x-0 hover:after:scale-x-100"}`;
        },
        [isActive]
    );

    return (
        <header className={`fixed top-0 z-50 w-full transition-all duration-300
            ${ isScrolled
                ? "bg-white/40 backdrop-blur-sm border-b border-white/20"
                : "bg-transparent"
            }`}
        >
            <div className="2xl:container 2xl:mx-auto flex items-center justify-between lg:px-4 lg:py-3">

                <div className="flex items-center gap-8 py-3">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 font-semibold shrink-0">
                        <img src={ shouldUseBlackLogo ? "/intervaslogoblack.svg" : "/images/Logo.svg"} alt="IntarvAS Logo" className="h-8 w-[200px]"/>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex gap-6">
                        <Link href="/" className={getLinkClass("/")}> Home </Link>
                        <div className="relative group">
                            <button className={getLinkClass("/services")}
                            // className={`flex items-center gap-1 ${isScrolled ? "text-black" : "text-[#A3A9B6]"} hover:text-[#007DFE] cursor-pointer transition-colors`}
                            >
                                <span>Services</span>
                                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                            </button>
                            <div className="absolute top-full left-0 mt-2 min-w-[240px] bg-white shadow-lg border border-gray-200 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                <div className="py-2">
                                {SERVICES.map((service) => (
                                    <Link key={service.path} href={service.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#007DFE] transition-colors">
                                    {service.name}
                                    </Link>
                                ))}
                                </div>
                            </div>
                        </div>
                        <Link href="/about" className={getLinkClass("/about")}> About Us </Link>
                        <Link href="/contact" className={getLinkClass("/contact")}> Contact Us </Link>
                    </nav>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-3">
                    <Button variant="outline" asChild>
                        <Link href="https://wiki.ccaas.intarvas.com" target="_blank" rel="noopener noreferrer">
                            Explore Services
                        </Link>
                    </Button>
                    <Button variant="hero" asChild>
                        <Link href="/contact">Request Demo</Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden">
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <button className="p-2" aria-label="Toggle menu">
                                <Menu color="#C2C6CE" className="h-6 w-6" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full h-full bg-white/95 backdrop-blur-md p-0 [&>button]:h-8 [&>button]:w-8 [&>button]:text-gray-600 [&>button]:hover:text-gray-800">
                            <SheetHeader>
                                <SheetTitle className="sr-only">Header</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col h-full">
                                {/* Mobile Header */}
                                <div className="flex items-center p-4 border-b border-gray-200 shrink-0">
                                    <img src="/intervaslogoblack.svg" alt="IntarvAS Logo" className="h-8 w-[200px]"/>
                                </div>

                                {/* Mobile Navigation */}
                                <nav className="flex-1 flex flex-col justify-center px-6 space-y-8">
                                    <div>
                                        <Link href="/" className={getMobileLinkClass("/")} onClick={() => setIsMobileMenuOpen(false)} > Home </Link>
                                    </div>

                                    {/* Mobile Services Accordion */}
                                    <div className="space-y-4">
                                        <button onClick={() => setIsServicesOpen(!isServicesOpen)} className={`flex items-center gap-2 ${getMobileLinkClass("/services")}`} aria-expanded={isServicesOpen} aria-label="Toggle services menu" >
                                            Services
                                            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${ isServicesOpen ? "rotate-180" : "rotate-0" }`}/>
                                        </button>

                                        {isServicesOpen && (
                                        <div className="flex flex-col space-y-3 pl-4 animate-fade-in">
                                            {SERVICES.map((service) => (
                                                <Link key={service.path} href={service.path} className="text-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                                    <span className={getMobileSubLinkClass(service.path)}>{service.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                        )}
                                    </div>
                                    <div>
                                        <Link href="/about" className={getMobileLinkClass("/about")} onClick={() => setIsMobileMenuOpen(false)}> About Us </Link>
                                    </div>
                                    <div>
                                        <Link href="/contact" className={getMobileLinkClass("/contact")} onClick={() => setIsMobileMenuOpen(false)}> Contact Us </Link>
                                    </div>
                                </nav>

                                {/* Mobile Action Buttons */}
                                <div className="p-6 space-y-4 border-t border-gray-200 shrink-0">
                                    <Button variant="outline" className="w-full text-lg py-6" asChild>
                                        <Link href="https://wiki.ccaas.intarvas.com" target="_blank" rel="noopener noreferrer">
                                            Explore Services
                                        </Link>
                                    </Button>
                                    <Button variant="hero" className="w-full text-lg py-6" asChild>
                                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} >
                                            Request Demo
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}