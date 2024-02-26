import { getPagesArray } from "./pages";
import { FC } from "react";

type PaginationProps = {
  totalPages: number;
  page: number;
  changePage: (pageNumber: number) => void;
};

const Pagination: FC<PaginationProps> = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? "page page__current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
