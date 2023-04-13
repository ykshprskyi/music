import { useNavigate } from "react-router-dom";
import { Svgbuttontr } from "../Svgbuttontr/Svgbuttontr";
import "./Header.scss";
export const Header = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => navigate(path);
  return (
    <header className="header">
      <div className="header_left">
        <Svgbuttontr
          icon={"logo"}
          btnText={"Tune Trove"}
          navigateTo={() => navigateTo("/")}
        ></Svgbuttontr>
        <Svgbuttontr
          icon={"catalog-white"}
          btnText={"All albums"}
          navigateTo={() => navigateTo("catalog")}
        ></Svgbuttontr>
      </div>
      <div className="header_right">
        <Svgbuttontr icon={"playlist"} btnText={"Playlist"}></Svgbuttontr>
      </div>
    </header>
  );
};
