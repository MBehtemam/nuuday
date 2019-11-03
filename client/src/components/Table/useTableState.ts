import React, { useState } from "react";
type arrayType = string[];
const useTableState = () => {
  const defaultValue: string[] = [];
  const tableState = useState(defaultValue);
  return tableState;
};
export default useTableState;
