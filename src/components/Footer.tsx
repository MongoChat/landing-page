import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Section: Brand and About */}
        <div className="lg:w-1/3 space-y-4">
          <h2 className="text-2xl font-bold text-green-600">MongoChat</h2>
          <p className="text-base text-gray-700 dark:text-gray-400 leading-relaxed">
            Making database interactions as simple as having a conversation.
          </p>
          <div className="flex flex-row">
            <a href="#">
              <FacebookIcon className="mr-3 text-gray-500 hover:text-green-600" />
            </a>
            <a href="#">
              <TwitterIcon className="mr-3 text-gray-500 hover:text-green-600" />
            </a>
            <a href="#">
              <LinkedinIcon className="mr-3 text-gray-500 hover:text-green-600" />
            </a>
          </div>
        </div>

        {/* Right Section: Links */}
        <div className="flex flex-wrap justify-start lg:justify-end lg:flex-1 gap-20">
          {/* Column 1: Product */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-white transition"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-white transition"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-white transition"
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-white transition"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-white transition"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-white transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-white transition"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-white transition"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-white transition"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-white transition"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} MongoChat. All rights reserved.
      </div>
    </footer>
  );
}
