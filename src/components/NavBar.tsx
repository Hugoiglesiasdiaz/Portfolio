import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow z-50">
            <div className="max-w-6xl mx-auto p-4 flex items-center justify-center md:justify-center relative">


                <button
                    className="absolute left-4 md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                <ul
                    className={`flex-col md:flex-row md:flex md:space-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-gray-800 md:bg-transparent transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-60 py-4" : "max-h-0"
                        } md:max-h-full`}
                >
                    <li>
                        <a
                            href="#presentation"
                            className="block px-4 py-2 hover:underline hover:text-blue-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="block px-4 py-2 hover:underline hover:text-blue-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Sobre mí
                        </a>
                    </li>
                    <li>
                        <a
                            href="#studies"
                            className="block px-4 py-2 hover:underline hover:text-blue-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Estudios
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="block px-4 py-2 hover:underline hover:text-blue-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="block px-4 py-2 hover:underline hover:text-blue-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Tecnologías
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
