import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useQuery, useMutation, useApolloClient } from "@apollo/client";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

import { withApollo } from "../utils/withApollo";
import { isServer } from "../utils/isServer";
import { ME_QUERY } from "../graphql/queries/me";
import { GET_TEAMS_QUERY } from "../graphql/queries/teams";
import { LOGOUT_MUTATION } from "../graphql/mutations/logout";

function Home() {
  const { data: teamsData } = useQuery(GET_TEAMS_QUERY);
  const { data, loading } = useQuery(ME_QUERY, { skip: isServer() });
  const [logout, { loading: logoutLoading}] = useMutation(LOGOUT_MUTATION)
  const apolloClient = useApolloClient();

  const handleLogout = async() => {
    await logout();
    await apolloClient.resetStore();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {!data?.me ? (
          <Link href="/login">Login</Link>
        ) : (
          <>
            <Link href="/teamHome">{data?.me?.name}</Link>
            <Button onClick={handleLogout} isLoading={logoutLoading}>Logout</Button>
          </>
        )}
      </div>
    </div>
  );
}

export default withApollo({ ssr: true })(Home);
