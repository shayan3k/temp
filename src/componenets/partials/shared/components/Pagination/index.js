import React from "react";

export default function index({
  hasMore,
  setHasMore,
  itemCount,
  pageCount,
  currentPage,
  setCurrentPage,
  class_name,
}) {
  if (pageCount < currentPage) setCurrentPage(pageCount);
  if (pageCount === 0) setCurrentPage(1);
  return (
    <>
      <ul className={`pagination pagination-sm mx-auto ${class_name}`}>
        <li className="page-item">
          <button
            className="page-link mx-1"
            tabIndex="قبلی"
            onClick={(e) => {
              setCurrentPage(currentPage - 1);
            }}
            disabled={currentPage === 1 ? true : false}
          >
            {/* {status === "active" */}
            <span className="sr-only">(فعلی)</span>
            قبلی
          </button>
        </li>
        {currentPage === 1 ? null : (
          <li className="page-item">
            <button
              className="page-link"
              tabIndex={currentPage - 1}
              onClick={(e) => {
                setCurrentPage(currentPage - 1);
              }}
            >
              {currentPage - 1}
            </button>
          </li>
        )}
        <li className="page-item active">
          <button className="page-link" tabIndex={currentPage}>
            {currentPage}
          </button>
        </li>

        {currentPage === pageCount || pageCount === 0 ? null : (
          <li className="page-item">
            <button
              className="page-link"
              tabIndex={currentPage + 1}
              onClick={(e) => {
                setHasMore(false);
                setCurrentPage(currentPage + 1);
              }}
            >
              {currentPage + 1}
            </button>
          </li>
        )}

        <li className="page-item mx-1">
          <button
            className="page-link"
            onClick={(e) => {
              setHasMore(false);
              setCurrentPage(currentPage + 1);
            }}
            tabIndex="بعدی"
            disabled={hasMore ? false : true}
          >
            بعدی
          </button>
        </li>
      </ul>
      {!class_name && (
        <p className="my-1">
          <b>ایتمهای یافت شده: </b> {`${itemCount}`}
        </p>
      )}
    </>
  );
}
