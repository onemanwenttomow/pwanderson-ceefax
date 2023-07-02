"use client";

import { useOthers, useRoom, useMyPresence } from "../liveblocks.config";

export default function Test() {
  const others = useOthers();
  const userCount = others.length;
  console.log("others: ", others);

  const [goTo] = others.filter((other) => other.presence.channel);
  const [num] = others.filter((other) => other.presence.num);

  console.log("goTo: ", goTo);
  return (
    <div>
      There are {userCount} other user(s) online.
      <hr />
      Go to channel: {goTo?.presence.channel}
      <hr />
      Num: {num?.presence.num}
    </div>
  );
}
