import IUser from "./IUser";
interface IUsersResponse {
  isFetching: boolean;
  didInvalidate: boolean;
  err: string;
  items: IUser[];
}
export default IUsersResponse;
