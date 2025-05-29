import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/slices/paginationSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ totalProducts, productsPerPage }) => {

  const dispatch = useDispatch();
  const totalPages = [...Array(Math.ceil(totalProducts / productsPerPage))];
  const { currentPage } = useSelector((state) => state.pagination);

  const handlePageChange = (currentPage) => {
    window.scrollTo(0, 0);
    dispatch(setCurrentPage(currentPage));
  };
  
  const firstPage = 1;
  const lastPage = totalPages.length;
  
  return (
    <div className="flex justify-center items-center gap-2 my-10">
      <div className="join">
        <button
          className={`join-item btn ${
            currentPage === firstPage || totalPages.length < 1
              ? "hidden"
              : "inline-block"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="join">
        {totalPages.length > 1 && totalPages.map((_, index) => (
          <button
            key={index}
            className={`join-item btn rounded-md ${
              currentPage === index + 1 && "btn-active "
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="join">
        <button
          className={`join-item btn ${
            currentPage === lastPage || totalPages.length < 1
              ? "hidden"
              : "inline-block"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
