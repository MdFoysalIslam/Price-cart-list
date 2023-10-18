import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import PriceCart from '../priceCart/PriceCart';

const PriceList = () => {
const [price, setPrice] = useState([]);

useEffect(()=>{
    fetch('price.json')
    .then(res => res.json())
    .then(data => setPrice(data))
},[])

    return (
        <div className='mx-12'>
            <h1 className=
            'text-5xl text-center text-purple-950 bg-slate-400 font-bold p-4'>
                Asawam Affortable Price: {price.length}</h1>
                <div className='grid md:grid-cols-3 gap-3'>
                {
                    price.map(price=> <PriceCart
                    key={price.id}
                    price={price}
                    ></PriceCart>)
                }
                </div>       
        </div>
    );
};

export default PriceList;