import { GenreList } from "../../groups/Genrelist/Genrelist";
import { ContentCard } from "../../primitives/ContentCard/ContentCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
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
          <>
            {albumsList.map((el, index) => (
              <ContentCard key={index} album={el} />
            ))}
          </>
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
