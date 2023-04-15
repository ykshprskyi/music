import { useNavigate } from "react-router-dom";
import { Svgbuttontr } from "../Svgbuttontr/Svgbuttontr";
import { useDispatch } from "react-redux";
import { actions } from "../../../store/actions";
import { PlaylistBtn } from "../PlaylistBtn/PlaylistBtn";
import { PlaylistPanel } from "../PlaylistPanel/PlaylistPanel";
import "./Header.scss";
export const Header = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => navigate(path);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <div className="header_left">
        <div className="header_left__item">
          <Svgbuttontr
            icon={"logo"}
            btnText={"Tune Trove"}
            navigateTo={() => navigateTo("/")}
          ></Svgbuttontr>
        </div>
        <div
          className="header_left__item"
          onClick={() => dispatch(actions.selectGenre("none"))}
        >
          <Svgbuttontr
            icon={"catalog-white"}
            btnText={"All albums"}
            navigateTo={() => navigateTo("catalog")}
          ></Svgbuttontr>
        </div>
      </div>
      <div className="header_right">
        <PlaylistBtn />
        <PlaylistPanel />
      </div>
    </header>
  );
};
