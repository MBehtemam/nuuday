import React from "react";
import classnames from "classnames";
import "../../styles/components/Alert.scss";
interface IProps {
  type: "danger" | "warning" | "info";
  message: string;
}

export default function Alert(props: IProps) {
  const classNames = classnames({
    "ys-alert": true,
    "ys-alert--danger": props.type === "danger",
    "ys-alert--warning": props.type === "warning",
    "ys-alert--info": props.type === "info"
  });
  return <div className={classNames}>{props.message}</div>;
}
