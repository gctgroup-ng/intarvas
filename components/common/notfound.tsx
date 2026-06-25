// app/not-found.tsx  (or pages/404.tsx)
import Link from "next/link";

export default function NotFoundSection() {
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center max-w-md">

            {/* breadcrumb trail */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-10">
            <span>Home</span>
            <span>/</span>
            <span>…</span>
            <span>/</span>
            <span className="text-red-400">Page not found</span>
            </div>

            {/* 404 with planet "0" */}
            <div className="flex items-center justify-center gap-0 mb-8">
            <span className="font-mono text-[96px] font-medium leading-none text-gray-900">4</span>

            <div className="relative w-[88px] h-[100px] flex items-center justify-center">
                {/* orbit ring */}
                <div className="absolute w-[110px] h-[18px] rounded-[50%] border border-gray-300 -rotate-[18deg]" />
                {/* satellite dot */}
                <div className="absolute w-2 h-2 rounded-full bg-gray-400 top-[14px] -right-[2px]" />
                {/* planet */}
                <div className="w-[88px] h-[88px] rounded-full border-[3px] border-gray-300 flex items-center justify-center">
                <div className="w-[52px] h-[52px] rounded-full bg-gray-100 border border-gray-200" />
                </div>
            </div>

            <span className="font-mono text-[96px] font-medium leading-none text-gray-900">4</span>
            </div>

            <h1 className="text-xl font-medium text-gray-900 mb-3">
            This page drifted off
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
            The page you're looking for doesn't exist or may have been moved.
            Check the URL, or head back to safety.
            </p>

            <div className="flex gap-3 justify-center flex-wrap">
            <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
            >
                Go home
            </Link>
            <Link
                href="javascript:history.back()"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 text-gray-500 text-sm hover:bg-gray-100 transition-colors"
            >
                Go back
            </Link>
            </div>

        </div>
        </main>
    );
}