const NewArrivalsSkeleton = () => {
    const skeletonArray = Array(4).fill(null)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-2">
        {skeletonArray.map((_, index) => (
          <div key={index} className="flex w-full flex-col gap-3">
            <div className="skeleton w-full rounded h-[450px] md:h-[375px]"></div>
          </div>        
        ))}
      </div>
    );
}

export default NewArrivalsSkeleton
