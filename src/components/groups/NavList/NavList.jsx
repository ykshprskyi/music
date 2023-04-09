import { Svgbuttonwh } from "../../primitives/Svgbuttonwh/Svgbuttonwh";
export const NavList = () => {
  const navList = [
    { icon: "catalog-black", btnText: "Browse albums", innerLink: "catalog" },
    { icon: "404", btnText: "404 page", innerLink: "404" },
    {
      icon: "git",
      btnText: "commit Log",
      outerLink: "https://github.com/ykshprskyi/Music/commits/main",
    },
    {
      icon: "react-logo",
      btnText: "technologies",
      innerLink: "technologies",
    },
    {
      icon: "githublogo-dark",
      btnText: "source code",
      outerLink: "https://github.com/ykshprskyi/Music",
    },
    {
      icon: "telegram",
      btnText: "contact me",
      outerLink: "https://t.me/ykshprsky",
    },
  ];
  return (
    <div className="navlist">
      <h2 className="navlist_title">Navigation</h2>
      <div className="buttons buttons_navigation">
        {navList.map((el, index) =>
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
