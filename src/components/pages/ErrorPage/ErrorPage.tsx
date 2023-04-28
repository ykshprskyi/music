import React from "react";
import { PrIcon } from "../../primitives/PrIcon/PrIcon";
import { useLocation, NavigateFunction, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Canvas } from "../../primitives/Canvas/Canvas";
import "./ErrorPage.scss";

export const ErrorPage: React.FC = () => {
  const imagePath: string = "errorpage";
  const location: string = useLocation().pathname;
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => {
    const navigateTimer = setTimeout(() => {
      navigate("catalog");
    }, 10000);
    return () => clearTimeout(navigateTimer);
  }, [navigate]);

  return (
    <div className="error-page">
      <Canvas />
      <div className="error-page__banner">
        <div className="error-page__banner__image">
          <PrIcon iconName={imagePath} />
        </div>
        <div className="error-page__banner__text">
          <div className="error-page__banner__text__message">
            <span className="error-page__banner__text__location">
              {location}
            </span>
            is not available!
          </div>
          <div className="error-page__banner__text__hint">
            The page you tried to access is not available. You will be
            redirected to our catalog section shortly
          </div>
        </div>
      </div>
    </div>
  );
};
