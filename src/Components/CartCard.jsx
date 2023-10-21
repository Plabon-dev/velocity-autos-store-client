

const CartCard = ({ cart }) => {

    


    return (
        <div>
           
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 rounded-t-lg h-96 w-96 object-cover" src={cart.image} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{cart.name}</h5>
        </a>
        
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-red-800 dark:text-white">${cart.price}</span>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Remove from cart</button>
        </div>
    </div>
</div>

        </div>
    );
};

export default CartCard;