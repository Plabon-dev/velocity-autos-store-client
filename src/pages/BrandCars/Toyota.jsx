import { useLoaderData } from "react-router-dom";
import ToyotaCard from "../../Components/Cards/ToyotaCard";


const Toyota = () => {

    const cars = useLoaderData();

    const toyotaCars = cars.filter(car => car.brand === "Toyota");
    console.log(toyotaCars);

    return (
        <div className="bg-gradient-to-t from-[#d2d1cb] via-[#88a0ae] to-[#d2d1cb]">

            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://r4.wallpaperflare.com/wallpaper/575/784/986/nissan-gt-r-car-night-liberty-walk-wallpaper-3d28f64a996b8a9b7a131530383dbaaa.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://r4.wallpaperflare.com/wallpaper/666/167/593/dodge-challenger-srt-hellcat-widebody-dodge-challenger-2018-cars-4k-wallpaper-66aadc54c2d82d36e8d36b22f8aa9d24.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://r4.wallpaperflare.com/wallpaper/910/24/10/night-artwork-futuristic-city-cyberpunk-wallpaper-d8068de8d0006ce8201cc1ce98f2840a.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://r4.wallpaperflare.com/wallpaper/618/686/462/porsche-911-gt3-r-porsche-911-porsche-cars-wallpaper-e3ee8a73751feec2251c19835dac3f93.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>



            <div className="py-20 bg-gradient-to-r from-[#96a77a] via-[#afc0ca1] to-[#b8e2fc]">
            <h2 className="font-bold mb-10 text-[#2187ab] text-center text-3xl">Available <span className="text-[#62535a]">Toyota</span> Cars </h2>
            <div className="grid grid-cols-1 gap-10 content-center ">
                {
                    toyotaCars.map(car => <ToyotaCard
                        key={car._id}
                        car={car}
                    ></ToyotaCard>)
                }
            </div>
            </div>


        </div>
    );
};

export default Toyota;