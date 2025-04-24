import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const NewArrivals = () => {

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  }

  const slideRight = () => sliderRef.current?.slickNext();
  const slideLeft = () => sliderRef.current?.slickPrev();

  const [newArrivals, setNewArrivals ] = useState([])

  useEffect(() => {
    const fetchNewArrivals = async() => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
        )
        setNewArrivals(response.data.newArrivals)
      } catch(error) {
        console.log(error)
      }
    }
    fetchNewArrivals()
  }, []) 

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4" data-aos="zoom-in">Explore New Arrivals</h2>
        <p className="text-gray-600 mb-8" data-aos="zoom-in">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        {/* Scrollable Content  */}
        <Slider ref={sliderRef} {...settings}>
          {newArrivals.map((product) => (
           <div key={product._id} className="px-2" data-aos="flip-right">
                <div className="relative">
                  <img
                    src={product.images[0]?.url}
                    alt={product.images[0]?.altText || product.name}
                    className="w-full h-[375px] object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg text-left">
                    <Link to={`/product/${product._id}`}>
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="mt-1">₹{product.price.toLocaleString()}</p>
                    </Link>
                  </div>
                </div>
           </div>
          ))}
        </Slider>

        {/* Scroll Buttons */}
        <div className="flex justify-between">
          <button
            onClick={slideLeft}
            className="p-2 rounded border bg-white text-black cursor-pointer"
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={slideRight}
            className="p-2 rounded border bg-white text-black cursor-pointer"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewArrivals;
