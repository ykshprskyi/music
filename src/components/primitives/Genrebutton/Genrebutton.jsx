// import { useDispatch } from "react-redux";
// import { actions } from "../../store/actions";
import { PrIcon } from "../PrIcon/PrIcon";
import "./Genrebutton.scss";
export const Genrebutton = ({ genreName, icon }) => {
  // const dispatch = useDispatch();

  return (
    <div
      className="genre_btn"
      // onClick={() => dispatch(actions.selectGenre(genreName))}
    >
      <div className="genre_btn__icon">
        <PrIcon iconName={icon} />
      </div>
      <h4 className="genre_btn__text">{genreName}</h4>
    </div>
  );
};
