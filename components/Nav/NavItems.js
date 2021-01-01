import React from "react";
import { Box, Stack, Button } from "@chakra-ui/react";

import NavItem from "./NavItem";

export default function NavItems({ data, handleLogout, logoutLoading }) {
  
  return (
    <Box>
      <Stack
        direction="row"
        align="center"
        spacing={8}
      >
        {data?.me ? (
          <>
            <NavItem href="/teamHome/[name]" name={data.me.name}>Team Profile</NavItem>
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
