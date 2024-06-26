import React from 'react'

export default function ItemCard(props) {
    // console.log(props);
    return (
      <div className="bg-stone-300 m-2 p-2 rounded w-60">
        <img
          src={`${props.data.thumbnail}`}
          alt="unable to fetch"
          height="300"
          width="200"
          className="rounded mx-auto"
        />
        <h1>Name : {props.data.title}</h1>
        <p>Company : {props.data.brand}</p>
        <p>Category : {props.data.category}</p>
        <p>Price : {props.data.price}</p>
        <p>Discount : {props.data.discountPercentage}</p>

        <button className="bg-black text-white m-2 p-1 rounded w-2/3 " onClick={()=>props.handleClick(props.data._id)}>
          Delete
        </button>
      </div>
    );
}
