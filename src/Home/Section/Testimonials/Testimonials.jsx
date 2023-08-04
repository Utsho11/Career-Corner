import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "react-rating";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

const Testimonials = () => {
    var settings={
        dots: true
    }
    return (
        <div className="text-center my-8">
            <h1 data-aos="fade-up" data-aos-duration="2000" className="text-5xl font-bold my-8">🥇 Testimonials 🥇</h1>

            <div data-aos="fade-up" className="w-3/4 mx-auto border rounded-3xl border-slate-500">
                <Slider {...settings}>
                    <div className="justify-center text-center">
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                                    alt="avatar"
                                    className="w-24 rounded-full"
                                    style={{ width: "150px" }}
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Maria Kate</h2>
                                <p>Data Scientist</p>
                                <p className="w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                                    et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                                    quibusdam illo, beatae quia fugit consequatur laudantium velit
                                    magnam error. Consectetur distinctio fugit doloremque.</p>
                                <div className="card-actions">
                                    <Rating
                                        initialRating={3.5}
                                        emptySymbol={<span><BsStar className="text-yellow-400"></BsStar></span>}
                                        fractions={<span><BsStarHalf className="text-yellow-400"></BsStarHalf></span>}
                                        fullSymbol={<span><BsStarFill className="text-yellow-400"></BsStarFill></span>}
                                        readonly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                                    alt="avatar"
                                    className="w-24 rounded-full"
                                    style={{ width: "150px" }}
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">John Doe</h2>
                                <p>Web Developer</p>
                                <p className="w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                                    et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                                    quibusdam illo, beatae quia fugit consequatur laudantium velit
                                    magnam error. Consectetur distinctio fugit doloremque.</p>
                                <div className="card-actions">
                                    <Rating
                                        initialRating={3.5}
                                        emptySymbol={<span><BsStar className="text-yellow-400"></BsStar></span>}
                                        fractions={<span><BsStarHalf className="text-yellow-400"></BsStarHalf></span>}
                                        fullSymbol={<span><BsStarFill className="text-yellow-400"></BsStarFill></span>}
                                        readonly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                    alt="avatar"
                                    className="w-24 rounded-full"
                                    style={{ width: "150px" }}
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Anna Deynah</h2>
                                <p>Product manager</p>
                                <p className="w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                                    et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                                    quibusdam illo, beatae quia fugit consequatur laudantium velit
                                    magnam error. Consectetur distinctio fugit doloremque.</p>
                                <div className="card-actions">
                                    <Rating
                                        initialRating={3.5}
                                        emptySymbol={<span><BsStar className="text-yellow-400"></BsStar></span>}
                                        fractions={<span><BsStarHalf className="text-yellow-400"></BsStarHalf></span>}
                                        fullSymbol={<span><BsStarFill className="text-yellow-400"></BsStarFill></span>}
                                        readonly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;