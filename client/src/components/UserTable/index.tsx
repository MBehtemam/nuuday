import React from "react";
import IUser from "../../logic/Interface/IUser";
import { Table, Tbody, Td, Th, Thead, Tr } from "../Table";
interface IProps {
  users: IUser[];
  history: {
    push: Function;
  };
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
          <Tr key={user.id} onClick={() => props.history.push(`/${user.id}`)}>
            <Td>{user.username}</Td>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{user.phone}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
