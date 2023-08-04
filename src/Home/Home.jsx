import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";
import Banner1 from "./Section/Banner1/Banner1";
import Banner2 from "./Section/Banner2/Banner2";
import Banner3 from "./Section/Banner3/Banner3";
import Testimonials from "./Section/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner1></Banner1>
            <Banner2></Banner2>
            <Banner3></Banner3>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;