import { Link } from "react-router-dom";
import { PrIcon } from "../PrIcon/PrIcon";

export const Svgbuttonwh = ({ icon, btnText, outerLink, innerLink }) => {
  return (
    <button className="buttons__item">
      {outerLink ? (
        <a className="buttons__item__link" target="_blank" href={outerLink}></a>
      ) : (
        <Link to={innerLink} />
      )}
      <PrIcon className="buttons__item__icon" iconName={icon} />
      <p className="buttons__item_ _text">{btnText}</p>
    </button>
  );
};
