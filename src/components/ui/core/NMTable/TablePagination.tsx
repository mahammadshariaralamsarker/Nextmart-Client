import React, { useState } from "react";
import { Button } from "../../button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const TablePagination = ({ totalPage }: { totalPage: number }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(1);
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  }; 
  return (
    <div className="flex items-center gap-4 my-5">
      <Button
        onClick={() => {
          handlePrev();
          router.push(`${pathname}?page=${currentPage - 1}`);
        }}
        disabled={currentPage === 1}
        variant="outline"
        size="sm"
        className="rounded-full flex items-center w-8 h-8"
      >
        <ArrowLeft />
      </Button>
      {[...Array(totalPage)].map((_, idx) => (
        <Button
          onClick={() => {
            setCurrentPage(idx + 1);
            router.push(`${pathname}?page=${idx + 1}`);
          }}
          key={idx}
          variant={currentPage === idx + 1 ? "default" : "outline"}
          size="sm"
          className="rounded-full flex items-center  w-8 h-8"
        >
          {idx + 1}
        </Button>
      ))}

      <Button
        onClick={() => {
          handleNext();
          router.push(`${pathname}?page=${currentPage + 1}`);
        }}
        disabled={currentPage === totalPage}
        variant="outline"
        size="sm"
        className="rounded-full flex items-center  w-8 h-8"
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default TablePagination;
