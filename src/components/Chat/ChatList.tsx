import List from "@mui/material/List";
import ChatListItem from "./ChatListItem";
import ChatListHeader from "./ChatListHeader";
import { Divider } from "@mui/material";

export default function ChatList() {
  return (
    <>
      <ChatListHeader />
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
    </>
  );
}
