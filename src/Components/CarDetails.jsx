
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const CarDetails = () => {

    const cars = useLoaderData();
    console.log(cars);


    const handleAddToCart = () => {

        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cars)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Congratulation!',
                        text: 'Car Added to Cart!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
    
            })
    

    } 

   
    



    return (
        <div className="py-20" >


            <h2 className="text-center  font-semibold text-3xl">{cars.name} details</h2>

            <div className="card lg:card-side bg-base-100 shadow-2xl w-10/12 mx-auto p-10  flex">
                <figure className="h-96"><img src={cars.image} alt="Album" /></figure>
                <div className="card-body flex-1">
                    <h2 className="text-center md:text-left  text-[#aa454a] font-semibold text-3xl md:text-2xl">{cars.name}</h2>
                    <div className="mt-4  text-center md:text-left font-semibold">
                        <p>Brand: {cars.brand}</p>
                        <p>Type: {cars.type}</p>
                        <p>Rating: {cars.rating}</p>
                        <p>Description: <span className="font-normal">{cars.description}</span></p>
                    </div>
                    <h2 className="text-center md:text-left text-[#aa454a] font-semibold text-2xl md:text-xl ">Price: ${cars.price}</h2>
                    <div className="card-actions justify-center md:justify-end">
                        <button onClick={handleAddToCart} className="btn btn-block hover:text-[#3c4251] text-[#cecdc9] bg-[#3c4251]">Add to cart</button>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default CarDetails;