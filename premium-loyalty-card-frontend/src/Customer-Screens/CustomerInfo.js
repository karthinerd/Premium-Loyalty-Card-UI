import React, { useState, useEffect } from 'react';
import Table from '../Components/CustomTable';
import PaginationRounded from '../Components/TablePagination';
import { useNavigate } from 'react-router-dom';
import CenteredTabs from '../Components/ThreeTabs';
import '../Styles/CustomerInfo.css';

const MyTable = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const navigate = useNavigate();


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
    navigate(`/customerInfo/${row.original.id}`);
  };

  const [value, setValue] = useState(0);

  const handleTabChange = (newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { label: "Tab 1" },
    { label: "Tab 2" },
    { label: "Tab 3" },
  ];

  return (
    <div>
      {/* <Table title="Posts" data={displayedData} columns={columns} onRowClick={handleRowClick} /> */}
      <div className="tabs-container">
  <CenteredTabs value={value} tabs={tabs} onChange={handleTabChange} />
     </div>

      {/* <div className="pagination">
        <PaginationRounded
          currentPage={currentPage}
          totalPages={pageCount}
          onPageChange={handleChangePage}
          pageStyle={{ color: '#F4A26C' }}
          selectedPageStyle={{ color: '#F4A26C', fontWeight: 'bold' }}
        />
      </div> */}
    </div>
  );
};

export default MyTable;
