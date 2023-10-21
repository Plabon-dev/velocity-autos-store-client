import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCar = () => {

    const car = useLoaderData();
    const { _id, name, image, brand, price, description, type, rating } = car;


    const handleUpdateCar = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const image = form.image.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const UpdatedCar = { name, brand, image, type, price, rating, description }
        console.log(UpdatedCar);

        // send data to the server
        fetch(`https://velocity-autos-server-i9mlh5rld-asaduzzaman-plabons-projects.vercel.app/cars/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Successfully Added!',
                        text: 'Car Information Updated Successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }

            })


    }



    return (
        <div className="">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1075947/pexels-photo-1075947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>

                <div className="hero-overlay "></div>

                <div className="hero-content text-center text-neutral-content flex flex-col">
                    <h2 className="text-4xl text-[#C4FCF0] font-bold mt-10">Update {name} Information</h2>
                    <form onSubmit={handleUpdateCar} className="card-body">
                        <div className="grid grid-cols-2 gap-5">
                            {/* name */}
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text text-[#C4FCF0] font-semibold">Name</span>
                                </label>
                                <input type="text" placeholder="Name"  name="name" defaultValue={name} className="input input-bordered text-purple-900" />
                            </div>
                            {/* Brand name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#C4FCF0] font-semibold">Brand Name</span>
                                </label>
                                <input type="text" placeholder="Brand Name" name="brand" defaultValue={brand} className="input input-bordered text-purple-900" />
                            </div>
                            {/* Image */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#C4FCF0] font-semibold">Image URL</span>
                                </label>
                                <input type="text" placeholder="Image" name="image" defaultValue={image} className="input input-bordered text-purple-900" />
                            </div>
                            {/* Type */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#C4FCF0] font-semibold">Type</span>
                                </label>
                                <input type="text" placeholder="Type" name="type" defaultValue={type} className="input input-bordered text-purple-900" />
                            </div>
                            {/* price */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#C4FCF0] font-semibold">Price</span>
                                </label>
                                <input type="text" placeholder="Price" name="price" defaultValue={price} className="input input-bordered text-purple-900" />
                            </div>
                            {/* rating */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#C4FCF0] font-semibold">Rating</span>
                                </label>
                                <input type="text" placeholder="Rating" name="rating" defaultValue={rating} className="input input-bordered text-purple-900" />
                            </div>
                            {/* description */}
                            <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text text-[#C4FCF0] font-semibold">Description</span>
                                </label>
                                <input type="text" placeholder="Description" name="description" defaultValue={description} className="input h-20 input-bordered text-purple-900" />
                            </div>


                        </div>
                        <div className="form-control mt-6">

                            <input type="submit" className="btn bg-[#aa454a] text-white hover:text-[#aa454a]" value="Update information" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCar;