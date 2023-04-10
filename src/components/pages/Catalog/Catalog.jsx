import albums from "../../../data/dataAlbums";
import { GenreList } from "../../groups/Genrelist/Genrelist";
import { ContentCard } from "../../primitives/ContentCard/ContentCard";
import "./Catalog.scss";

export const Catalog = () => {
  const albumsList = albums;
  return (
    <div className="catalog">
      <div className="catalog_genres">
        <h2>Genres</h2>
        <GenreList />
      </div>
      <div className="catalog_content">
        {albumsList.map((el, index) => (
          <ContentCard
            key={index}
            id={el.id}
            name={el.name}
            author={el.author}
            cover={el.cover}
          />
        ))}
      </div>
    </div>
  );
};
