import { useNavigate } from "react-router-dom";
import { Svgbuttontr } from "../Svgbuttontr/Svgbuttontr";
import { useDispatch } from "react-redux";
import { actions } from "../../../store/actions";
import { PlaylistBtn } from "../PlaylistBtn/PlaylistBtn";
import { PlaylistPanel } from "../PlaylistPanel/PlaylistPanel";
import { useState, useEffect } from "react";
import "./Header.scss";
export const Header = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => navigate(path);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const openClickHandler = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };
  const closeClickHandler = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [isOpen]);
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
        <div className="header_right__btn" onClick={openClickHandler}>
          <PlaylistBtn />
        </div>
        {isOpen ? (
          <div className="header_right__panel is-open">
            <PlaylistPanel isOpen={isOpen} setIsOpen={closeClickHandler} />
          </div>
        ) : (
          <div className="header_right__panel ">
            <PlaylistPanel isOpen={isOpen} setIsOpen={closeClickHandler} />
          </div>
        )}
      </div>
    </header>
  );
};
