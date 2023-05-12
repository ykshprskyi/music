import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PrImage } from "../../primitives/PrImage/PrImage";
import { AddToPlaylist } from "../../primitives/AddToPlaylist/AddToPlaylist";
import { ReactComponent as ExternalLink } from "../../../assets/images/externallink.svg";
import { ReactComponent as ArrowDown } from "../../../assets/images/arrowdown.svg";
import { Canvas } from "../../primitives/Canvas/Canvas";
import { useState } from "react";
import "./ContentPage.scss";

export const ContentPage = () => {
  const albumId = useParams();
  const albums = useSelector((state) => state.albumsList);
  const selectedAlbum = albums.find(
    (album) => album.id.toString() === albumId.albumId
  );
  const [Expanded, setExpanded] = useState(false);
  const ExpandClickHandler = (e) => {
    e.stopPropagation();
    Expanded ? setExpanded(false) : setExpanded(true);
  };
  return (
    <div className="album-full">
      <Canvas />
      <div className="album-full_wrapper">
        <div className="album-full_left">
          <div className="album-full_left__image">
            <PrImage name={selectedAlbum.cover} />
          </div>
        </div>
        <div className="album-full_right">
          <div className="album-full_right__name">
            <h1>{selectedAlbum.name}</h1>
          </div>
          <div className="album-full_right__author">
            <h3>{selectedAlbum.author}</h3>
          </div>
          <div className="album-full_right__description">
            <p>{selectedAlbum.desc}</p>
          </div>
          <div className="album-full_right__tracklist">
            <span className="expand_btn" onClick={ExpandClickHandler}>
              Expand tracklist
              <ArrowDown
                className={`expand_btn__icon ${Expanded ? "opened" : ``}`}
              />
            </span>

            <ul
              className={`album-full_right__tracklist__list ${
                Expanded ? "is-open" : ``
              }`}
            >
              {selectedAlbum.tracklist.map((item, index) => (
                <li key={index}>
                  {index + 1}. {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="album-full_right__date">
            Released - {selectedAlbum.release}
          </div>
          <div className="album-full_right__btns">
            <div className="album-full_right__btns__link album-full_right__btns__item">
              <ExternalLink className="album-full_right__btns__link__icon" />

              <a href={selectedAlbum.link} target="_blank" rel="noreferrer">
                Open in Spotify
              </a>
            </div>
            <div className="album-full_right__btns__addbtn album-full_right__btns__item">
              <AddToPlaylist albumId={selectedAlbum.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
