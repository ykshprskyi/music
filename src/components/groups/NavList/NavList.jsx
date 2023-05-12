import { Svgbuttonwh } from "../../primitives/Svgbuttonwh/Svgbuttonwh";
import { useNavigate } from "react-router-dom";
import "./NavList.scss";

export const NavList = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => navigate(path);
  const navList = [
    { icon: "catalog-black", btnText: "Browse albums", innerLink: "catalog" },
    { icon: "404", btnText: "404 page", innerLink: "404" },
    {
      icon: "git",
      btnText: "Commit Log",
      outerLink: "https://github.com/ykshprskyi/Music/commits",
    },
    {
      icon: "react-logo",
      btnText: "Technologies",
      innerLink: "technologies",
    },
    {
      icon: "githublogo-dark",
      btnText: "Source code",
      outerLink: "https://github.com/ykshprskyi/Music",
    },
    {
      icon: "telegram",
      btnText: "Contact me",
      outerLink: "https://t.me/ykshprsky",
    },
  ];
  return (
    <div className="navlist">
      <h2 className="navlist_title">Navigation</h2>
      <div className="buttons navlist_buttons buttons_navigation">
        {navList.map((el, index) =>
          el.outerLink ? (
            <Svgbuttonwh
              key={index}
              icon={el.icon}
              btnText={el.btnText}
              navigateTo={() => navigateTo(`/${el.innerLink}`)}
            />
          ) : (
            <Svgbuttonwh
              key={index}
              icon={el.icon}
              btnText={el.btnText}
              navigateTo={() => navigateTo(`/${el.innerLink}`)}
            />
          )
        )}
      </div>
    </div>
  );
};
