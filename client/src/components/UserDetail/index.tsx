import React from "react";
import IUser from "../../logic/Interface/IUser";
import UserMap from "../UserMap/UserMap";
import "../../styles/pages/UserDetail.scss";
interface IProps {
  user: IUser;
}

export default function UserDetail(props: IProps) {
  return (
    <div className="ys-user-detail">
      <div className="ys-user-detail__info"></div>
      <div className="ys-user-detail__map">
        <UserMap
          lat={parseFloat(props.user.address.geo.lat)}
          lng={parseFloat(props.user.address.geo.lng)}
        />
      </div>
    </div>
  );
}
