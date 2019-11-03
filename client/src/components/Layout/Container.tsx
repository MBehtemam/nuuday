import React from "react";
import classnames from "classnames";
import "../../styles/layout/Container.scss";
interface IProps {
  direction: "row" | "column";
  children?: any;
}

function Container(props: IProps) {
  const classNames = classnames({
    "ys-container": true,
    "ys-container--row": props.direction === "row",
    "ys-container--column": props.direction === "column"
  });
  return <div className={classNames}>{props.children}</div>;
}

export default Container;
