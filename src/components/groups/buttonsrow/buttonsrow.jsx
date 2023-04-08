import { svgbuttonwh } from "../../primitives/svgbuttonwh/svgbuttonwh";
import { useSelector } from "react-redux";

export const buttonsrow = () => {
  const albums = useSelector((state) => state.albumsList);
  const randomAlbumId = Math.floor(Math.random() * albums.length);
  const btnsList = [
    { icon: "enter", btnText: "start", innerLink: "/browse" },
    {
      icon: "dice",
      btnText: "Random Album",
      innerLink: `/albums/${randomAlbumId}`,
    },
    {
      icon: "githublogo-dark",
      btnText: "gitHub",
      outerLink: "https://github.com/ykshprskyi",
    },
    {
      icon: "linkedin",
      btnText: "linkedIn",
      outerLink: "https://www.linkedin.com/in/yurii-kashperskyi-7337b8244/",
    },
  ];
  return (
    <div>
      <ul className="buttons buttons_row">
        {btnsList.map((el, index) =>
          el.outerLink ? (
            <svgbuttonwh
              key={index}
              icon={el.icon}
              btnText={el.btnText}
              outerLink={el.outerLink}
            />
          ) : (
            <svgbuttonwh
              key={index}
              icon={el.icon}
              btnText={el.btnText}
              innerLink={el.innerLink}
            />
          )
        )}
      </ul>
    </div>
  );
};
