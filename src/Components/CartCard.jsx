import Swal from "sweetalert2";


const CartCard = ({ cart, carts, setCarts }) => {

    console.log(carts);
    const { _id } =  cart;

   const handleDelete = _id => {

    console.log(_id);

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it!'
      }).then((result) => {
        if (result.isConfirmed) {
       
            fetch(`https://velocity-autos-server-i9mlh5rld-asaduzzaman-plabons-projects.vercel.app/cart/${_id}`, {
                method: 'DELETE'
            }) 
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    Swal.fire(
                            'Deleted!',
                            'Car removed from Cart',
                            'success'
                          )
                        const remaining = carts.filter(myCart => myCart._id !== _id);
                        setCarts(remaining);
                        console.log(carts);

                    
                }


            } )



        }
      })


    }

    return (
        <div className="bg-gradient-to-b from-[#d2d1cb] via-[#88a0ae] to-">
           
<div className="w-full max-w-sm  border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 rounded-t-lg h-96 w-96 object-cover" src={cart.image} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{cart.name}</h5>
        </a>
        
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-red-800 dark:text-white">${cart.price}</span>
            <button onClick={() => handleDelete(cart._id)} className="text-white bg-purple-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Remove from cart</button>
        </div>
    </div>
</div>

        </div>
    );
};

export default CartCard;