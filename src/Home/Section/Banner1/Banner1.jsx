import Marquee from "react-fast-marquee";
import { FaAmazon, FaApple, FaCcMastercard, FaCcPaypal, FaCcVisa, FaDiscord, FaFacebook, FaFedex, FaGoogle, FaMicrosoft, FaTwitter } from "react-icons/fa";


const Banner1 = () => {
    const handleScrollDown = () => {
        const offset = 800;
        window.scrollTo({
            top: window.pageYOffset + offset,
            behavior: "smooth",
        });
    };

    return (
        <div className="mb-8">
            <div className="hero min-h-screen mb-4" style={{ backgroundImage: 'url(https://vaarivana.com/wp-content/uploads/2022/03/LIFE-AT-VAARIVANA-WORK-FROM-HOME-CANT-GET-ANY-BETTER.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 data-aos="fade-down" data-aos-duration="2000" className="mb-5 text-5xl font-bold">Hello, Future Dreamers!!!</h1>
                        <p data-aos="fade-up" data-aos-duration="3000" className="mb-5 text-3xl">Look beyond the obvious. Use Cutshort to easily get discovered by awesome companies and get referred to job positions very few know about.</p>
                        <button data-aos="zoom-in" data-aos-duration="2000" className="btn bg-[#438fde] text-white" onClick={handleScrollDown}>Get Started</button>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h1 data-aos="fade-up" data-aos-duration="2000" className="text-5xl font-bold my-8">🔝 Top Companies 🔝</h1>
                <Marquee direction="right">
                    <FaFacebook className='text-5xl mx-8 h-28'></FaFacebook>
                    <FaGoogle className='text-5xl mx-8 h-28'></FaGoogle>
                    <FaApple className='text-5xl mx-8 h-28'></FaApple>
                    <FaAmazon className='text-5xl mx-8 h-28'></FaAmazon>
                    <FaTwitter className='text-5xl mx-8 h-28'></FaTwitter>
                    <FaMicrosoft className='text-5xl mx-8 h-28'></FaMicrosoft>
                    <FaCcMastercard className='text-5xl mx-8 h-28'></FaCcMastercard>
                    <FaCcPaypal className='text-5xl mx-8 h-28'></FaCcPaypal>
                    <FaCcVisa className='text-5xl mx-8 h-28'></FaCcVisa>
                    <FaFedex className='text-5xl mx-8 h-28'></FaFedex>
                    <FaDiscord className='text-5xl mx-8 h-28'></FaDiscord>
                </Marquee>
                <Marquee>
                    <p className='text-2xl mx-8 font-semibold'>Facebook</p>
                    <p className='text-2xl mx-8 font-semibold'>Google</p>
                    <p className='text-2xl mx-8 font-semibold'>NETFLIX</p>
                    <p className='text-2xl mx-8 font-semibold'>Amazon</p>
                    <p className='text-2xl mx-8 font-semibold'>Apple</p>
                    <p className='text-2xl mx-8 font-semibold'>Paypal</p>
                    <p className='text-2xl mx-8 font-semibold'>Tesla</p>
                    <p className='text-2xl mx-8 font-semibold'>Microsoft</p>
                    <p className='text-2xl mx-8 font-semibold'>SAMSUNG</p>
                    <p className='text-2xl mx-8 font-semibold'>HONDA</p>
                    <p className='text-2xl mx-8 font-semibold'>Stripe</p>
                </Marquee>
            </div>
        </div>
    );
};

export default Banner1;