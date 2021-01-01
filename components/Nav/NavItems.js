import React from 'react'
import { Box, Stack } from "@chakra-ui/react";

import NavItem from "./NavItem";

export default function NavItems() {
  return (
    <Box>
      <Stack>
        <NavItem href="/login">Login</NavItem>
        <NavItem href="/register">Register</NavItem>
        <NavItem href="/teamHome">Team Profile</NavItem>
      </Stack>
    </Box>
  )
}
