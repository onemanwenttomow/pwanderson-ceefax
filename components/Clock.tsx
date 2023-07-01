"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("XX:XX:XX");

  const localTime = () => new Date().toLocaleTimeString();

  useEffect(() => {
    setTime(localTime());
    const intervalId = setInterval(() => setTime(localTime()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <li className="text-teletext-yellow">{time}</li>;
}
