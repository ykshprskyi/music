import { PrIcon } from "../PrIcon/PrIcon";
import { PrImage } from "../PrImage/PrImage";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../store/actions";
import "./PlaylistItem.scss";

export const PlaylistItem = ({
  albumId,
  albumName,
  albumAuthor,
  albumCover,
}) => {
  const dispatch = useDispatch();
  const deleteClickHandler = (e) => {
    e.stopPropagation();
    dispatch(actions.deleteFromPlaylist(albumId));
  };

  return (
    <div className="playlist_item">
      <div className="playlist_item__wrapper">
        <div className="playlist_item__cover">
          <PrImage name={albumCover} />
        </div>
        <div className="playlist_item__comp">
          {albumName} - {albumAuthor}
        </div>
        <div className="playlist_item__btn" onClick={deleteClickHandler}>
          <PrIcon iconName={"cross"} />
        </div>
      </div>
    </div>
  );
};
