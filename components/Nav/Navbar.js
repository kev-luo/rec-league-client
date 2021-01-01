import React from "react";
import { useQuery, useMutation, useApolloClient } from "@apollo/client";

import NavbarContainer from "./NavbarContainer";
import Logo from "./Logo";
import NavItems from "./NavItems";
import { isServer } from "../../utils/isServer";
import { ME_QUERY } from "../../graphql/queries/me";
import { LOGOUT_MUTATION } from "../../graphql/mutations/logout";

export default function Navbar() {
  const apolloClient = useApolloClient();

  const { data, loading } = useQuery(ME_QUERY, { skip: isServer() });
  const [logout, { loading: logoutLoading }] = useMutation(LOGOUT_MUTATION);

  const handleLogout = async () => {
    await logout();
    await apolloClient.resetStore();
  };

  return (
    <NavbarContainer>
      <Logo />
      <NavItems
        data={data}
        handleLogout={handleLogout}
        logoutLoading={logoutLoading}
      />
    </NavbarContainer>
  );
}
