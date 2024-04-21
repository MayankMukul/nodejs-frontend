import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function AddProduct() {
  const [product, setProduct]= useState({});

  const addProducts = async(product)=>{
    const res = await axios.post('/products',product)
    // console.log(res);
    // setProduct(res.data);
  }

  const handleChange = (e)=>{
    setProduct({
      ...product,[e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(product);
    addProducts(product);

  }
  return (
    <div className='w-1/2 m-auto p-2 bg-slate-100 rounded '>
      <h1 className='bg-black text-white p-2 rounded'>Add Product Detail</h1>
      <form className='m-auto p-3 flex flex-col ' onSubmit={handleSubmit}>
        <label htmlFor="title">Title :</label>
        <input className='border  m-1 p-1' type="text" id="title" name="title" placeholder='Title here...'  onChange={handleChange}/>
        <label htmlFor="brand">Brand :</label>
        <input className='border m-1 p-1' type="text" id="brand" name="brand" placeholder='Brand here...' onChange={handleChange}/>
        <label htmlFor="description">Discription :</label>
        <input className='border  m-1 p-1' type="text" id="description" name="description" placeholder='Description here...' onChange={handleChange}/>
        <label htmlFor="price">Price :</label>
        <input className='border  m-1 p-1' type="number" id="price" name="price" placeholder='Price here...' onChange={handleChange}/>
        <label htmlFor="category"  >Category : </label>
        <select className='m-1 p-1  border' id='category' name='category'  onChange={handleChange}>
          <option >Select  Category...</option>
          <option value='Smartphones'>Smartphones</option>
          <option value='Laptops'>Laptops</option>
          <option value='Beauty'>Beauty</option>
          <option value='Groceries'>Groceries</option>
          <option value='Clothes'>Clothes</option>
        </select>
        <label htmlFor="thumbnail">Thumbnail :</label>
        <input className='border block m-1 p-1' type="text" id="thumbnail" name="thumbnail" defaultValue="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"  onChange={handleChange}></input>
        <input className='border block m-2 p-1 bg-black text-white rounded w-1/3 hover:font-semibold' type="submit" value="Submit"></input>
      </form>
    </div>
  );
};
