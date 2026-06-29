import { Link } from "wouter";
import { AlertTriangle, ChevronLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="text-center px-6">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="h-16 w-16 text-[#e63946]" />
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight mb-4">
          404
        </h1>
        <p className="text-gray-500 text-lg max-w-md mx-auto mb-8">
          This page doesn't exist. Like a bug that was already fixed.
        </p>
        <Link href="/">
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#e63946] text-white font-medium rounded-full hover:bg-[#c41e3a] transition-colors cursor-none">
            <ChevronLeft size={18} />
            Back to ZENITH
          </span>
        </Link>
      </div>
    </div>
  );
}
