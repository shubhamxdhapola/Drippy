import { Link } from "react-router-dom";
import ProductsSkeleton from "../Skeletons/ProductsSkeleton";

const ProductGrid = ({ products, loading, error }) => {
  if (loading) return <ProductsSkeleton />;
  if (error)
    return (
      <div className="flex justify-center items-center">
        <span>Something went wrong! Unable to fetch products</span>
      </div>
    );

  return products.length > 0 ? (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {products.map((product, index) => (
        <Link
          key={index}
          to={`/product/${product._id}`}
          className="block"
          data-aos="flip-right"
        >
          <div className="bg-white p-2 sm:p-4 rounded-lg flex flex-col">
            <div className="aspect-[4/5] overflow-hidden mb-4 ">
              <img
                src={product.images[0].url}
                alt={product.images[0].altText || product.name}
                className="w-full h-full object-cover rounded"
              />
            </div>        
              <h3 className="text-sm mt-auto mb-1">{product.name}</h3>
              <p className="text-gray-500 font-medium text-sm tracking-tighter">
                ₹{product.price.toLocaleString()}
              </p>            
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <div className="text-center h-[50vh] flex justify-center items-center">
      <span>No products to show for the requested query!</span>
    </div>
  );
};

export default ProductGrid;
