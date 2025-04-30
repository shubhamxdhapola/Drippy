import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductDetails } from "../../redux/slices/productsSlice";
import { updateProduct } from "../../redux/slices/adminProductsSlice";
import { apiClient } from "../../utils/apiClient";
import { Loader } from "lucide-react";
import ErrorPage from "../Common/ErrorPage";
import { toast } from "sonner";

const EditProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { selectedProduct, loading, error } = useSelector(
    (state) => state.products
  );
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [],
  });

  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedProduct) {
      setProductData(selectedProduct);
    }
  }, [selectedProduct]);

  const handleOnChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);
      const { data } = await apiClient.post(`api/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setProductData((prevData) => ({
        ...prevData,
        images: [...prevData.images, { url: data.ImageUrl, altText: "" }],
      }));
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id, productData }))
    .unwrap()
    .then(() => toast.success("Product updated successfully!"))
    .catch(() => toast.error("Unable to update product"))
    navigate("/admin/products");
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
        <ErrorPage />
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block font-semibold mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={productData.name}
            onChange={handleOnChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block font-semibold mb-2">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={productData.description}
            onChange={handleOnChange}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="price" className="block font-semibold mb-2">
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            value={productData.price}
            onChange={handleOnChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="count-in-stock" className="block font-semibold mb-2">
            Count in Stock
          </label>
          <input
            type="number"
            name="countInStock"
            id="count-in-stock"
            value={productData.countInStock}
            onChange={handleOnChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="sku" className="block font-semibold mb-2">
            SKU
          </label>
          <input
            type="text"
            name="sku"
            id="sku"
            value={productData.sku}
            onChange={handleOnChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="sizes" className="block font-semibold mb-2">
            Sizes (comma-separated)
          </label>
          <input
            type="text"
            name="sizes"
            id="sizes"
            value={productData.sizes.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="colors" className="block font-semibold mb-2">
            Colors (comma-separated)
          </label>
          <input
            type="text"
            name="colors"
            id="colors"
            value={productData.colors.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="image" className="block font-semibold mb-2">
            Upload Image
          </label>
          <input type="file" onChange={handleImageUpload} />
          {uploading && <p>Uplaoding Image...</p>}
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || "Product Image"}
                  className="w-20 h-20 object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
