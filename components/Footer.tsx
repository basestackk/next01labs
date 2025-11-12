import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="py-20 flex flex-col items-center justify-center gap-8 text-center">
          <div>
            <div className="text-2xl font-light mb-3 text-slate-900 font-mono">Next<span className="font-mono">0</span>1 Labs</div>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              Your end-to-end technology partner for founders and enterprises.
            </p>
          </div>
          <div>
            <Link
              href="https://www.linkedin.com/company/109727970/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
          </div>
        </div>
        <div className="py-8 border-t border-slate-200 text-center text-sm text-slate-500 font-light">
          <p>&copy; {new Date().getFullYear()} Next<span className="font-mono">0</span>1 Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

