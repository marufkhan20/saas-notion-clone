import { FC, ReactNode } from "react";

interface TemplateProps {
  children: ReactNode;
}

const Template: FC<TemplateProps> = ({ children }) => {
  return <div className="h-screen p-6 flex justify-center">{children}</div>;
};

export default Template;
