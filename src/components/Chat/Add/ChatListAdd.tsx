import {
  Box,
  FormControlLabel,
  FormGroup,
  InputBase,
  Modal,
  Paper,
  Switch,
  SxProps,
  Theme,
  Typography,
  IconButton,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

interface ChatListAddProps {
  handleClose: () => void;
  open: boolean;
}
function ChatListAdd(props: ChatListAddProps) {
  const [isPrivate, setIsPrivate] = useState(true);
  const { handleClose, open } = props;

  //Components
  const privateComponentSwitch = (
    <Switch
      defaultChecked
      value={isPrivate}
      onChange={(event) => {
        setIsPrivate(event.target.checked);
      }}
    />
  );

  //Styles
  const boxStyle: SxProps<Theme> = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={boxStyle}>
        <Stack
        spacing={2}
        >
          <Typography variant="h6" component="h2">
            Add Chat
          </Typography>
          <FormGroup>
            <FormControlLabel
              style={{ width: 0 }}
              control={privateComponentSwitch}
              label="Private"
            />
            {isPrivate ? (
              <Paper
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search users..."
                />
                <IconButton sx={{ p: "10px" }}>
                  <SearchIcon />
                </IconButton>
              </Paper>
            ) : (
              <TextField label="Name" />
            )}
            <Button variant="outlined">Save</Button>
          </FormGroup>
        </Stack>
      </Box>
    </Modal>
  );
}

export default ChatListAdd;
