import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Loader, Settings, Trash2 } from "lucide-react";
import {
  deleteProduct,
  fetchAdminProducts,
} from "../../redux/slices/adminProductsSlice";
import ErrorPage from "../Common/ErrorPage";
import { toast } from "sonner";

const ProductManagement = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.adminProducts
  );

  useEffect(() => {
    dispatch(fetchAdminProducts());
  }, [dispatch]);

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId))
      .unwrap()
      .then(() => toast.success("Product deleted successfully!"))
      .catch(() => toast.error("Unable to delete product!"));
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="text-gray-900 animate-spin" size={30} />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <ErrorPage />;
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Product Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-sm uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">SKU</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b hover:bg-gray-50 cursor-pointer duration-300"
                >
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="p-4">₹{product.price.toLocaleString()}</td>
                  <td className="p-4">{product.sku}</td>
                  <td className="p-4 flex items-center gap-2">
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className="text-gray-800 hover:text-gray-900 duration-300 tooltip"
                      data-tip="Edit"
                    >
                      <Settings />
                    </Link>
                    <button
                      onClick={() => handleDeleteProduct(product._id)}
                      className="text-gray-800 hover:text-gray-900 duration-300 tooltip"
                      data-tip="Delete"
                    >
                      <Trash2 />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
