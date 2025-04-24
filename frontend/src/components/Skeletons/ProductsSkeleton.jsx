const ProductsSkeleton = () => {

  const skeletonArray = Array(8).fill(null)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {skeletonArray.map((_, index) => (
        <div key={index} className="flex w-full flex-col gap-3">
          <div className="skeleton w-full rounded h-[350px]"></div>
          <div className="skeleton h-4 w-40 rounded"></div>
          <div className="skeleton h-4 w-24 rounded"></div>
        </div>        
      ))}
    </div>
  );
};

export default ProductsSkeleton;
