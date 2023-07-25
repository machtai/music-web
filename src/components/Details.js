import React, { useContext } from "react";
import { Songs } from '../Context';

export default function Details() {
  const { song } = useContext(Songs);
  return (
    <div className="col-span-1  p-2 mx-2">
      <h2 className="text-blue-500 font-bold">Now playing</h2>
      <h2 className="text-neutral-400 text-2xl">{song.name}</h2>
      <div className="w-[240px] m-auto mt-3 overflow-x-auto">
        <img
          src={song.links.images[0].url}
          alt="avatar"
          className="w-full h-auto"
        />    
      </div>
      <div className="flex justify-evenly items-center mt-3">
        <img
          src={song.links.images[1].url}
          alt="avatar"
          className="w-[70px] h-[70px] rounded-full"
        />
        <span className="text-xl text-white">{song.author}</span>
      </div>
    </div>
  );
}
