"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFoundSection() {
    const router = useRouter();
    return (
        <main className="min-h-screen bg-black/90 flex items-center justify-center px-6">
        <div className="text-center max-w-md">

            {/* breadcrumb trail */}
            <div className="flex items-center justify-center gap-2 text-xs text-white mb-10">
            <span>Home</span>
            <span>/</span>
            <span>…</span>
            <span>/</span>
            <span className="text-red-400">Page not found</span>
            </div>

            {/* 404 with planet "0" */}
            <div className="flex items-center justify-center gap-0 mb-8">
            <span className="font-mono text-[96px] font-medium leading-none text-white">4</span>

            <div className="relative w-[88px] h-[100px] flex items-center justify-center">
                {/* orbit ring */}
                <div className="absolute w-[110px] h-[18px] rounded-[50%] border border-white -rotate-[18deg]" />
                {/* satellite dot */}
                <div className="absolute w-2 h-2 rounded-full bg-white top-[14px] -right-[2px]" />
                {/* planet */}
                <div className="w-[88px] h-[88px] rounded-full border-[3px] border-white flex items-center justify-center">
                <div className="w-[52px] h-[52px] rounded-full bg-white border border-white" />
                </div>
            </div>

            <span className="font-mono text-[96px] font-medium leading-none text-white">4</span>
            </div>

            <h1 className="text-xl font-medium text-white mb-3">
            This page drifted off
            </h1>
            <p className="text-white text-sm leading-relaxed mb-8">
            The page you're looking for doesn't exist or may have been moved.
            Check the URL, or head back to safety.
            </p>

            <div className="flex gap-3 justify-center flex-wrap">
            <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A0F8F] text-white text-sm font-medium hover:bg-[#0A0F8F]/70 transition-colors"
            >
                Go home
            </Link>
            <Button
                variant="outline"
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg transition-colors"
            >
                Go back
            </Button>
            </div>

        </div>
        </main>
    );
}