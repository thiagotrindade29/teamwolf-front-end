import React from 'react';
import Image from 'next/image';

const Classifications = () => {
  return (
    <div className="flex justify-between space-x-2 w-full">
      {/* FIFA Card */}
      <div className="flex-1 bg-[#1b2124] rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-[#2c353a] transition-colors">
        <div className="flex items-center space-x-3">
          <span className="text-blue-500 font-black text-xl">FIFA</span>
          <span className="text-blue-400 text-sm font-semibold">FIFA Classificações</span>
        </div>
        <span className="text-gray-400 text-lg">›</span>
      </div>

      {/* UEFA Card */}
      <div className="flex-1 bg-[#1b2124] rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-[#2c353a] transition-colors">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xs border-2 border-yellow-500">
            UEFA
          </div>
          <span className="text-blue-400 text-sm font-semibold">UEFA Classificações</span>
        </div>
        <span className="text-gray-400 text-lg">›</span>
      </div>
    </div>
  );
};

export default Classifications;
