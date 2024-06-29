import { Button, Stack, TextField } from "@mui/material"
import { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return (
        <Stack
            spacing={2}
            sx={{
                height: "100vh",
                maxWidth: {
                    xs: "100%",
                    sm: "50%",
                    md: "30%",
                },
                margin: "0 auto",
            }}
        >
            <TextField
                type="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                type="password"
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                variant="contained"
            >
                Login
            </Button>
        </Stack>
    );
}

export default Auth;