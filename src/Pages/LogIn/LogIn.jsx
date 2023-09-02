import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import signup from '../../assets/signupPage.png'

const LogIn = () => {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('')
    const { logIn, } = useAuth();
    const nagivate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        logIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                nagivate('/')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            });

    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:flex">
                <div className="w-1/2 hidden md:block">
                    <img src={signup} alt="" />

                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 py-4 flex-shrink-0 shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-center">Sign Up Now!</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password")} placeholder="password" className="input input-bordered" />
                            </div>
                            {
                                error && <p className="text-red-600">{error}</p>
                            }
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-warning" value="Sign Up" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;