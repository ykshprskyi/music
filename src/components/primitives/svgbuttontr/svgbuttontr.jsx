import { PrIcon } from "../PrIcon/PrIcon";

export const Svgbuttontr = ({ icon, btnText, navigateTo }) => {
  return (
    <button
      className="buttons__item buttons_item__transparent "
      onClick={navigateTo}
    >
      <PrIcon className="buttons__item__icon" iconName={icon} />
      <p className="buttons__item_ _text">{btnText}</p>
    </button>
  );
};
