import React from "react";
import "../../styles/components/Navbar.scss";

interface IProps {
  children?: any;
}
export default function Navbar(props: IProps) {
  return <div className="ys-navbar">{props.children}</div>;
}
