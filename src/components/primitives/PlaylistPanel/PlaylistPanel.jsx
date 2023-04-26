import { useSelector } from "react-redux";
import { PlaylistItem } from "../PlaylistItem/PlaylistItem";
import { Link, useLocation } from "react-router-dom";
import { PrIcon } from "../PrIcon/PrIcon";
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
              <div className="playlist_panel__closebtn" onClick={setIsOpen}>
                <PrIcon iconName={"cross"} />
              </div>
            </div>
            <div className="playlist_panel__list__items">
              {playlist.map((el, index) => (
                <PlaylistItem
                  key={el.name}
                  albumId={el.id}
                  albumName={el.name}
                  albumAuthor={el.author}
                  albumCover={el.cover}
                  setIsOpen={setIsOpen}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="empty">
            <div className="empty_message">
              <h3>Your Playlist is empty.</h3>
              {location !== "/catalog" ? (
                <div className="empty_message__link" onClick={setIsOpen}>
                  <Link to="/catalog">Browse albums</Link>
                </div>
              ) : null}
            </div>
            <div className="playlist_panel__closebtn" onClick={setIsOpen}>
              <PrIcon iconName={"cross"} />
            </div>
          </div>
        )}
        {playlist.length !== 0 ? (
          <div className="playlist_panel__total">Total: {count}</div>
        ) : (
          <></>
        )}
      </div>
      <div className="playlist_panel__overlay" onClick={setIsOpen}></div>
    </>
  );
};
