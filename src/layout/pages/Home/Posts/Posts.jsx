
import people from '../../../../assets/desktop/posts/people.png'
import Post from '../../Post/Post';

import locationMark from '../../../../assets/desktop/posts/location.png'
import edit from '../../../../assets/desktop/posts/edit.png'
import close from '../../../../assets/desktop/posts/close.png'
import ex from '../../../../assets/desktop/posts/exclemotri.png'
import leaveIcon from '../../../../assets/desktop/posts/leaveIcon.png'
import r1 from '../../../../assets/desktop/posts/r1.png'
import r2 from '../../../../assets/desktop/posts/r2.png'
import r3 from '../../../../assets/desktop/posts/r3.png'
import r4 from '../../../../assets/desktop/posts/r4.png'

import thum_up from '../../../../assets/desktop/posts/thumb_up.png'

import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';

const Posts = () => {

    const { user, loading } = useContext(AuthContext)

    return (
        <div className="container-md " style={{ marginTop: '40px' }}>
            <div className='d-md-flex align-items-center justify-content-between'>

                <div className="d-none d-md-flex gap-5 ">
                    <h5 className="">All Posts(32)</h5>
                    <h5 className="text-secondary">Article</h5>
                    <h5 className="text-secondary">Event</h5>
                    <h5 className="text-secondary">Education</h5>
                    <h5 className="text-secondary">Job</h5>
                </div>

                <div className=' d-none d-md-flex align-items-center gap-3'>

                    <button className="border border-0 px-4 py-2 rounded" style={{ backgroundColor: '#EDEEF0' }}>Write a Post <span><select className=" border-0" name="" id="" style={{ backgroundColor: '#EDEEF0' }}></select></span></button>

                    {/*  */}
                    {
                        user ?
                            <>

                                <button className="border border-1 px-4 py-2 rounded  "><span><img src={leaveIcon} alt="" /></span> Leave Group</button>
                            </>
                            :
                            <>
                                <button className="border border-0 px-4 py-2 rounded bg-primary text-white"><span><img src={people} alt="" /></span> Join Group</button>

                            </>
                    }
                    {/*  */}

                </div>


                <div className=' d-flex  d-md-none align-items-center justify-content-between'>
                    <h5 className="fw-semibold">All Posts</h5>
                    <button className="border border-0 px-4 py-2 rounded fw-semibold" style={{ backgroundColor: '#EDEEF0' }}>Filter: All <span><select className=" border-0" name="" id="" style={{ backgroundColor: '#EDEEF0' }}></select></span></button>
                </div>
            </div>
            <div className=" d-none d-md-flex align-items-center">
                <div className="" style={{ width: "130px", height: '1px', color: 'black', backgroundColor: 'black' }}></div>
                <hr className="w-100" />
            </div>


            {/* posts content */}

            <div className=' mt-3'>

                <div className=' row'>
                    <div className="col-12 col-md-8">
                        <Post></Post>
                    </div>

                    <div className=" d-none d-md-block col-4 ps-5 px-5 ">

                        {
                            user ?
                                <>
                                    <div className='d-flex align-items-center justify-content-between '>

                                        <img src={locationMark} alt="" />

                                        <input className='border-0' placeholder='|Enter your location' type="text" />
                                        <img src={close} alt="" />
                                    </div>
                                    <hr className='mt-0' />

                                </>
                                :
                                <>

                                    <div className='d-flex align-items-center justify-content-between '>
                                        <p className='d-flex align-items-center gap-3 pt-2'>
                                            <img src={locationMark} alt="" />
                                            <span>Noida, India</span>
                                        </p>
                                        <img src={edit} alt="" />
                                    </div>
                                    <hr className='mt-0 ' />
                                </>
                        }


                        <p className='pt-3'><small className=''>
                            <img className='mb-1 pl-2' src={ex} alt="" />
                            Your location will help us serve better and extend a personalised experience.
                        </small></p>

                        {
                            user ?
                                <>
                                    <p className='fw-semibold mt-5 mb-4'>
                                        <img src={thum_up} alt="" />
                                         <span className='ps-2'>RECOMMENDED GROUPS</span>
                                    </p>
                                    <div className='d-flex align-items-center  justify-content-between '>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={r1} alt="" />
                                             Leisure
                                        </div>
                                        <button className='border-0 px-2 rounded-pill'>Follow</button>
                                    </div>
                                    <br />
                                    <div className='d-flex align-items-center  justify-content-between '>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={r2} alt="" />
                                            Activism
                                        </div>
                                        <button className='border-0 px-2 rounded-pill'>Follow</button>
                                    </div>
                                    <br />
                                    <div className='d-flex align-items-center  justify-content-between '>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={r3} alt="" />
                                            MBA
                                        </div>
                                        <button className='border-0 px-2 rounded-pill'>Follow</button>
                                    </div>
                                    <br />
                                    <div className='d-flex align-items-center  justify-content-between '>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={r4} alt="" />
                                            Philosophy
                                        </div>
                                        <button className='border-0 px-2 rounded-pill'>Follow</button>
                                    </div>
                                    <p className='text-primary text-end mt-5'>See More...</p>
                                </>
                                :
                                <>

                                </>
                        }

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Posts;