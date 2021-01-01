import React from 'react'
import { Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";

import TableRow from "./TableRow";

export default function TableContainer() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th isNumeric>Age</Th>
        </Tr>
      </Thead>
      <Tbody>
        <TableRow />
      </Tbody>
    </Table>
  )
}
