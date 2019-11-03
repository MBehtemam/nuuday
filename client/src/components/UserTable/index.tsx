import React from "react";
import IUser from "../../logic/Interface/IUser";
import { Table, Tbody, Td, Th, Thead, Tr } from "../Table";
import { Link } from "react-router-dom";
interface IProps {
  users: IUser[];
}

export default function UserTable(props: IProps) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Username</Th>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Phone</Th>
        </Tr>
      </Thead>
      <Tbody>
        {props.users.map((user: IUser) => (
          <Tr key={user.id}>
            <Td>
              <Link to={`/${user.id}`}>{user.username}</Link>
            </Td>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{user.phone}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
