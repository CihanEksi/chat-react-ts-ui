import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Branding from "./Branding";
import MobileNavigation from "./mobile/MobileNavigation";
import MobileBranding from "./mobile/MobileBranding";
import HeaderNavigation from "./HeaderNavigation";
import Settings from "./Settings";
import { pagesInterface } from "../../interfaces/components/header.interfaces";
import { homePage, loginPage } from "../../utils/header.pages";
import useGeneralStore from "../../managers/stateManager/general.zustand";

const pages: pagesInterface = [homePage];

const unAuthPages: pagesInterface = [loginPage];

const Header = () => {
  const me = useGeneralStore((state) => state.me);
  const managedPages = me ? pages : unAuthPages;
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Branding />
          <MobileNavigation pages={managedPages} />
          <MobileBranding />
          <HeaderNavigation pages={managedPages} />
          <Settings />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
