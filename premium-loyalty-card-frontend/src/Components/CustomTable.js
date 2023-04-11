import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
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
  showButton,
  buttonPath,
  showIcons,
  icon,
  hoverRows,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(buttonPath);
  };

  const handleEditClick = (row) => {
    const id = row.original.id;
    navigate(`/editUserInfo/${id}`);
  };

  return (
    <div className={tableClassName}>
      <h2 className={titleClassName}>{title}</h2>
      {showButton && ( // render the button only if showButton is true
        <CustomButton
          className={buttonClassName}
          text={buttonTextName}
          onClick={handleClick}
          icon={icon}
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
                {showIcons && ( // new code to show/hide icons
                  <th></th>
                )}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps({
              className: hoverRows ? "table-body-hover" : "table-body",
            })}
          >
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
                  {showIcons && (
                    <td style={{ width: "80px" }}>
                      <EditIcon
                        style={{ color: "#ccc" }}
                        className="icon-hover-blue"
                        onClick={() => handleEditClick(row)}
                      />
                      <DeleteIcon
                        style={{ color: "#ccc", marginLeft: "12px" }}
                        className="icon-hover-blue"
                      />
                    </td>
                  )}
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
