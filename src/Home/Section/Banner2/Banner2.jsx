
const Banner2 = () => {
    return (
        <div className="text-center mb-8">
            <h1 data-aos="fade-up" data-aos-duration="2000" className="text-5xl font-bold text-center mb-8">🤝 What we promise 🤝</h1>

            <div className="lg:flex">

                <div data-aos="fade-right" data-aos-duration="2000" className="text-center border rounded-lg mx-4 p-8 w-1/3">
                <div className="radial-progress text-2xl text-[#438fde]" style={{"--value":70}}>3x</div>
                <p className="my-4 text-2xl">faster candidate submissions</p>
                </div>

                <div data-aos="fade-up" data-aos-duration="2000" className="text-center border rounded-lg p-8 w-1/3">
                <div className="radial-progress text-2xl text-[#438fde]" style={{"--value":60}}>60%</div>
                <p className="my-4 text-2xl">more candidates placement</p>
                </div>

                <div data-aos="fade-left" data-aos-duration="2000" className="text-center border rounded-lg mx-4 p-8 w-1/3">
                <div className="radial-progress text-2xl text-[#438fde]" style={{"--value":100}}>100%</div>
                <p className="my-4 text-2xl">client satisfaction</p>
                </div>

            </div>
        </div>
    );
};

export default Banner2;