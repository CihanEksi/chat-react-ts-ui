import TextsmsIcon from "@mui/icons-material/Textsms";
import { Typography } from "@mui/material";
import router from "../../../routes/Routes";

function MobileBranding() {
  return (
    <>
      <TextsmsIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        onClick={() => router.navigate("/")}
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
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
}

export default MobileBranding;
