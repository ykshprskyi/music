import React from "react";
import { PrIcon } from "../PrIcon/PrIcon";
import "./Technology.scss";

type Props = {
  title: string;
  iconName: string;
};
export const Technology: React.FC<Props> = ({ title, iconName }) => {
  return (
    <div className="technology_item">
      <div className="technology_item__icon">
        <PrIcon iconName={iconName} />
      </div>
      <div className="technology_item__text">{title}</div>
    </div>
  );
};
