import React, {useEffect, useState} from 'react';

import axios from 'axios';


import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const PhoneBar = () => {
const [phones, setPhones] = useState([])

    useEffect(()=> {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadedData = data.data.data;
           
            const phonesData = loadedData.map(phone => {
                const parts = phone.slug.split('-')
                const price = parseInt(parts[1]);
                const phoneInfo = {
                    name: phone.phone_name,
                    price: price
                }
                return phoneInfo;
            })
            
            setPhones(phonesData)
            console.log(phones.name.name)
        })
    }, [])

    return (
        <div>
            <BarChart Width={1000} height={500} data={phones}>
                <Bar dataKey="price" fill="#8884d8"/>
                <XAxis dataKey="name"></XAxis>
                <YAxis/>
            </BarChart>


            <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={phones}>
          <Bar dataKey="name" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
        </div>
    );
};

export default PhoneBar;