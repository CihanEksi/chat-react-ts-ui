import { Typography } from "@mui/material";
import TextsmsIcon from "@mui/icons-material/Textsms";
import router from "../../routes/Routes";

const Branding = () => {
  return (
    <>
      <TextsmsIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        onClick={() => router.navigate("/")}
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        CHAT
      </Typography>
    </>
  );
};

export default Branding;
