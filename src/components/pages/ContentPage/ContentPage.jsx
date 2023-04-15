import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PrImage } from "../../primitives/PrImage/PrImage";
import { AddToPlaylist } from "../../primitives/AddToPlaylist/AddToPlaylist";
import "./ContentPage.scss";
export const ContentPage = () => {
  const albumId = useParams();
  const albums = useSelector((state) => state.albumsList);
  const selectedAlbum = albums.find(
    (album) => album.id.toString() === albumId.albumId
  );
  return (
    <div className="content_page">
      <div className="content_page_left">
        <PrImage name={selectedAlbum.cover} />{" "}
      </div>
      <div className="content_page_right">
        <h1>{selectedAlbum.name}</h1>
        <h3>{selectedAlbum.author}</h3>
        <p>{selectedAlbum.desc}</p>
        <ul>
          {selectedAlbum.tracklist.map((item, index) => (
            <li key={index}>
              {index + 1}. {item}
            </li>
          ))}
        </ul>

        <div></div>
        <div>Release - {selectedAlbum.release}</div>
        <a href={selectedAlbum.link} target="_blank" rel="noreferrer">
          Open in Spotify
        </a>
        <AddToPlaylist albumId={selectedAlbum.id} />
      </div>
    </div>
  );
};
