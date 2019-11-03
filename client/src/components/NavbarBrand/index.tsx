import React from "react";
import "../../styles/components/NavbarBrand.scss";

interface IProps {
  text: string;
}

export default function NavbarBrand(props: IProps) {
  return <span className="ys-navbar-brand">{props.text}</span>;
}
