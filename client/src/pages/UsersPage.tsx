import React, { useEffect } from "react";
import IUsersResponse from "../logic/Interface/IUsersResponse";
import IReducer from "../logic/Interface/IReducer";
import * as UsersAction from "../logic/Actions/UsersActions";
import { connect } from "react-redux";
import Loading from "../components/Loading/Loading";
import Alert from "../components/Alert/Alert";
import UsersTable from "../components/UserTable";
import "../styles/pages/UsersPage.scss";
interface IProps {
  users: IUsersResponse;
  getUsers: Function;
  history: any;
}

function UsersPage(props: IProps) {
  useEffect(() => {
    props.getUsers();
  }, []);
  if (props.users.isFetching) {
    return <Loading />;
  } else if (props.users.didInvalidate) {
    return <Alert type="warning" message={props.users.err} />;
  } else {
    return (
      <div className="ys-users-page">
        <UsersTable users={props.users.items} history={props.history} />
      </div>
    );
  }
}
const mapStateToProps = (state: IReducer) => ({
  users: state.users
});

const mapDispatchToProps = (dispatch: Function) => ({
  getUsers: () => dispatch(UsersAction.getUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
