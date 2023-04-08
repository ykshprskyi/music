import { Link } from "react-router-dom";
import { prsvg } from "../../primitives/prsvg/prsvg";

export const svgbuttonwh = ({ icon, btnText, outerLink, innerLink }) => {
  return (
    <button className="buttons__item">
      {outerLink ? (
        <a className="buttons__item__link" target="_blank" href={outerLink}></a>
      ) : (
        <Link to={innerLink} />
      )}
      <prsvg className="buttons__item__icon" iconName={icon} />
      <p className="buttons__item__text">{btnText}</p>
    </button>
  );
};
