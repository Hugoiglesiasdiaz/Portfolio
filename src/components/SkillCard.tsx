import React from "react";

interface SkillCardProps {
    name: string;
    icon?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
            {icon && (
                icon.startsWith('http') ? (
                    <img src={icon} alt={name} className="w-12 h-12 mb-3" />
                ) : (
                    <i className={`${icon} text-5xl text-blue-600 dark:text-blue-400 mb-3`}></i>
                )
            )}
            <p className="text-lg font-semibold text-gray-800 dark:text-white text-center">
                {name}
            </p>
        </div>
    );
};

export default SkillCard;