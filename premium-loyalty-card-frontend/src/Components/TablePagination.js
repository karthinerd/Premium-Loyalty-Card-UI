import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({currentPage, totalPages, onPageChange}) {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Stack spacing={2} sx={{ justifyContent: 'center' }}>
      <Pagination count={totalPages} page={currentPage} onChange={handleChange} variant="outlined" shape="rounded"
        sx={{
          "& .Mui-selected": {
            color: "orange"
          }
        }}
      />
    </Stack>
  );
}
