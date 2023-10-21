import Swal from 'sweetalert2'

const AddCar = () => {
    const handleAddCar = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const image = form.image.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newCar ={name, brand, image, type, price, rating, description }
        console.log(newCar);

        // send data to the server
        fetch('http://localhost:5000/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'A car has been added!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }

        })
        

    }


    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1075947/pexels-photo-1075947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>

                <div className="hero-overlay "></div>

                <div className="hero-content text-center text-neutral-content flex flex-col">
                    <h2 className="text-4xl text-[#C4FCF0] font-bold">Add a car</h2>
                    <form onSubmit={handleAddCar} className="card-body">
                        <div className="grid grid-cols-2 gap-5">
                            {/* name */}
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text text-[#C4FCF0] font-semibold">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered text-[#26183C] " />
                            </div>
                            {/* Brand name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#C4FCF0] font-semibold">Brand Name</span>
                                </label>
                                <input type="text" placeholder="Brand Name" name="brand" className="input input-bordered text-[#26183C] " />
                            </div>
                            {/* Image */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#C4FCF0] font-semibold">Image URL</span>
                                </label>
                                <input type="text" placeholder="Image" name="image" className="input input-bordered text-[#26183C] " />
                            </div>
                            {/* Type */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#C4FCF0] font-semibold">Type</span>
                                </label>
                                <input type="text" placeholder="Type" name="type" className="input input-bordered text-[#26183C] " />
                            </div>
                            {/* price */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#C4FCF0] font-semibold">Price</span>
                                </label>
                                <input type="text" placeholder="Price" name="price" className="input input-bordered text-[#26183C] " />
                            </div>
                            {/* rating */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#C4FCF0] font-semibold">Rating</span>
                                </label>
                                <input type="text" placeholder="Rating" name="rating" className="input input-bordered text-[#26183C] " />
                            </div>
                            {/* description */}
                            <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text text-[#C4FCF0] font-semibold">Description</span>
                                </label>
                                <input type="text" placeholder="Description" name="description" className="input h-20 input-bordered text-[#26183C] " />
                            </div>


                        </div>
                        <div className="form-control mt-6">
                            
                            <input type="submit" className="btn bg-[#aa454a] text-white hover:text-[#aa454a]" value="add car" />
                        </div>
                    </form>
                </div>
            </div>



        </div>
    );
};

export default AddCar;