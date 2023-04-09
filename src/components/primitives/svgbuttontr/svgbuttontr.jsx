import { PrIcon } from "../PrIcon/PrIcon";
import "./Svgbuttontr.scss";
export const Svgbuttontr = ({ icon, btnText, navigateTo }) => {
  return (
    <button
      className="buttons_item buttons_item__transparent "
      onClick={navigateTo}
    >
      <div className="buttons_item__icon">
        <PrIcon iconName={icon} />
      </div>
      <p className="buttons_item__text">{btnText}</p>
    </button>
  );
};
