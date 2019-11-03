import IUserResponse from "./IUserResponse";
import IUsersResponse from "./IUsersResponse";

interface IReducer {
  user: IUserResponse;
  users: IUsersResponse;
}
export default IReducer;
