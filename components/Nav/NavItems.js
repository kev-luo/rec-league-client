import React from "react";
import { Box, Stack, Button } from "@chakra-ui/react";

import NavItem from "./NavItem";

export default function NavItems({ data, handleLogout, logoutLoading }) {
  return (
    <Box>
      <Stack
        
      >
        {data?.me ? (
          <>
            <NavItem href="/teamHome">Team Profile</NavItem>
            <Button onClick={handleLogout} isLoading={logoutLoading}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <NavItem href="/login">Login</NavItem>
            <NavItem href="/register">Register</NavItem>
          </>
        )}
      </Stack>
    </Box>
  );
}
