import { useEffect, useState } from "react";
import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/slices/productsSlice";
import { apiClient } from "../utils/apiClient";
import ProductDetailsSkeleton from "../components/Skeletons/ProductDetailsSkeleton";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProduct] = useState();
  const [bestSellerError, setBestSellerError] = useState(false);

  useEffect(() => {
    document.title = "Drippy - Home"
  })

  useEffect(() => {
    dispatch(
      fetchProductsByFilters({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      })
    );

    const fetchBestSeller = async () => {
      try {
        const response = await apiClient.get(`api/products/best-seller`);
        setBestSellerProduct(response.data.bestSellerProduct);
      } catch {
        setBestSellerError(true);
      }
    };
    fetchBestSeller();
  }, [dispatch]);
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      <h2
        className="text-center text-2xl sm:text-3xl font-bold mb-4"
        data-aos="zoom-in"
      >
        Best Seller
      </h2>
      <p
        className="text-sm md:text-md text-center mb-2 text-gray-600 px-4"
        data-aos="zoom-in"
      >
        Style icons approved, wardrobe heroes unlocked. These trending pieces
        are what everyone's wearing—and trust us, you’ll want in.
      </p>
      {bestSellerProduct ? (
        <ProductDetails productId={bestSellerProduct._id} />
      ) : bestSellerError ? (
        <div className="flex justify-center items-center mb-[100px]">
          <span className="mt-7">
            Something went wrong! Unable to fetch this product
          </span>
        </div>
      ) : (
        <ProductDetailsSkeleton />
      )}
      <div className="container mx-auto">
        <h2
          className="text-2xl sm:text-3xl text-center font-bold mb-4"
          data-aos="zoom-in"
        >
          Top Wears for Women
        </h2>
        <p
          className="text-sm md:text-md text-center mb-8 text-gray-600 px-4"
          data-aos="zoom-in"
        >
          From effortless elegance to bold statements, our top picks are made to
          turn heads and win hearts—your wardrobe’s new obsessions await.
        </p>
        <div className="px-2">
          <ProductGrid products={products} loading={loading} error={error} />
        </div>
      </div>
      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
