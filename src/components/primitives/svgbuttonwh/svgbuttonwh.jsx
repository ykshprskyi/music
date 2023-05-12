import { Link } from "react-router-dom";
import { PrIcon } from "../PrIcon/PrIcon";
import "./Svgbuttonwh.scss";

export const Svgbuttonwh = ({ icon, btnText, outerLink, innerLink }) => {
  return (
    <button className="buttons_item buttons_item__white">
      {outerLink ? (
        <a
          className="buttons_item__link"
          rel="noreferrer"
          target="_blank"
          href={outerLink}
        ></a>
      ) : (
        <Link className="buttons_item__link" to={innerLink} />
      )}
      <div className="buttons_item__icon">
        <PrIcon className="buttons_item__icon" iconName={icon} />
      </div>
      <p className="buttons_item__text">{btnText}</p>
    </button>
  );
};
