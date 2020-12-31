import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useQuery } from "@apollo/client";
import { GET_TEAMS_QUERY } from "../graphql/queries/teams";
import { ME_QUERY } from "../graphql/queries/me";
import { withApollo } from '../utils/withApollo';
import Link from "next/link";

import { isServer } from "../utils/isServer";

function Home() {
  const { data: teamsData } = useQuery(GET_TEAMS_QUERY);
  const { data, loading } = useQuery(ME_QUERY, { skip: isServer() });

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
          <Link href="/teamHome">{data?.me?.name}</Link>
        )}
      </div>
    </div>
  )
}

export default withApollo({ ssr: true })(Home);