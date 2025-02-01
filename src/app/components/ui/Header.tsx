// components/Header.tsx
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-secondary-DEFAULT sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-secondary-800 text-2xl font-bold">
              Lewis Clarke
            </h1>
          </div>

          <div className="md:flex md:space-x-10">
            <a
              href="#about"
              className="text-secondary-800 hover:text-primary-600 px-4 py-3 text-base font-semibold transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-secondary-800 hover:text-primary-600 px-4 py-3 text-base font-semibold transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-secondary-800 hover:text-primary-600 px-4 py-3 text-base font-semibold transition-colors"
            >
              Contact
            </a>
          </div>

          <a
            href="https://github.com/lewisClarke1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-DEFAULT hover:bg-accent-800 rounded-lg px-6 py-3 text-base font-semibold text-secondary-800 transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
    </header>
  );
}
