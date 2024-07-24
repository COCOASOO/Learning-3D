'use client';

import React from 'react';

const SideMenu = ({ resources, baseHealth, wave, startWave, isWaveActive }) => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl mb-4">Menu</h2>
        <div className="mb-4">
          <p className="mb-2">Coins: {resources.coins}</p>
          <p className="mb-2">Base Health: {baseHealth}</p>
          <p className="mb-2">Wave: {wave}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg mb-2">Instructions:</h3>
          <p>Build defenses to protect the base!</p>
          <p>Click on empty plots to build defenses (10 coins each).</p>
        </div>
        <button 
          className={`bg-${isWaveActive ? 'gray' : 'green'}-500 p-2 rounded mt-4`}
          onClick={startWave}
          disabled={isWaveActive}
        >
          {isWaveActive ? 'Wave in Progress' : 'Start Wave'}
        </button>
      </div>
      <div className="text-center">
        <p>Objective:</p>
        <p>Stop the enemies from reaching the base!</p>
      </div>
    </div>
  );
};

export default SideMenu;
