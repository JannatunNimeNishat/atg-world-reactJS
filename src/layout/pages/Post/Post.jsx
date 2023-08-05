
import p1 from '../../../assets/desktop/post/p1.png'
import p1_1 from '../../../assets/desktop/post/p1.1.png'
import p2 from '../../../assets/desktop/post/p2.png'
import p2_1 from '../../../assets/desktop/post/p2.1.png'
import p3 from '../../../assets/desktop/post/p3.png'
import p3_1 from '../../../assets/desktop/post/p3.3.png'
import p3_2 from '../../../assets/desktop/post/p3_2.svg'
import p3_3 from '../../../assets/desktop/post/p3_3.png'
import p4_1 from '../../../assets/desktop/post/p4_1.png'
import p4_2 from '../../../assets/desktop/post/p4_2.png'
import threeDots from '../../../assets/desktop/post/threeDotes.png'

import { BsShareFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

// 
import signUpLogo from "../../../assets/desktop/modal/signUp.svg"
import eye from '../../../assets/desktop/modal/eye.png'

import facebook from '../../../assets/desktop/modal/facebook.png'
import google from '../../../assets/desktop/modal/gmail.png'

// 


import { Container, Button, lightColors, darkColors } from 'react-floating-action-button'

const Post = () => {



    return (
        <>  
            <div className='d-flex d-md-none' data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                <Container>
                    <Button
                        tooltip="The big plus button!"
                        icon="fas fa-user-plus"
                        styles={{ backgroundColor: '#FF5C5C', color: lightColors.white }}
                        
                    />
                </Container>
            </div>

            {/* 1st */}
            <div className="border" >
                <img className="img-fluid w-100" src={p1} alt="" />
                <div className='pt-3   px-3 '>
                    <div className='d-flex  justify-content-between gap-5 align-items-center '>
                        <div>
                            <p className='fw-semibold'>✍️ Article</p>
                            <h4>What if famous brands had regular fonts? <br /> Meet RegulaBrands!</h4>
                            <h6 className='' style={{ color: '#5C5C5C' }}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</h6>
                        </div>

                        {/* <BsThreeDots className='fw-bold' /> */}
                        <img src={threeDots} alt="" />
                    </div>

                    <div className='pt-3 d-flex align-items-center justify-content-between'>
                        <div className=' d-flex align-items-center gap-3'>
                            <img src={p1_1} alt="" />
                            <h5 className='fw-semibold'>Sarthak Kamra</h5>
                        </div>

                        <div className='pt-2 pb-2 d-flex align-items-center gap-3 '>
                            <AiOutlineEye className=" d-none d-block" />
                            <p className='pt-2 d-none d-block'>1.4k views</p>
                            <button className='border-0' style={{ width: "42px", height: '36px' }}>
                                <BsShareFill />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            {/* 2nd */}
            <div className="border" >
                <img className="img-fluid w-100" src={p2} alt="" />
                <div className='pt-3   px-3 '>
                    <div className='d-flex  justify-content-between gap-5 align-items-center '>
                        <div>
                            <p className='fw-semibold'>🔬️ Education</p>
                            <h4>Tax Benefits for Investment under National Pension <br /> Scheme launched by Government</h4>
                            <h6 className='' style={{ color: '#5C5C5C' }}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</h6>
                        </div>

                        {/* <BsThreeDots className='fw-bold' /> */}
                        <img src={threeDots} alt="" />
                    </div>

                    <div className='pt-3 d-flex align-items-center justify-content-between'>
                        <div className=' d-flex align-items-center gap-3'>
                            <img src={p2_1} alt="" />
                            <h5 className='fw-semibold'>Sarah West</h5>
                        </div>

                        <div className='pt-2 pb-2 d-flex align-items-center gap-3 '>
                            <AiOutlineEye className=" d-none d-block" />
                            <p className='pt-2 d-none d-block'>1.4k views</p>
                            <button className='border-0' style={{ width: "42px", height: '36px' }}>
                                <BsShareFill />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            {/* 3rd */}
            <div className="border" >
                <img className="img-fluid w-100" src={p3} alt="" />
                <div className='pt-3   px-3 '>
                    <div className='d-flex  justify-content-between gap-5 align-items-center '>
                        <div className=' w-100'>
                            <p className='fw-semibold'>🗓️ Meetup</p>
                            <h4>Tax Benefits for Investment under National Pension <br /> Scheme launched by Government</h4>

                            {/*   <div className='d-flex gap-1 gap-md-5 pt-1 border w-100'>
                                <p className='fw-bold d-flex align-items-center gap-2 '>
                                    <img src={p3_2} alt="" />
                                    Fri, 12 Oct, 2018
                                </p>
                                <p className='fw-bold d-flex align-items-center gap-2 '>
                                    <img src={p3_3} alt="" />
                                    Ahmedabad, India
                                </p>
                            </div> */}
                        </div>

                        <div className=''>
                            {/* <div className='position-relative'> */}
                            {/* <BsThreeDots className='fw-bold  ' style={{ width: "10px" }} /> */}
                            <img src={threeDots} alt="" />
                            {/* <div className=' w-full border d-flex '> */}
                            {/* <div className='shadow ml-5  w-25 px-2 py-1 lh-1'>
                                    <p>Edit</p>
                                    <p>Report</p>
                                    <p>Option 3</p>
                                </div> */}
                            {/* </div> */}
                        </div>


                    </div>
                    <div className='d-flex gap-1 gap-md-5 pt-1  w-100'>
                        <p className='fw-bold d-flex align-items-center gap-2 '>
                            <img src={p3_2} alt="" />
                            Fri, 12 Oct, 2018
                        </p>
                        <p className='fw-bold d-flex align-items-center gap-2 '>
                            <img src={p3_3} alt="" />
                            Ahmedabad, India
                        </p>
                    </div>


                    <button className='w-100  rounded bg-white text-danger fw-semibold  border border-dark-subtle py-1' >Visit Website</button>


                    <div className='pt-3 d-flex align-items-center justify-content-between'>
                        <div className=' d-flex align-items-center gap-3'>
                            <img src={p3_1} alt="" />
                            <h5 className='fw-semibold'>Ronal Jones</h5>
                        </div>

                        <div className='pt-2 pb-2 d-flex align-items-center gap-3 '>
                            <AiOutlineEye className=" d-none d-block" />
                            <p className='pt-2 d-none d-block'>1.4k views</p>
                            <button className='border-0' style={{ width: "42px", height: '36px' }}>
                                <BsShareFill />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            {/* 4th */}
            <div className="border " >
                {/* <img className="img-fluid w-100" src={p3} alt="" /> */}
                <div className='pt-3   px-3 '>
                    <div className='d-flex  justify-content-between gap-5 align-items-center '>
                        <div>
                            <p className='fw-semibold'>💼️ Job</p>
                            <h4>Software Developer</h4>

                        </div>

                        <div >


                            <img src={threeDots} alt="" />

                        </div>


                    </div>

                    <div className='d-flex gap-3 pt-1'>
                        <p className='fw-bold d-flex align-items-center gap-2 '>
                            <img src={p4_1} alt="" />
                            Innovaccer Analytics Private Ltd.
                        </p>
                        <p className='fw-bold d-flex align-items-center gap-2 '>
                            <img src={p3_3} alt="" />
                            Noida, India
                        </p>
                    </div>

                    <button className='w-100  rounded bg-white text-success fw-semibold  border border-dark-subtle py-1' >Apply on Timesjobs</button>


                    <div className='pt-3 d-flex align-items-center justify-content-between'>
                        <div className=' d-flex align-items-center gap-3'>
                            <img src={p4_2} alt="" />
                            <h5 className='fw-semibold'>Joseph Gray</h5>
                        </div>

                        <div className='pt-2 pb-2 d-flex align-items-center gap-3 '>
                            <AiOutlineEye className=" d-none d-block" />
                            <p className='pt-2  d-none d-block'>1.4k views</p>
                            <button className='border-0' style={{ width: "42px", height: '36px' }}>
                                <BsShareFill />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />

        </>
    );
};

export default Post;