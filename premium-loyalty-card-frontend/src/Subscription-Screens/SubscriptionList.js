import React, { useState, useEffect } from "react";
import Table from "../Components/CustomTable";
import PaginationRounded from "../Components/TablePagination";
import { useNavigate } from "react-router-dom";
import "../Styles/CustomersList.css";

const SubscriptionList = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data.slice(0, 100)));
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "ttle",
      },
      {
        Header: "Price",
        accessor: "b",
      },
      {
        Header: "Active Vouchers",
        accessor: "bod",
      },
      {
        Header: "Active Customers",
        accessor: "bo",
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
    if (row.original) {
      console.log("Clicked row:", row.original.id);
      navigate(`/SubscriptionInfo/${row.original.id}`);
    }
  };

  return (
    <div>
      <Table
        title="All Subscriptions"
        data={displayedData}
        columns={columns}
        onRowClick={handleRowClick}
        tableClassName="table"
        titleClassName="table-title"
        cardClassName="card"
        clickableRows={true}
        buttonClassName="add-subscription "
        buttonTextName="+ Create Subscription"
      />
      <div className="pagination-container">
        <PaginationRounded
          currentPage={currentPage}
          totalPages={pageCount}
          onPageChange={handleChangePage}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default SubscriptionList;
