import { Link } from "react-router-dom";
import Auth from "./Auth";
import { Link as MULink } from "@mui/material"

const Signup = () => {
    return (
        <Auth
            submitLabel="Signup"
            onSubmit={async (credentials) => console.log(credentials)}
        >
               <Link 
                to="/signup"
                style={{
                        alignSelf:"center"
                    }}
                >
                <MULink>
                    Do you have an account? Login.
                </MULink>
            </Link>
        </Auth>

    )
}

export default Signup;