import { Genrebutton } from "../../primitives/Genrebutton/Genrebutton";
export const GenreList = () => {
  const genres = [
    { name: "Nu-metal", icon: "numetal" },
    { name: "Pop", icon: "pop" },
    { name: "Hip-Hop", icon: "hiphop" },
    { name: "Jazz", icon: "jazz" },
    { name: "Thrash Metal", icon: "thrash" },
    { name: "Alternative", icon: "alternative" },
    { name: "Indie", icon: "indie" },
  ];
  return (
    <div className="catalog_genres_list">
      {genres.map((el, index) => (
        <Genrebutton genreName={el.name} key={index} icon={el.icon} />
      ))}
    </div>
  );
};
