import albums from "../../../data/dataAlbums";
import { GenreList } from "../../groups/Genrelist/Genrelist";
import { ContentCard } from "../../primitives/ContentCard/ContentCard";
import { useSelector } from "react-redux";
import "./Catalog.scss";

export const Catalog = () => {
  const albumsList = useSelector((state) => state.albumsList);
  const searchRequest = useSelector((state) => state.searchRequest);

  return (
    <div className="catalog">
      <div className="catalog_genres">
        <h2>Genres</h2>
        <GenreList />
      </div>
      <div className="catalog_content">
        {albumsList.length > 0 ? (
          <div>
            {albumsList.map((el, index) => (
              <ContentCard key={el.name} album={el} />
            ))}
          </div>
        ) : (
          <div className="search-placeholder">
            <h5>
              There is no result for <span>{searchRequest}</span> search
            </h5>
          </div>
        )}
      </div>
    </div>
  );
};
