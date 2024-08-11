import React from "react";
import { styles } from "./styles";

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const { Container, Button, PageNumber } = styles;

  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totalPages === 0) return null;

  return (
    <Container>
      <Button
        onClick={handlePrev}
        variant="contained"
        color="primary"
        type="button"
      >
        Prev
      </Button>
      <PageNumber variant="h4">{currentPage}</PageNumber>
      <Button
        onClick={handleNext}
        variant="contained"
        color="primary"
        type="button"
      >
        Next
      </Button>
    </Container>
  );
};

export default Pagination;
