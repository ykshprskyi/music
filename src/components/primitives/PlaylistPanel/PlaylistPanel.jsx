import { useSelector } from "react-redux";
import { PlaylistItem } from "../PlaylistItem/PlaylistItem";
import { Link, useLocation } from "react-router-dom";
import "./PlaylistPanel.scss";

export const PlaylistPanel = ({ isOpen, setIsOpen }) => {
  const playlist = useSelector((state) => state.playlist);
  const location = useLocation().pathname;
  const count = playlist.length;
  return (
    <>
      <div className="playlist_panel__list">
        {playlist.length !== 0 ? (
          <>
            <div className="playlist_panel__head">
              <h2 className="playlist_panel__title">Your Playlist:</h2>
              <div onClick={setIsOpen}>Close</div>
            </div>
            <div className="playlist_panel__list__items">
              {playlist.map((el, index) => (
                <PlaylistItem
                  key={el.name}
                  albumId={el.id}
                  albumName={el.name}
                  albumAuthor={el.author}
                  albumCover={el.cover}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="empty-message">
            <h3>Your Playlist is empty.</h3>
            {location !== "/catalog" ? (
              <div className="empty-message_link" onClick={setIsOpen}>
                <Link to="/catalog">Browse albums</Link>
              </div>
            ) : null}
          </div>
        )}
        <div className="playlist_panel__total">Total: {count}</div>
      </div>
      <div className="playlist_panel__overlay" onClick={setIsOpen}></div>
    </>
  );
};
