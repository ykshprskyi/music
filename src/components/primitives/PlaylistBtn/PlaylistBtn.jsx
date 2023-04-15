import { PrIcon } from "../PrIcon/PrIcon";
import { useSelector } from "react-redux";
import "./PlaylistBtn.scss";

export const PlaylistBtn = () => {
  const playlist = useSelector((state) => state.playlist);
  const count = playlist.length;
  return (
    <div className="playlist">
      <div className="playlist_icon">
        <PrIcon iconName={"playlist"} />
      </div>
      <div className="playlist_text">Playlist: {count}</div>
    </div>
  );
};
