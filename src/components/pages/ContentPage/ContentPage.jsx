import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const ContentPage = () => {
  const albumId = useParams();
  const albums = useSelector((state) => state.albumsList);
  const selectedAlbum = albums.find(
    (album) => album.id.toString() === albumId.albumId
  );
  return (
    <div className="game-page">
      <div className="first-row">
        <h1>{selectedAlbum.name}</h1>
      </div>
      <div className="game-content"></div>
    </div>
  );
};
