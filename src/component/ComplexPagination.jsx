import React from "react";

import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
const ComplexPagination = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const { search, pathname } = useLocation();

  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        onClick={() => handlePageChange(pageNumber)}
        key={pageNumber}
        className={`btn btn-xs sm:btn-md border-none join-item ${
          activeClass ? "bg-base-300 border-base-300" : " "
        }`}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButton = () => {
    const pagebuttons = [];
    // first button
    pagebuttons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

    // dots

    if (page > 2) {
      pagebuttons.push(
        <button className="join-item btn btn-xs sm:btn-md" key="dots-1">
          ...
        </button>
      );
    }

    // active button
    if (page !== 1 && page !== pageCount) {
      pagebuttons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }

    // dots
    if (page < pageCount - 1) {
      pagebuttons.push(
        <button className="join-item btn btn-xs sm:btn-md" key="dots-2">
          ...
        </button>
      );
    }

    // last button
    pagebuttons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    );

    return pagebuttons;
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          type="button"
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          prev
        </button>

        {renderPageButton()}

        <button
          type="button"
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = pageCount;
            handlePageChange(nextPage);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default ComplexPagination;
