import React from "react";
import { useTable } from "react-table";
import "../Styles/CustomTable.css";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

const Table = ({
  title,
  data,
  columns,
  onRowClick,
  tableClassName,
  titleClassName,
  cardClassName,
  clickableRows,
  buttonClassName,
  buttonTextName,
  showButton // new prop to conditionally render the button
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate.push("/add-subscription");
  };

  return (
    <div className={tableClassName}>
      <h2 className={titleClassName}>{title}</h2>
      {showButton && ( // render the button only if showButton is true
        <CustomButton
          className={buttonClassName}
          text={buttonTextName}
          onClick={handleClick}
        />
      )}
      <div className={cardClassName}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  onClick={clickableRows ? () => onRowClick(row) : undefined}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
