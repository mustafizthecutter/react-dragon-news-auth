import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className="px-4 space-y-3 mb-6">
                <h2 className="text-2xl font-poppins">Login With </h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    <span>Google</span>
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    <span>Github</span>
                </button>
            </div>
            <div className="px-4  mb-6">
                <h2 className="text-2xl mb-4 font-poppins">Find Us On </h2>
                <a className="p-4 border rounded-t text-lg flex items-center" href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className="p-4 border-x text-lg flex items-center" href="">
                    <FaTwitter className='mr-3'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className="p-4 rounded-b border flex text-lg items-center" href="">
                    <FaInstagram className='mr-3'></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            <div className="px-4 space-y-3 mb-6">
                <h2 className="text-2xl font-poppins">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;