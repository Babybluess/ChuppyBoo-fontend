import React from 'react';
import { FaGem } from 'react-icons/fa'; // Icon

const Profile = ({ img, name, diamonds }: { img: string, name: string, diamonds: number }) => {
  return (
    <div className="flex flex-col items-center w-full p-4">
      <div className="w-1/4 p-4 bg-gradient-to-b from-[#58403C] to-[#3F2A23] text-white text-center flex items-center justify-start rounded-t-2xl">
        <div className="border-2 border-white p-2 rounded-2xl">
          <img src={img} alt="Profile" className="w-12 h-12 rounded-full" />
        </div>
        <div className='ml-5'>
          <div>{name}</div>
        </div>
      </div>

      <div className="w-1/4 p-4 bg-gradient-to-b from-[#483531] to-[#3F2A23] text-white text-center rounded-b-2xl flex items-center justify-center space-x-2">
        <FaGem className="text-yellow-500" />
        <span>{diamonds}</span>
      </div>
    </div>
  );
};

export default Profile;