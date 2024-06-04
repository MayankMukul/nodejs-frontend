import React from 'react';
import { useEffect, useState } from 'react';
import axios from axios;

axios.defaults.baseUrl = 'http://localhost:8080';
axios.defaults.headers.common['Authorization'] = 
    'Bearer '
// authorization

export default function ProductList() {

    const handleSort = async (e)=>{
        const field = e.target.value.split('.');
        const res = await axios.get(`/products?sort=${field[0]}&order=${field[1]}`);
        console.log(res);
        
    }


  return (
    <>
    <select onChange={handleSort}>
        <option value="price.desc">Price High to Low</option>
        <option value="price.asc">Price Low to High</option>
        <option value="Rating.desc">Rating High to Low</option>
        <option value="Rating.asc">Rating Low to High</option>
    </select>
    </>
  )
}
