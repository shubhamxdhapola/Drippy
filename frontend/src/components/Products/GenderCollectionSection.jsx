import { Link } from 'react-router-dom'
import mensCollectionImage from '../../assets/mens-collection.jpg'
import womensCollectionImage from '../../assets/womens-collection.webp'

const GenderCollectionSection = () => {

  const genderCollection = [
    {
      image : mensCollectionImage,
      text : "Men's Collection",
      query : "Men"
    },
    {
      image : womensCollectionImage,
      text : "Women's Collection",
      query : "Women"
    },
  ]

  return (
   <section className='py-16 px-4 lg:px-3'>
    <div className='container mx-auto flex flex-col md:flex-row gap-8'>

      {genderCollection.map((collection, index) => (
        <div className='relative flex-1' key={index}>
          <img src={collection.image} alt={collection.text} className='w-full h-[500px] object-cover rounded-lg'/>
          <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 rounded-lg'>
            <h2 className='text-2xl font-bold text-gray-900 mb-3'>
              {collection.text}
            </h2>
            <Link to={`/collections/all?gender=${collection.query}`}className='text-gray-900 underline'>
              Explore Now
            </Link>
          </div>
        </div>
      ))}

    </div>
   </section>
  )
}

export default GenderCollectionSection
