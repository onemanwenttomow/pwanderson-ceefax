"use client";

import { ReactNode, useState } from "react";
import { isMobile } from "react-device-detect";
import { useEffect } from "react";
import Remote from "./Remote";

export default function RemoteOrCeefax({ children }: { children: ReactNode }) {
  const [showRemote, setShowRemote] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setShowRemote(true);
    }
  }, []);

  if (showRemote) {
    return (
      <div>
        <Remote />
      </div>
    );
  }
  return children;
}
