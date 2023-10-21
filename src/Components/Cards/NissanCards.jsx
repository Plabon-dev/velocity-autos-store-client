import { Link } from "react-router-dom";


const NissanCards = ({car}) => {

    const {_id, name, image, brand, price, type, rating} = car;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-full md:w-10/12 mx-auto p-10">
                <figure className="h-96"><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="text-center md:text-left text-[#aa454a] font-semibold text-3xl md:text-2xl">{name}</h2>
                    <div className="md:mt-20 text-center md:text-left font-semibold">
                        <p>Brand: {brand}</p>
                        <p>Type: {type}</p>
                        <p>Rating: {rating}</p>
                    </div>
                    <h2 className="text-center md:text-left text-[#aa454a] font-semibold text-2xl md:text-xl ">Price: ${price}</h2>
                    <div className="card-actions justify-center md:justify-end">
                    <Link to={`/carDetails/${_id}`}><button className="btn hover:text-[#3c4251] text-[#cecdc9] bg-[#3c4251]">See details</button></Link>
                    <Link to={`/updateCar/${_id}`}><button className="btn hover:text-[#3c4251] text-[#cecdc9] bg-[#3c4251]">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NissanCards;