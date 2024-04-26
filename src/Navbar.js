import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    
      <div className=" flex justify-between p-4 bg-stone-200">
        <div className=" flex self-center bg-black text-white p-1 rounded">
            E-commerce Frontend
        </div>
        <div>
          <Link to={"/"} className='mr-3 p-1 hover:bg-black hover:text-white rounded'>Home</Link>
          <Link to={"/addproduct"} className='p-1 hover:bg-black hover:text-white rounded'>AddProduct</Link>
          
        </div>
      </div>
    
  );
}
