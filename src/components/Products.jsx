import { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data); // Store the fetched data in state
      } catch (error) {
        console.error('Error fetching the products:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      {/* <Navbar /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <div style={{display: "inline-block"}} key={product.id} className="border rounded-lg p-4 shadow-md">
            <img style={{height: "200px", width: "200px"}}
              src={product.image} 
              alt={product.title} 
              className="w-full h-48 object-contain"
            />
            {/* <h2 style={{height: "200px", width: "200px"}} className="text-xl font-semibold mt-4">{product.title}</h2> */}
            {/* <p style={{height: "200px", width: "200px"}} className="text-gray-600 mt-2">{product.description}</p> */}
            <p style={{height: "200px", width: "200px"}} className="text-lg font-bold mt-2">${product.price}</p>
            <p style={{height: "200px", width: "200px"}} className="text-sm text-gray-500 mt-1">
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
            <button className="bg-yellow-500 text-white mt-4 px-4 py-2 rounded hover:bg-yellow-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;