import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <ul className="flex justify-center space-x-8 p-4">
        <li>
          <a href="#presentation" className="hover:underline">
            Inicio
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            Sobre mí
          </a>
        </li>
        <li>
          <a href="#studies" className="hover:underline">
            Estudios
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline">
            Proyectos
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
