import { Link } from "react-router-dom";
import mensCollectionImage from "../../assets/mens-collection.png";
import womensCollectionImage from "../../assets/womens-collection.png";

const GenderCollectionSection = () => {
  const genderCollection = [
    {
      image: mensCollectionImage,
      text: "Men's Collection",
      query: "Men",
    },
    {
      image: womensCollectionImage,
      text: "Women's Collection",
      query: "Women",
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-3">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {genderCollection.map((collection, index) => (
          <div
            className="relative flex-1"
            key={index}
            data-aos={`${index === 0 ? "fade-right" : "fade-left"}`}
          >
            <img
              src={collection.image}
              alt={collection.text}
              className={`w-full h-[400px] md:h-[500px] object-cover object-top`}
            />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 bg-white bg-opacity-90 p-4">
              <h2 className="gender-text text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {collection.text}
              </h2>
              <Link
                to={`/collections/all?gender=${collection.query}`}
                className="text-gray-900 underline"
              >
                Explore Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenderCollectionSection;
