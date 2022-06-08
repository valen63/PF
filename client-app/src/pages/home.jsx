import React from "react";
import darkTheme from "../styles/Pages/homeDark.module.css";
import lightTheme from "../styles/Pages/homeLight.module.css";
import { ThemeProvider } from "styled-components";
import codeLearnGold from "../Components/icons/codelearngold.png";
import { Link } from "react-router-dom";
import NavBar from "../Components/navbar/navBar";
import NavBarUser from "../components/navbar/navBarUser";

function Home(props) {
  let style = darkTheme;
  return (
    <ThemeProvider
      theme={
        props.theme === "light" ? (style = lightTheme) : (style = darkTheme)
      }
    >
      <div className={style.flexContainer}>
        <div className={style.container}></div>
        <div className={style.flexContainer2}>
          <div className={style.container2}></div>
          <div className={style.flexContainer3}>
            <div className={style.container31}>
              <img src={codeLearnGold} className={style.logoCont3} />
              <div className={style.container3Text}>
                <h3>Upgrade to CodeLearn Gold now!</h3>
                <h1>
                  Support CodeLearn and get some fancy upgrades like Pro Stats,
                  Head-to-head comparisons and more.
                </h1>
                <div className={style.button}>
                  <Link to="#">Learn More</Link>
                </div>
              </div>
            </div>
            <div className={style.container3}></div>
            <div className={style.container3}></div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Home;
