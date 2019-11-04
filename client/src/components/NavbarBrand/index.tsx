import React from "react";
import "../../styles/components/NavbarBrand.scss";
import { Link } from "react-router-dom";
interface IProps {
  text: string;
  path: string;
}

export default function NavbarBrand(props: IProps) {
  return (
    <Link to={props.path}>
      <span className="ys-navbar-brand">{props.text}</span>
    </Link>
  );
}
