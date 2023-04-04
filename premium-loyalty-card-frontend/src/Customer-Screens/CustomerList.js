import React, { useState, useEffect } from 'react';
import Table from '../Components/CustomTable';
import PaginationRounded from '../Components/TablePagination';

const MyTable = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data.slice(0, 100)))
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Body',
        accessor: 'body',
      },
    ],
    []
  );

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const displayedData = React.useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  }, [currentPage, data, itemsPerPage]);

  const handleRowClick = (row) => {
    console.log('Clicked row:', row.original.id);
  };

  return (
    <div className="container">
      <Table title="Posts" data={displayedData} columns={columns} onRowClick={handleRowClick} style={{ marginBottom: '20px' }} />
    </div>
  );
};

export default MyTable;
