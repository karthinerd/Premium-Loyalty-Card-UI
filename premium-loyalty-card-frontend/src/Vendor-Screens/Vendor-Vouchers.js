import React, { useState, useEffect } from "react";
import Table from "../Components/CustomTable";
import PaginationRounded from "../Components/TablePagination";

const VendorVouchers = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

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
        Header: "Voucher Name",
        accessor: "bdy",
      },
      {
        Header: "Created On",
        accessor: "by",
      },
      {
        Header: "Redeemed On",
        accessor: "bod",
      },
      {
        Header: "Vendor",
        accessor: "ody",
      },
      {
        Header: "Status",
        accessor: "dy",
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

  return (
    <div>
      <Table
        data={displayedData}
        columns={columns}
        cardClassName="card"
        clickableRows={false}
        buttonClassName="add-subscription "
        buttonTextName="Import CSV"
        showButton="true"
      />

      <div>
        <PaginationRounded
          currentPage={currentPage}
          totalPages={pageCount}
          onPageChange={handleChangePage}
          pageStyle={{ color: "#F4A26C" }}
          selectedPageStyle={{ color: "#F4A26C", fontWeight: "bold" }}
          className="subPagination"
        />
      </div>
    </div>
  );
};

export default VendorVouchers;
