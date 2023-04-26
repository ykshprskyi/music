import { PrIcon } from "../PrIcon/PrIcon";
import { PrImage } from "../PrImage/PrImage";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../../../store/actions";
import "./PlaylistItem.scss";

export const PlaylistItem = ({
  albumId,
  albumName,
  albumAuthor,
  albumCover,
  setIsOpen,
}) => {
  const dispatch = useDispatch();
  const deleteClickHandler = (e) => {
    e.stopPropagation();
    dispatch(actions.deleteFromPlaylist(albumId));
  };

  return (
    <div className="playlist_item">
      <div className="playlist_item__wrapper">
        <div className="playlist_item__link">
          <Link to={`catalog/${albumId}`} onClick={setIsOpen} />
        </div>
        <div className="playlist_item__cover">
          <PrImage name={albumCover} />
        </div>
        <div className="playlist_item__comp">
          {albumName} - {albumAuthor}
        </div>
        <div className="playlist_item__btn" onClick={deleteClickHandler}>
          <PrIcon iconName={"roundcross"} />
        </div>
      </div>
    </div>
  );
};
