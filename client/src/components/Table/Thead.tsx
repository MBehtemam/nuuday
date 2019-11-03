import React from "react";

function Thead(props: any) {
  return (
    <thead>{React.cloneElement(props.children, { isHeader: true })}</thead>
  );
}

export default Thead;
