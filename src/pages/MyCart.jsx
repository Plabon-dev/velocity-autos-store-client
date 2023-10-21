
import { useLoaderData } from 'react-router-dom';
import CartCard from './../Components/CartCard';
import { useState } from "react";


const MyCart = () => {

    
    const loadedCarts = useLoaderData();
    console.log(loadedCarts);

    const [carts, setCarts] = useState(loadedCarts);



    return (

       <div>

        <h2 className="text-3xl font-bold dark:text-blue-600 dark:text:bg-blue-700 text-center mt-28 pb-20">My Cart</h2>

         <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 pb-20">
            
            {
                carts?.map(cart =><CartCard 
                    key={cart._id} 
                    cart={cart} 
                    carts={carts} 
                    setCarts={setCarts} 
               ></CartCard>)
            }
    
    
            </div>
       </div>
    );
};

export default MyCart;