
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';

function App() {

  const [product, setProduct] = useState([{
    _id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    ],
  }])

  

  const getProducts = async()=>{
    const res = await axios.get('/products')
    // console.log(res);
    setProduct(res.data);
  }
 
  const handleClick = async (id)=>{
    const res = await axios.delete(`/products/${id}`)
    if(res.data._id){
      setProduct(product.filter((p)=>p._id!==res.data._id))

    }else{
      // console.log(res.data)
    }
    // console.log(res)
    // console.log(id);
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="container m-auto  bg-stone-50">
        <h1 className='bg-black text-white p-2 m-2 rounded font-bold'>
      Items
        </h1>
        <div className="flex flex-wrap justify-center m-auto ">
        {product.map((item)=>{
          return <ItemCard data = {item} key = {item._id} handleClick = {handleClick}></ItemCard>
          
        })}
        </div>
      </div>

    </>
  );
}

export default App;
