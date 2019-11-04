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
      <div className="ys-user-detail__info">
        <h3 className="detail__title">
          {props.user.name}
          <span className="username">({props.user.username})</span>
        </h3>
        <div className="info__section">
          <span className="section__title">Contact</span>
          <div className="section__part">
            <span className="part__label">Phone</span>
            <span className="part__value">{props.user.phone}</span>
          </div>
          <div className="section__part">
            <span className="part__label">Email</span>
            <span className="part__value">{props.user.email}</span>
          </div>
          <div className="section__part">
            <span className="part__label">Company</span>
            <span className="part__value">{props.user.company.name}</span>
          </div>
          <div className="section__part">
            <span className="part__label">Address</span>
            <span className="part__value">
              {props.user.address.suite},{props.user.address.zipcode},
              {props.user.address.street},{props.user.address.zipcode}
            </span>
          </div>
        </div>
      </div>
      <div className="ys-user-detail__map">
        <UserMap
          lat={parseFloat(props.user.address.geo.lat)}
          lng={parseFloat(props.user.address.geo.lng)}
        />
      </div>
    </div>
  );
}
