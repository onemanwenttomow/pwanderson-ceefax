"use client";

import { useState } from "react";
import { useOthers, useRoom, useMyPresence } from "../liveblocks.config";

export default function Remote() {
  const [channel, setChannel] = useState("000");
  const others = useOthers();
  const userCount = others.length;
  const myRoom = useRoom();
  const [presence, setPresence] = useMyPresence();
  console.log("myPresence", presence);
  console.log("others: ", others);
  console.log("myRoom", myRoom);
  return (
    <>
      <div className="mb-4 flex justify-between">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className="h-16 w-16 rounded-full bg-gray-700"
            onClick={() => setPresence({ num })}
          >
            {num}
          </button>
        ))}
      </div>
      <div className="mb-4 flex justify-between">
        {[4, 5, 6].map((num) => (
          <button
            key={num}
            className="h-16 w-16 rounded-full bg-gray-700"
            onClick={() => setPresence({ num })}
          >
            {num}
          </button>
        ))}
      </div>
      <div className="mb-4 flex justify-between">
        {[7, 8, 9].map((num) => (
          <button
            key={num}
            className="h-16 w-16 rounded-full bg-gray-700"
            onClick={() => setPresence({ num })}
          >
            {num}
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          className="h-10 w-10 rounded-full bg-teletext-red"
          onClick={() => setPresence({ channel: "300" })}
        ></button>
        <button
          className="h-10 w-10 rounded-full bg-teletext-green"
          onClick={() => setPresence({ channel: "400" })}
        ></button>
        <button
          className="h-10 w-10 rounded-full bg-teletext-yellow"
          onClick={() => setPresence({ channel: "500" })}
        ></button>
        <button
          className="h-10 w-10 rounded-full bg-teletext-lightblue"
          onClick={() => setPresence({ channel: "600" })}
        ></button>
      </div>
    </>
  );
}
