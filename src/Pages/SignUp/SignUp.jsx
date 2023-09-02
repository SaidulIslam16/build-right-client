import { useForm } from "react-hook-form";
import signup from '../../assets/signupPage.png'
import { useState } from "react";
import useAuth from "../../hooks/UseAuth";
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(false)
    const { signUp, userProfileUpdate, googleSignIn } = useAuth();
    const nagivate = useNavigate();

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            setError(true)
        }
        else {
            console.log(data);
            signUp(data.email, data.password)
                .then(() => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Sign Up Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    userProfileUpdate(data.name, data.photoURL)
                        .then(() => {
                            nagivate('/')
                        })
                        .catch(error => console.log(error))
                })
                .catch(error => console.log(error));
        }
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(r => {
                console.log(r.user);
                nagivate('/')
            })
            .catch(e => console.log(e))
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
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name")} placeholder="name" className="input input-bordered" />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirmPassword")} placeholder="confirm password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL")} placeholder="photo url" className="input input-bordered" />
                            </div>
                            {
                                error && <p className="text-red-600">Password don't match, Please use same password</p>
                            }
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-warning" value="Sign Up" />
                            </div>
                        </div>
                    </form>
                    <div className="text-center mb-5">
                        <p>Already Have an Account? <span className="font-bold"><Link to='/login'>Login</Link></span></p>
                    </div>
                    <div className="mx-8">
                        <button onClick={handleGoogleSignIn} className="btn btn-neutral w-full"> <FaGoogle /> Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;