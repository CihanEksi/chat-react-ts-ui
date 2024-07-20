import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ChatDivider from "./ChatDivider";

interface ChatListItemProps {
  showDivider?: boolean;
  name: string;
  message: string;
  avatar: {
    alt: string;
    src: string;
  };
}

function ChatListItem(props: ChatListItemProps) {
  const { showDivider = false, name, message, avatar } = props;
  const dividerElement = <ChatDivider />
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={avatar.alt} src={avatar.src} />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {name}
              </Typography>
              {message}
            </React.Fragment>
          }
        />
      </ListItem>
      {showDivider && dividerElement}
    </>
  );
}

export default ChatListItem;
