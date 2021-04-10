import React from "react";
import { useSelector } from "react-redux";
import Routes from "./routes/routes";

function App() {
  const theme = useSelector(state => state.theme);
  //console.log(theme);
  return (
    <div
      id="App"
      data-asidetheme={theme[0].AsideTheme}
      data-headertheme={theme[0].HeaderTheme}
      data-headermenutheme={theme[0].HeaderMenuTheme}
      data-logobartheme={theme[0].LogoBarTheme}
      className={`quick-panel-right demo-panel-right offcanvas-right ${
        theme[2].DesktopFixed === true ? "header-fixed" : "header-static"
      } ${theme[2].MobileFixed === true ? "header-mobile-fixed" : ""} ${
        theme[3].Display === true ? "subheader-enabled" : ""
      } ${theme[3].FixedDestop === true ? "subheader-fixed" : ""} ${
        theme[3].FixedMobile === true ? "subheader-mobile-fixed" : ""
      } ${
        theme[5].Fixed === true ? "footer-fixed" : ""
      } aside-enabled aside-fixed aside-minimize-hoverable`}
    >
      <Routes />
    </div>
  );
}

export default App;
