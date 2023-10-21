import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {

    useEffect(()=>{
        AOS.init({duration: "1000", delay:"1000"});
    },[])

    return (
        <div data-aos="zoom-out">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://cdna.artstation.com/p/assets/images/images/002/770/142/large/sergey-volkov-tespr.jpg?1465500491)' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">

                    <div className="max-w-md">
                        <h1 className="mb-5 text- text-md md:text-4xl font-bold italic"> "Happiness is the smell of a new car" <span className="text-base not-italic">- A.Z. Plabon</span></h1>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;