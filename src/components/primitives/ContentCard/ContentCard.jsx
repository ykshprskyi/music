import { PrImage } from "../PrImage/PrImage";
import { Link } from "react-router-dom";
import { AddToPlaylist } from "../../primitives/AddToPlaylist/AddToPlaylist";
import "./ContentCard.scss";

export function ContentCard({ album }) {
  return (
    <div className={`album album-${album.id}`}>
      <div className="album_content">
        <Link className="album_content__link" to={`${album.id}`} />
        <div className="album_content__cover">
          <PrImage name={album.cover} />
        </div>
        <div className="album_content__name">
          <h3>{album.name}</h3>
        </div>
        <div className="album_content__author">
          <h5>{album.author}</h5>
        </div>
        <AddToPlaylist albumId={album.id} />
      </div>
    </div>
  );
}
