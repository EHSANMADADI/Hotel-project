"use client";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import "./index.css";
import { EventHandler, SyntheticEvent, useState } from "react";
import ReactPaginate from "react-paginate";
import PginationImpl from "./types";

const Pagination = ({ onClick, items, perPage }: PginationImpl) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + perPage;
  const pageCount = Math.ceil(items / perPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * perPage) % items;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <div className="w-full flex justify-center items-center mb-[-5px]">
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <div
              className="w-[40px] bg-white rounded-full h-[40px] flex justify-center items-center
            transition-all duration-200 hover:bg-primary hover:text-white mb-[5px] text-zinc-500"
            >
              <ArrowLeft2 size="16" />
            </div>
          }
          containerClassName="pagination"
          onPageChange={handlePageClick}
          onClick={() => onClick(itemOffset, endOffset)}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          pageClassName="page"
          activeClassName="active-page"
          previousLabel={
            <div
              className="w-[40px] bg-white rounded-full h-[40px] flex justify-center items-center
            transition-all duration-200 hover:bg-primary hover:text-white mb-[5px] text-zinc-500"
            >
              <ArrowRight2 size="16" />
            </div>
          }
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};
export default Pagination;
