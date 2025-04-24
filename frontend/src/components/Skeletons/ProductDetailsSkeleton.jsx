import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="p-0 md:p-6">
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row">
          {/* Desktop version side-images */}
          <div className="hidden md:block space-y-4 mr-6">
            <div className="skeleton h-20 w-20 rounded-lg"></div>
            <div className="skeleton h-20 w-20 rounded-lg"></div>
            <div className="skeleton h-20 w-20 rounded-lg"></div>
            <div className="skeleton h-20 w-20 rounded-lg"></div>
            <div className="skeleton h-20 w-20 rounded-lg"></div>
          </div>
          <div className="md:w-1/2">
            <div className="skeleton h-[463px] rounded-lg"></div>
          </div>
          {/* Phone version images */}
          <div className="flex md:hidden space-x-4 overflow-x-auto p-1" style={{scrollbarWidth : 'none'}}>
            <div className="skeleton h-20 w-20 rounded-lg"></div>
            <div className="skeleton h-20 w-20 rounded-lg"></div>
            <div className="skeleton h-20 w-20 rounded-lg"></div>
            <div className="skeleton h-20 w-20 rounded-lg"></div>
          </div>
          <div className="md:w-1/2 md:ml-6 space-y-5">
            <div className="skeleton h-10 w-[70%] rounded-lg"></div>
            <div className="skeleton h-8 w-[30%] rounded-lg"></div>
            <div className="skeleton h-24 w-full rounded-lg"></div>
            <div className="skeleton h-10 w-[50%] rounded-lg"></div>
            <div className="skeleton h-10 w-[60%] rounded-lg"></div>
            <div className="skeleton h-10 w-[30%] rounded-lg"></div>
            <div className="skeleton h-12 w-full rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
