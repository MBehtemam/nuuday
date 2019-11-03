import IUser from "./IUser";
interface IUserResponse {
  isFetching: boolean;
  didInvalidate: boolean;
  err: string;
  items: IUser;
}
export default IUserResponse;
