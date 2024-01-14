"use client";

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GlobalStyleProvider({ children }: Props) {
  return <div className="h-full p-10 flex flex-row gap-1">{children}</div>;
}

export default GlobalStyleProvider;
