import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow z-50">
            <ul className="flex justify-center space-x-8 p-4">
                <li>
                    <a href="#presentation" className="hover:underline hover:text-blue-300">
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="#about" className="hover:underline hover:text-blue-300">
                        Sobre mí
                    </a>
                </li>
                <li>
                    <a href="#studies" className="hover:underline hover:text-blue-300">
                        Estudios
                    </a>
                </li>
                <li>
                    <a href="#projects" className="hover:underline hover:text-blue-300">
                        Proyectos
                    </a>
                </li>
                <li>
                    <a href="#skills" className="hover:underline hover:text-blue-300">
                        Tecnologías
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
