import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "../Styles/Pagination.css";

const PaginationRounded = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Stack spacing={2} sx={{ justifyContent: "center" }} className={className}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        sx={{
          "& .Mui-selected": {
            color: "orange",
          },
        }}
      />
    </Stack>
  );
};

export default PaginationRounded;
