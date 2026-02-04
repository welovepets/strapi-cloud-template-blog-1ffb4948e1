import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-4xl">🐾</span>
            </Link>
          </div>

          {/* Get Started */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get Started</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/branches" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Find a branch
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Buy a franchise */}
          <div>
            <h3 className="font-bold text-lg mb-4">Buy a franchise</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/franchise" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our business
                </Link>
              </li>
              <li>
                <Link href="/franchise/package" className="text-gray-300 hover:text-white transition-colors text-sm">
                  The package
                </Link>
              </li>
              <li>
                <Link href="/franchise/support" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our support
                </Link>
              </li>
              <li>
                <Link href="/franchise/franchisees" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our franchisees
                </Link>
              </li>
              <li>
                <Link href="/franchise/faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                  FAQ's
                </Link>
              </li>
            </ul>
          </div>

          {/* Career */}
          <div>
            <h3 className="font-bold text-lg mb-4">Career</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/careers/dog-walker" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Dog walker
                </Link>
              </li>
              <li>
                <Link href="/careers/home-boarder" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home boarder
                </Link>
              </li>
              <li>
                <Link href="/careers/pet-sitter" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Pet sitter
                </Link>
              </li>
              <li>
                <Link href="/careers/house-sitter" className="text-gray-300 hover:text-white transition-colors text-sm">
                  House sitter
                </Link>
              </li>
              <li>
                <Link href="/careers/business-support" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Business support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms of business
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/website-terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Website terms of use
                </Link>
              </li>
              <li>
                <Link href="/legal/disclaimer" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Website disclaimer
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © We Love Pets Ltd – Company Registered in England, UK (08651911), VAT – GB 280278788<br />
            We Love Pets Ltd., The Wherry, Quay St, Halesworth IP19 8ET
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a 
              href="https://www.facebook.com/WeLovePetsUK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/welovepetsuk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/welovepets" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">YouTube</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
