import React from "react";

type HeaderProfileProps = {
  name: string;
  photoUrl: string;
};

const HeaderProfile: React.FC<HeaderProfileProps> = ({ name, photoUrl }) => {
  return (
    <div className="flex items-center space-x-4 p-4">
      <img
        src={photoUrl}
        alt={`${name} profile`}
        className="w-16 h-16 rounded-full object-cover shadow-md"
      />
      <h1 className="text-xl font-semibold text-gray-900">{name}</h1>
    </div>
  );
};

export default HeaderProfile;
