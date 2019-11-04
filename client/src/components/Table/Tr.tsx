import React, { useContext, useEffect } from "react";
import TableContext from "./TableContext";
import ITableContext from "../../logic/Interface/ITableContext";
export default function Tr(props: any) {
  const context: ITableContext = useContext(TableContext);
  useEffect(() => {
    if (props.isHeader === true) {
      const headers = props.children.map(
        (thItem: any) => thItem.props.children
      );
      context.addTableHeader(headers);
    }
  }, props.isHeader);
  if (props.isHeader) {
    return (
      <tr>
        {React.Children.map(props.children, (thItem, index) => {
          return <th key={index}>{thItem.props.children}</th>;
        })}
      </tr>
    );
  } else {
    return (
      <tr onClick={() => props.onClick && props.onClick()}>
        {React.Children.map(props.children, (tdItem, index) =>
          React.cloneElement(tdItem, { headerIndex: index, key: index })
        )}
      </tr>
    );
  }
}
