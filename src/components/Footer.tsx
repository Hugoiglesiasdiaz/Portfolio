import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4">
                <div className="flex space-x-6 text-2xl">
                    <a
                        href="https://github.com/Hugoiglesiasdiaz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hugo-iglesias-díaz-2098a42a3/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        <FaLinkedin />
                    </a>
                </div>
                <p className="text-sm text-gray-400">
                    Hecho con{" "}
                    <span className="text-cyan-400 font-semibold">React</span> +{" "}
                    <span className="text-blue-400 font-semibold">TypeScript</span>
                </p>

            </div>
        </footer>
    );
};

export default Footer;
