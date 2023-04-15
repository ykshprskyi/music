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
  const clickHandler = (e) => {
    e.stopPropagation();
    dispatch(actions.deleteFromPlaylist(albumId));
  };

  return (
    <div>
      <div className="album_content__cover">
        <PrImage name={albumCover} />
      </div>
      <div>{albumName}</div>
      <div>{albumAuthor}</div>
      <div onClick={clickHandler}>
        <PrIcon iconName={"cross"} />
      </div>
    </div>
  );
};
