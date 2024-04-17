import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function AddProduct() {
  const [product, setProduct]= useState({});

  const addProducts = async(product)=>{
    const res = await axios.post('http://localhost:8080/products',product)
    console.log(res);
    // setProduct(res.data);
  }

  const handleChange = (e)=>{
    setProduct({
      ...product,[e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(product);
    addProducts(product);

  }
  return (
    <div>
      <h1>AddProduct</h1>
      <form className='m-auto p-3 ' onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input className='border block m-1 p-1' type="text" id="title" name="title"  onChange={handleChange}/>
        <label htmlFor="brand">Brand:</label>
        <input className='border block m-1 p-1' type="text" id="brand" name="brand"  onChange={handleChange}/>
        <label htmlFor="description">Discription:</label>
        <input className='border block m-1 p-1' type="text" id="description" name="description"  onChange={handleChange}/>
        <label htmlFor="price">Price:</label>
        <input className='border block m-1 p-1' type="number" id="price" name="price"  onChange={handleChange}/>
        <label htmlFor="category"  >Category: </label>
        <select className='m-1 p-1 block border' id='category' name='category'  onChange={handleChange}>
          <option >Select  Category...</option>
          <option value='smartphones'>Smartphones</option>
          <option value='Gadgets'>Gadgets</option>
          <option value='Electronics'>Electronics</option>
        </select>
        <label htmlFor="thumbnail">Thumbnail</label>
        <input className='border block m-1 p-1' type="text" id="thumbnail" name="thumbnail" defaultValue="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"  onChange={handleChange}></input>
        <input className='border block m-2 p-1 bg-black text-white rounded' type="submit" value="Submit"></input>
      </form>
    </div>
  );
};
