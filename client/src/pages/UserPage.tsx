import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as UserAction from "../logic/Actions/UserAction";
import IReducer from "../logic/Interface/IReducer";
import IUserResponse from "../logic/Interface/IUserResponse";
import Loading from "../components/Loading/Loading";
import Alert from "../components/Alert/Alert";
import UserDetail from "../components/UserDetail";
interface IProps {
  user: IUserResponse;
  getUser: Function;
  match: {
    params: {
      userId: string;
    };
  };
}
function UserPage(props: IProps) {
  useEffect(() => {
    props.getUser({ userId: parseInt(props.match.params.userId, 10) });
  }, [props.match.params.userId]);
  if (props.user.isFetching) {
    return <Loading />;
  } else if (props.user.didInvalidate) {
    return <Alert type="warning" message={props.user.err} />;
  } else {
    if (props.user.items.id !== -1) {
      return <UserDetail user={props.user.items} />;
    } else {
      return <Alert type="danger" message="No User Found" />;
    }
  }
}

const mapStateToProps = (state: IReducer) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch: Function) => ({
  getUser: ({ userId }: { userId: number }) =>
    dispatch(UserAction.getUser({ userId }))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
