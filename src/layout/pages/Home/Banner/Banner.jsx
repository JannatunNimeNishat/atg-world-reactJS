import img from '../../../../assets/desktop/banner/banner_bg.png'
import './Banner.css'
const Banner = () => {
    return (
        
        <div className=" position-relative pt-5 " >
             <img src={img} alt="Background Image" className="img-fluid" ></img>
            <div className="position-absolute top-0 start-0 w-100 h-100 " style={{backgroundColor:"rgba(0, 0, 0, 0.6)"}}></div>

            <div className=" d-none d-md-block position-absolute  bottom-0 start-0  translate-start" style={{paddingLeft:'200px', paddingBottom:'80px'}}>
           
                <h2 className="text-light fw-bold">Computer Engineering</h2>
                <p className="text-light">142,765 Computer Engineers follow this</p>
            </div>

            <div className=" d-block d-md-none position-absolute  bottom-0 start-0  translate-start" >
           
                <h2 className="text-light fw-bold">Computer Engineering</h2>
                <p className="text-light">142,765 Computer Engineers follow this</p>
            </div>
        </div>
    );
};

export default Banner;