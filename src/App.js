
import './App.css';
import ItemCard from './ItemCard';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  let data = {
    id: 1,
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
  };
  return (
    <>
    <Navbar/>
      <div className="container m-auto bg-stone-50">
        <div className="flex flex-wrap justify-center m-auto ">Items</div>
          <ItemCard data = {data}></ItemCard>
      </div>
<Footer/>
    </>
  );
}

export default App;
