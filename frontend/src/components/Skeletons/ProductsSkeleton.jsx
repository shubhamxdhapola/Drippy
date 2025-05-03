const ProductsSkeleton = () => {
  const skeletonArray = Array(8).fill(null);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2">
      {skeletonArray.map((_, index) => (
        <div key={index} className="bg-white p-2 sm:p-4 rounded-lg flex flex-col">
          <div className="aspect-[4/5] overflow-hidden mb-4 ">
            <div className="skeleton w-full h-full rounded"> </div>
          </div>
          <div className="skeleton rounded mt-auto mb-2 h-4 w-[80%] "></div>
          <div className="skeleton rounded h-4 w-[40%]"></div>
        </div>
      ))}
    </div>
  );
};

export default ProductsSkeleton;
