import { PrImage } from "../PrImage/PrImage";
import { Link } from "react-router-dom";
import "./ContentCard.scss";

export const ContentCard = ({ id, name, author, cover }) => {
  return (
    <div className={`album album-${id}`}>
      <div className="album_content">
        <Link className="album_content__link" to={`/albums/${id}`} />
        <div className="album_content__cover">
          <PrImage name={cover} />
        </div>
        <div className="album_content__name">
          <h3>{name}</h3>
        </div>
        <div className="album_content__author">
          <h4>{author}</h4>
        </div>
        <div className="album_content__add">Add to playlist</div>
      </div>
    </div>
  );
};
