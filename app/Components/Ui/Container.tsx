import React, { ReactNode } from "react";

//Container - full with
interface ContainerProps {
  children: ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto w-full max-w-7xl">
    { children }
    </div>
  );
};

export default Container;