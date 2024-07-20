import { AppBar, IconButton, Toolbar } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";

interface ChatListHeaderProps {
   handleAddChat: () => void;
}

function ChatListHeader(props: ChatListHeaderProps) {
  const { handleAddChat } = props;
  return (
    <AppBar position="static" color="transparent" style={{ boxShadow: "none" }}>
      <Toolbar>
        <IconButton size="large" edge="start" onClick={handleAddChat}>
          <AddCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default ChatListHeader;
