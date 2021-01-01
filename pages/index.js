import { useQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { GET_TEAMS_QUERY } from "../graphql/queries/teams";
import { withApollo } from "../utils/withApollo";


function Home() {
  const { data: teamsData } = useQuery(GET_TEAMS_QUERY);

  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}

export default withApollo({ ssr: true })(Home);
