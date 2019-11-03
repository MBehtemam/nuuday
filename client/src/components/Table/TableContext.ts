import React from "react";
import ITableContext from "../../logic/Interface/ITableContext";
import useTableState from "./useTableState";
const defaultValue: ITableContext = {
  tableHeaders: [],
  addTableHeader: h => true
};
const TableContext = React.createContext(defaultValue);
export default TableContext;
