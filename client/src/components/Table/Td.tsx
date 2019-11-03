import React, { useContext } from "react";
import TableContext from "./TableContext";
import ITableContext from "../../logic/Interface/ITableContext";
export default function Td(props: any) {
  const context: ITableContext = useContext(TableContext);
  return (
    <td>
      <div className="dlabel">{context.tableHeaders[props.headerIndex]}</div>
      {props.children}
    </td>
  );
}
