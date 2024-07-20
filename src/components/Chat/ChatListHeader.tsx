import { AppBar, IconButton, Toolbar } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";

function ChatListHeader() {
  return (
    <AppBar position="static" color="transparent" style={{ boxShadow: "none" }}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <AddCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default ChatListHeader;
