import { PrIcon } from "../PrIcon/PrIcon";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { actions } from "../../../store/actions";
import "./AddToPlaylist.scss";

export const AddToPlaylist = ({ albumId }) => {
  const dispatch = useDispatch();
  const [isInPlaylist, setIsInPlaylist] = useState(false);
  const playlist = useSelector((state) => state.playlist);
  useEffect(() => {
    setIsInPlaylist(playlist.some((el) => el.id === albumId));
  }, [playlist]);

  const clickHandler = (e) => {
    e.stopPropagation();
    {
      isInPlaylist
        ? dispatch(actions.deleteFromPlaylist(albumId))
        : dispatch(actions.addToPlaylist(albumId));
    }
  };
  return (
    <div className="Add_btn" onClick={clickHandler}>
      {isInPlaylist ? (
        <div className="Add_btn_item">
          <div className="Add_btn__icon">
            <PrIcon iconName={"check"} />
          </div>
          <span className="Add_btn__text">Added to Playlist</span>
        </div>
      ) : (
        <div className="Add_btn_item">
          <div className="Add_btn__icon">
            <PrIcon iconName={"plus"} />
          </div>
          <span className="Add_btn__text">Add to Playlist</span>
        </div>
      )}
    </div>
  );
};
