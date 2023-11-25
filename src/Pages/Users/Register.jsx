
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser } = useAuth();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();

        // // Create User
        createUser(email, password,
            name, photo)
            .then(result => {
                console.log(result);
                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                }).then()
                    .catch((error) => {
                        console.log(error.message);
                    });
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'Congratulations! Successfully Your account crated',
                    showConfirmButton: false,
                    timer: 1500
                });

            })
            .catch(error => {
                if (error.code === 'Error (auth/email-already-in-use') {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Do you want to continue',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                    return ('error.message');
                }

            })

            .catch(error => {
                console.log(error.message);

            })

        // Password condition
        if (password.length < 6) {
            setError('Password should be at least 6 characters');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setError('Must be at least one character need capital letter');
            return;
        } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            setError('Password cannot contain special characters');
            return;
        } else {
            setError('Maybe you are exist');
        }
        setError('');
        setSuccess('');
    }
    return (
        <section>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register| NewVilla</title>
            </Helmet>
            <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="flex place-content-center">
                            {/* logo */}
                            <img src="https://i.ibb.co/Vjvym7r/logo.png" className="mr-3 h-6 sm:h-9" alt="NewVilla Logo" />
                            <span className="self-center whitespace-nowrap text-2xl font-semibold 
                    dark:text-white font-poppins">
                                NewVilla</span>
                        </div>
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-poppins font-bold">
                                Create a Account
                            </h1>
                            <div className="w-full flex-1 mt-8">
                                <form onSubmit={handleRegister} className="mx-auto max-w-xs">
                                    <input type="text"
                                        name='name' placeholder="Give Your Name"
                                        className="w-full px-8 py-4 rounded-lg font-medium
                                         bg-slate-100 border border-gray-200
                                          placeholder-gray-500 text-sm 
                                          focus:outline-none focus:border-red-500
                                           focus:bg-white" />
                                    <input
                                        className="w-full mt-5 px-8 py-4 rounded-lg 
                                        font-medium bg-slate-100 border border-gray-200
                                          placeholder-gray-500 text-sm focus:outline-none focus:border-red-500 focus:bg-white"
                                        name="email" type="email" placeholder="Email" />

                                    <input type="text" name='photo' placeholder="Enter Photo URL"
                                        className="w-full mt-5 px-8 py-4 rounded-lg 
                                        font-medium bg-slate-100 border border-gray-200
                                          placeholder-gray-500 text-sm focus:outline-none focus:border-red-500 focus:bg-white" />
                                    <input
                                        className="w-full mt-5 px-8 py-4 rounded-lg 
                                        font-medium bg-slate-100 border border-gray-200
                                          placeholder-gray-500 text-sm focus:outline-none focus:border-red-500 focus:bg-white"
                                        name='password' type="password" placeholder="Password" />
                                    <button
                                        className="mt-5 font-semibold bg-red-500 text-white rounded-xl
                                         w-full py-2 ">
                                        Sign Up
                                    </button>

                                    <p className="mt-6 text-sm text-gray-600 text-center">
                                        Already have an account?
                                        <Link to='/login'>
                                            <span className="border-b border-red-500 text-red-500 border-dotted ml-1 mr-1">
                                                Login
                                            </span>
                                        </Link>
                                    </p>
                                    {error && <p className="text-red-700">{error}</p>}
                                    {success && <p className="text-green-700">{success}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 hidden lg:flex">
                        <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;