import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useQuery } from "@apollo/client";
import { GET_TEAMS_QUERY } from "../graphql/queries/teams";
import { withApollo } from '../utils/withApollo';
import Link from "next/link";

function Home() {
  const { data } = useQuery(GET_TEAMS_QUERY);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Link href="/login">Login</Link>
      </div>
    </div>
  )
}

export default withApollo({ ssr: true })(Home);