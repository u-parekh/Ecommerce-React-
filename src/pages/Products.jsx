import { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 shadow rounded">
            <img src={product.image} className="h-40 mx-auto" />
            <h3 className="font-semibold mt-2">{product.title}</h3>
            <p className="text-blue-600 font-bold">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 w-full bg-blue-500 text-white py-1 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
