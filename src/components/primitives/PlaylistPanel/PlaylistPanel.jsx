import { useSelector } from "react-redux";
import { PlaylistItem } from "../PlaylistItem/PlaylistItem";
import { Link, useLocation } from "react-router-dom";
import "./PlaylistPanel.scss";

export const PlaylistPanel = () => {
  const playlist = useSelector((state) => state.playlist);
  const location = useLocation().pathname;
  return (
    <div>
      {playlist.length !== 0 ? (
        playlist.map((el, index) => (
          <PlaylistItem
            key={el.name}
            albumId={el.id}
            albumName={el.name}
            albumAuthor={el.author}
            albumCover={el.cover}
          />
        ))
      ) : (
        <div className="">
          Your Playlist is empty.
          {location !== "/catalog" ? (
            <div className="">
              <Link to="/catalog">Browse albums</Link>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};
