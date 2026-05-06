import React, { useEffect } from 'react';
import sound from '../assets/fa.mp3.mp3';

const FA = () => {

  useEffect(() => {

    const audio = new Audio(sound);

    audio.play();

  }, []);

  return (
    <div className=' bg-red-600 min-h-screen flex items-center justify-center'>

      <div className=' h-52 bg-white text-5xl  font-bold animate-pulse flex items-center justify-center rounded-3xl shadow-2xl'>
        Faaahh!!!!
      </div>

    </div>
  );
};

export default FA;