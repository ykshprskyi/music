import React from "react";
import { Canvas } from "../../primitives/Canvas/Canvas";
import { Technology } from "../../primitives/Technology/Technology.tsx";
import "./Technologies.scss";

export const Technologies: React.FC = () => {
  const technologies: { iconName: string; title: string }[] = [
    { title: "HTML", iconName: "html" },
    { title: "SCSS ", iconName: "sass" },
    { title: "JS ", iconName: "js" },
    { title: "TS ", iconName: "ts" },
    { title: "React ", iconName: "react" },
    { title: "Redux ", iconName: "redux" },
    { title: "react-router ", iconName: "react-router" },
    { title: "npm ", iconName: "npm" },
  ];
  return (
    <div className="technologies">
      <Canvas />
      <h1 className="technologies_title">Used Technologies</h1>
      <div className="technologies_list">
        {technologies.map((el, index) => (
          <Technology key={index} iconName={el.iconName} title={el.title} />
        ))}
      </div>
    </div>
  );
};
