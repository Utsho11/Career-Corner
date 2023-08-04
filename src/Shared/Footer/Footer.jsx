import './Style/Footer.css'

const Footer = () => {
    return (
        <footer data-aos="fade-right" data-aos-duration="2000" className='mt-40'>
            <footer-children>
                <div className='waves'>
                    <div className="wave" id='wave1'></div>
                    <div className="wave" id='wave2'></div>
                    <div className="wave" id='wave3'></div>
                    <div className="wave" id='wave4'></div>
                </div>
                <footer className="footer justify-center gap-16 p-10 bg-transparent text-white">
                    <div>
                        <span className="text-white font-bold text-2xl">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="text-white font-bold text-2xl">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="text-white font-bold text-2xl">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                    <div>
                        <span className="text-white font-bold text-2xl">Newsletter</span>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-white">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </footer>
            </footer-children>
        </footer>
    );
};

export default Footer;