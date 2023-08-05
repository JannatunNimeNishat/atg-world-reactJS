
// import { AiOutlineArrowLeft } from "react-icons/ai";
import logo from '../../../assets/desktop/navbar/logo.svg'
import search_icon from '../../../assets/desktop/navbar/search-icon.png'
import arrow from '../../../assets/desktop/navbar/arrow_back.png'
import { Link, useNavigate } from "react-router-dom";
import signUpLogo from "../../../assets/desktop/modal/signUp.svg"
import eye from '../../../assets/desktop/modal/eye.png'

import facebook from '../../../assets/desktop/modal/facebook.png'
import google from '../../../assets/desktop/modal/gmail.png'

import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

import { FiLogOut } from "react-icons/fi";

const Navbar = () => {

    const { user, loading, signUp, updateUser, signIn, googleSignIn, logOut } = useContext(AuthContext)
    const [toggle,setToggle] = useState(true)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        signUp(data.email, data.password)
            .then(result => {
                console.log(result.user);
                const photoURL = `https://i.ibb.co/D5vPJRw/every-User-Img.png`
                updateUser(data.firstName, photoURL)
                    .then(result => {
                        console.log(result.user);
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    const handleSignIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                // navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch((error) => {
                console.log(error.message);
            })
    }


    return (
       
        <>
             <div>
                {/* modal */}
                {/* 1st */}
                <div className="modal modal-lg fade   rounded" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1" >
                    <div className="modal-dialog modal-dialog-centered" >
                        <div className="modal-content">
                            {/* close for md device */}
                            <div className='w-100 d-none d-md-block  text-end ' style={{ marginTop: "-28px", marginLeft: '15px' }}>
                                <button type="button" className="btn-close bg-white mb-2" data-bs-dismiss="modal" aria-label="Close" ></button>
                            </div>
                            {/* close for small devise */}
                            <div className='w-100 d-block d-md-none text-end '>
                                <button type="button" className="btn-close bg-white " data-bs-dismiss="modal" aria-label="Close" ></button>
                            </div>

                            {/* 1st signUP */}
                            <div>
                                <p className="py-1 px-3 d-none d-md-block " style={{ backgroundColor: '#EFFFF4' }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                                <div className="px-4 py-4">

                                    <div className="d-flex py-2 align-items-center justify-content-between">
                                        <h3 className="fw-bold">Create Account</h3>
                                        <p className='pe-3'>Already have an account? <span className="text-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal"  role="button">Sign In</span></p>
                                    </div>

                                    {/* form */}

                                    <div className="d-flex gap-3">

                                        <div className=" w-100 w-md-50" >
                                            <form onSubmit={handleSubmit(onSubmit)} className="" >
                                                <div style={{ backgroundColor: '#f7f8fa' }}>
                                                    {/* 1st */}
                                                    <div className="d-flex w-100 ">
                                                        <input className="border border-secondary bg-light py-2 w-50" type="text" name="firstName" id="" placeholder=" First Name"
                                                            {...register("firstName", { required: true })}

                                                        />

                                                        <input className="border border-secondary bg-light w-50  py-2" type="text" name="lastName" id="" placeholder=" Last Name"
                                                            {...register("lastName", { required: true })}
                                                        />
                                                    </div>

                                                    {/* 2nd */}
                                                    <div className="w-100 ">
                                                        <input className="border border-secondary bg-light w-100 py-2" type="email" name="email" id="" placeholder=" Email"
                                                            {...register("email", { required: true })}
                                                        />
                                                    </div>
                                                    {errors.email && <p className="text-danger">Email Required</p>}
                                                    {/* 3rd */}

                                                    <div className="input-group  d-flex align-items-center ">

                                                        <input
                                                        
                                                        type={
                                                            
                                                            toggle === true ?
                                                            'password'
                                                            :
                                                            'text'

                                                        }

                                                         className="form-control border border-end-0 border-secondary bg-light py-2" placeholder="Password" aria-label="Recipient's username" aria-describedby="button-addon2" name='password'
                                                            {...register("password", {
                                                                required: true,
                                                                minLength: 6,
                                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                                            })}
                                                        />

                                                        <div className="border d-flex justify-content-center align-items-center border-secondary bg-light" style={{ height: '42px' }}>
                                                            <img  role="button" onClick={()=> setToggle(!toggle)} className="pe-2 " src={eye} alt="" style={{ height: '20px' }} />
                                                        </div>
                                                    </div>

                                                    {/* password error */}
                                                    {errors.password?.type === 'required' && <p className="text-danger">Password is required</p>}
                                                    {errors.password?.type === 'minLength' && <p className="text-danger">Password must be 6 characters</p>}
                                                    {errors.password?.type === 'pattern' && <p className="text-danger">Password must have one upper case and one special character</p>}

                                                    {/* 4th */}
                                                    <div className="w-100 ">
                                                        <input className="border border-secondary bg-light w-100 px-2 py-2 rounded" type="password" name="confirmPassword" id="" placeholder=" Confirm Password"
                                                            {...register('confirmPassword', {
                                                                validate: (value) => value === watch("password") || 'Password do not match'
                                                            })}
                                                        />
                                                        {errors.confirmPassword && <p className="text-danger">Password do not match</p>}
                                                    </div>
                                                </div>

                                                <input className=" mt-4 bg-primary rounded-pill text-white border-0 py-2 w-100 px-3" type="submit" value="Create Account" />

                                            </form>

                                            <p className='d-flex border py-2 mt-3 gap-3 align-items-center justify-content-center'>
                                                <img src={facebook} alt="" />
                                                Sign up with Facebook
                                            </p>
                                            <p className='d-flex border py-2 mt-3 gap-3 align-items-center justify-content-center'>
                                                <img src={google} alt="" />
                                                Sign up with Google
                                            </p>

                                        </div>
                                        <div className="d-none d-md-block w-50">
                                            <img src={signUpLogo} alt="" />
                                            <p className='ms-3'><small>By signing up, you agree to our Terms & conditions, Privacy policy</small></p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2nd modal */}
                <div className="modal fade modal-lg rounded-lg" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            {/* close for lg  */}
                            <div className='d-none d-md-block w-100  text-end ' style={{ marginTop: "-28px", marginLeft: '15px' }}>
                                <button type="button" className="btn-close bg-white mb-2" data-bs-dismiss="modal" aria-label="Close" ></button>
                            </div>

                            <div className='d-block d-md-none w-100  text-end ' >
                                <button type="button" className="btn-close bg-white mb-2" data-bs-dismiss="modal" aria-label="Close" ></button>
                            </div>

                            <div>
                                <p className=" d-none d-md-block py-1 px-3 " style={{ backgroundColor: '#EFFFF4' }}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>

                                <div className="px-4 py-4">

                                    <div className="d-md-flex  py-2 align-items-center justify-content-between">
                                        <h3 className="fw-bold">Sign In</h3>
                                        <p className='pe-md-3'>Don’t have an account yet? <span className="text-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Create new for free!</span></p>
                                    </div>

                                    {/* form */}

                                    <div className="d-flex gap-3 pt-md-3">

                                        <div className="w-100 w-md-50" >
                                            <form onSubmit={handleSignIn} className="pb-3 pt-5" >
                                                <div style={{ backgroundColor: '#f7f8fa' }}>

                                                    <div className="w-100 ">
                                                        <input className="border border-secondary bg-light w-100 py-2" type="email" name="email" id="" placeholder=" Email"
                                                            required
                                                        />

                                                    </div>


                                                    <div className="input-group  d-flex align-items-center ">

                                                        <input 
                                                        
                                                        type={
                                                            toggle ? 
                                                            "password"
                                                            :
                                                            "text"
                                                        } 
                                                        
                                                        className="form-control border border-end-0 border-secondary bg-light py-2" placeholder="Password" aria-label="Recipient's username" aria-describedby="button-addon2"
                                                            name='password'
                                                            required
                                                        />

                                                        <div className="border d-flex justify-content-center align-items-center border-secondary bg-light" style={{ height: '42px' }}>
                                                            <img onClick={()=> setToggle(!toggle)} className="pe-2" src={eye} alt="" style={{ height: '20px' }}  role="button" />
                                                        </div>
                                                    </div>


                                                </div>


                                                <input className=" mt-4 bg-primary rounded-pill text-white border-0 py-2 w-100 px-3" type="submit" value="Create Account" />

                                            </form>

                                            <p className='d-flex border py-2 mt-3 gap-3 align-items-center justify-content-center'>
                                                <img src={facebook} alt="" />
                                                Sign up with Facebook
                                            </p>
                                            <p className='d-flex border py-2 mt-3 gap-3 align-items-center justify-content-center'>
                                                <img src={google} alt="" />
                                                Sign up with Google
                                            </p>

                                        </div>

                                        <div className="d-none d-md-block w-50">
                                            <img src={signUpLogo} alt="" />
                                            <p className='ms-3'><small>By signing up, you agree to our Terms & conditions, Privacy policy</small></p>
                                        </div>
                                    </div>


                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <nav className="px-2  px-md-5  navbar  fixed-top navbar-expand-lg  bg-white  ">

                <div className="container-fluid">

                    <Link className="navbar-brand" href="#">

                        <img className='d-flex d-md-none bg-black ' src={arrow} alt="" />

                        <img className=' d-none d-md-block ' src={logo} alt="" />
                    </Link>


                    <button type="button" className="navbar-toggler bg-black text-white btn border" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" >Join Group</button>



                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                        <form className="d-flex  flex-row-reverse align-items-center bg-secondary-subtle rounded-pill mx-auto border" role="search" style={{ width: '360px', height: '42px', backgroundColor: '#F2F2F2' }} >
                            <input className="bg-secondary-subtle border ps-3 border-0 rounded-pill w-100" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" />

                            <img className="ms-3" src={search_icon} alt="" style={{ width: "16px", height: '16px' }} />

                        </form>


                        {/* <ul className="navbar-nav navbar-nav-scroll mb-2 mb-lg-0"> */}
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            {
                                user ?
                                    <>
                                        <li className="nav-item d-flex  justify-content-center align-items-center">
                                            <Link className="nav-link d-flex align-items-center gap-2">
                                                <img src={user.photoURL} alt="" />
                                                <span className="fw-semibold">{user.displayName} </span>
                                                {/* <select onClick={handleLogOut} className="border-0" name="" id=""> */}
                                            </Link>
                                                <select onClick={handleLogOut} className="border-0 w-50 border" name="" id="">
                                                    <option value=""></option>
                                                     <option  className='' value="">
                                                        <FiLogOut className=' bg-black'/>
                                                        logout
                                                        </option>
                                                </select>

                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <a data-bs-toggle="modal" href="#exampleModalToggle" className="nav-link d-flex">
                                                <span className="fw-semibold">Create account. <span className="text-primary fw-bold">It's free!</span></span>
                                                <select className="border-0" name="" id=""></select>
                                            </a>

                                        </li>
                                    </>
                            }

                        </ul>

                    </div>

                    {/* <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> */}
                </div>
            </nav>

        </>


    );
};

export default Navbar;