import { Svgbuttonwh } from "../../primitives/Svgbuttonwh/Svgbuttonwh";
import { useSelector } from "react-redux";
import albums from "../../../data/dataAlbums";
import "./Buttonsrow.scss";

export const Buttonsrow = () => {
  const albumsList = useSelector((state) => state.albumsList);
  const randomAlbumId = Math.floor(Math.random() * albumsList.length);
  const btnsList = [
    {
      icon: "enter",
      btnText: "Start",
      innerLink: "/catalog",
    },
    {
      icon: "random",
      btnText: "Random Album",
      innerLink: `/catalog/${randomAlbumId}`,
    },
    {
      icon: "githublogo-dark",
      btnText: "GitHub",
      outerLink: "https://github.com/ykshprskyi",
    },
    {
      icon: "linkedin",
      btnText: "LinkedIn",
      outerLink: "https://www.linkedin.com/in/yurii-kashperskyi-7337b8244/",
    },
  ];
  return (
    <div>
      <div className="buttons buttons_row">
        {btnsList.map((el, index) =>
          el.outerLink ? (
            <Svgbuttonwh
              key={index}
              icon={el.icon}
              btnText={el.btnText}
              outerLink={el.outerLink}
            />
          ) : (
            <Svgbuttonwh
              key={index}
              icon={el.icon}
              btnText={el.btnText}
              innerLink={el.innerLink}
            />
          )
        )}
      </div>
    </div>
  );
};
