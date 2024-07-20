import List from "@mui/material/List";
import ChatListItem from "./ChatListItem";
import ChatListHeader from "./ChatListHeader";
import { Divider, Stack } from "@mui/material";
import { useState } from "react";
import ChatListAdd from "./Add/ChatListAdd";

export default function ChatList() {
  const [chatListAddVisiable, setChatListAddVisiable] = useState(false);
  const handleAddChat = () => {
    setChatListAddVisiable(!chatListAddVisiable);
  };
  const handleCloseAddModel = () => {
    setChatListAddVisiable(false);
  };
  return (
    <>
      <ChatListAdd
        open={chatListAddVisiable}
        handleClose={handleCloseAddModel}
      />
      <Stack>
        <ChatListHeader handleAddChat={handleAddChat} />
        <Divider />
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            maxHeight: "80vh",
            overflow: "auto",
          }}
        >
          <ChatListItem
            avatar={{
              alt: "testAlt",
              src: "testSrc",
            }}
            name={"testName"}
            showDivider={true}
            message="testMessage"
            key={1}
          />
          <ChatListItem
            avatar={{
              alt: "testAlt",
              src: "testSrc",
            }}
            name={"testName"}
            showDivider={true}
            message="testMessage"
            key={2}
          />
          <ChatListItem
            avatar={{
              alt: "testAlt",
              src: "testSrc",
            }}
            name={"testName"}
            message="testMessage"
            key={3}
          />
        </List>
      </Stack>
    </>
  );
}
