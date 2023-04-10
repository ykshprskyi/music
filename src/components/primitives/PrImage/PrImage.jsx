export const PrImage = ({ name }) => {
  const iconsrc = require(`../../../assets/images/${name}`);
  return <img className="image" src={iconsrc} alt={name} />;
};
