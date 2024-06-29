import { Link } from "react-router-dom";
import Auth from "./Auth";
import { Link as MULink } from "@mui/material"
const Login = () => {
    return (
        <div>
            <Auth
                submitLabel="Login"
                onSubmit={async (credentials) => console.log(credentials)}
            >
                <Link 
                to="/signup"
                style={
                    {
                        alignSelf:"center"
                    }
                }
                >
                    <MULink>
                        Don't have an account? Signup
                    </MULink>
                </Link>

            </Auth>

        </div >
    )
}

export default Login;