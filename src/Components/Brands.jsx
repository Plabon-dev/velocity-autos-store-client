import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Brands = () => {

    useEffect(()=>{
        AOS.init({duration: "1000", delay:"1000"});
    },[])

    return (
        <div className="bg-gradient-to-t from-[#d2d1cb] via-[#88a0ae] to-[#d2d1cb] pt-20 ">
            <div className=""  data-aos="fade-right">
            <h2 className="text-center text-gray-800 font-bold text-2xl md:text-4xl">Explore Our Diverse Range of Premier Automobile Brands</h2>
            <p className="text-center"></p>
            </div>
            <div className="grid grid-cols-1 space-y-4 md:grid-cols-3 place-items-center  pt-16">

                <Link to='/toyota'><div className="w-full max-w-xs hover:opacity-80 overflow-hidden bg-black rounded-lg shadow-lg dark:bg-gray-800 btn h-full">

                    <img className="object-cover w-full h-56" src="https://i.pinimg.com/564x/a4/62/44/a462440d155eace976da12bfeacf1db2.jpg" alt="" />


                </div></Link>
                <Link to='/nissan'><div className="w-full max-w-xs hover:opacity-80 bg-[#0a0c0c] overflow-hidden  rounded-lg shadow-lg dark:bg-gray-800 btn h-full">

                    <img className="object-cover w-full h-56" src="https://i.pinimg.com/564x/b7/08/6f/b7086fb5fa4aa53ff17b0b3d99b9b7c9.jpg" alt="" />


                </div></Link>
                <Link to='/bmw'><div className="w-full max-w-xs hover:opacity-80 overflow-hidden bg-black rounded-lg shadow-lg dark:bg-gray-800 btn h-full">

                    <img className="object-cover w-full h-56" src="https://i.pinimg.com/564x/e4/4f/ed/e44fed1aa8ce43ffa734003534167436.jpg" alt="" />


                </div>
                </Link>
                <Link to='/tesla'><div className="w-full max-w-xs hover:opacity-80 overflow-hidden bg-black rounded-lg shadow-lg dark:bg-gray-800 btn h-full">

                    <img className="object-cover w-full h-56" src="https://i.pinimg.com/564x/e1/b0/16/e1b016ada4b7b94bb079efbca77ba0ef.jpg" alt="" />


                </div></Link>
                <Link to='/honda'><div className="w-full max-w-xs hover:opacity-80 overflow-hidden bg-black rounded-lg shadow-lg dark:bg-gray-800 btn h-full">

                    <img className="object-cover w-full h-56" src="https://i.pinimg.com/564x/7f/3a/fb/7f3afb88712a75ef397ae98968a72a1c.jpg" alt="" />


                </div></Link>
                <Link to='/ford'><div className="w-full max-w-xs hover:opacity-80 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 btn h-full">

                    <img className="object-cover w-full h-56" src="https://i.pinimg.com/564x/5f/d7/54/5fd754ce796229170266b0a5f9ff008c.jpg" alt="" />


                </div></Link>
            </div>
        </div>
    );
};

export default Brands;