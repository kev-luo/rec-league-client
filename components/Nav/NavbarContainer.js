import React from 'react'
import { Flex } from "@chakra-ui/react";

export default function NavbarContainer({children}) {
  return (
    <Flex 
      as="nav"
      w="100%"
    >
      {children}
    </Flex>
  )
}