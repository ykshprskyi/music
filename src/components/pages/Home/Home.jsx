import { Buttonsrow } from "../../groups/Buttonsrow/Buttonsrow";
import { NavList } from "../../groups/NavList/NavList";
import { Canvas } from "../../primitives/Canvas/Canvas";
import "./Home.scss";

export const HomePage = () => {
  return (
    <div className="home">
      <div className="home_left">
        <div className="home_left_text">
          <h1 className="home_left__title">Tune Trove</h1>
          <p className="home_left__desc">
            Our service will help you <span>discover</span> new and exciting
            music genres and artists to expand your playlist. We offer to
            explore hundreds of new music genres that will become a discovery
            for you and add enjoyment to your listening experience. Create a
            unique
            <span> playlist </span>
            with our service and broaden your musical horizons by exploring new
            music.
          </p>
        </div>
        <div className="home_left__buttons">
          <Buttonsrow></Buttonsrow>
        </div>
      </div>
      <div className="home_right">
        <NavList />
      </div>
    </div>
  );
};
