import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";
import { FaGoogle } from "react-icons/fa6";
import axios from "axios";

const SocialLogin = () => {

    const { googleSignIn } = useAuth()
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(r => {
                const user = r.user;
                // console.log(user);

                const userInfo = { name: user.displayName, email: user.email, photoURL: user.photoURL, role: "student" }
                axios.post('http://localhost:5000/users', userInfo)
                    .then(res => console.log(res.data))

                navigate(from, { replace: true });
            })
            .catch(e => console.log(e))
    };

    return (
        <div className="mx-8">
            <button onClick={handleGoogleSignIn} className="btn btn-neutral w-full"> <FaGoogle /> Google</button>
        </div>
    );
};

export default SocialLogin;