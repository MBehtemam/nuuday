import React from "react";
import IUser from "../logic/Interface/IUser";

interface IProps {
  user: IUser;
}
function UserPage(props: IProps) {
  return <span>User</span>;
}

export default UserPage;
