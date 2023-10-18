import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
           <h2 className='text-center'>
            <span className='text-purple-700 text-5xl font-extrabold'>{price.price} </span>
            <span className='text-2xl text-white font-bold'>/mon</span>
           </h2>
           <h5 className='text-2xl my-6 font-bold text-center'>{price.name}</h5>
            <p className='font-bold text-white underline'>Features: </p>
        {
            price.feature.map((feature, idx) => <Feature
            key={idx}
            feature={feature}
            ></Feature>)
        }
        <button className='w-full hover:bg-green-700 mt-auto bg-green-600 py-2 rounded-md text-white font-bold'>Bye now</button>
        </div>
    );
};

export default PriceCart;