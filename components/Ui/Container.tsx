import React, { ReactNode } from "react";

//Container
interface ContainerProps {
  children: ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container border border-1 p-1">
    { children }
    </div>
  );
};

export default Container;