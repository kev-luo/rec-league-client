import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import { withApollo } from "../../utils/withApollo";
import Layout from "../../components/Layout";
import { ME_QUERY } from "../../graphql/queries/me";
import { isServer } from "../../utils/isServer";

function TeamHome() {
  const { data, loading } = useQuery(ME_QUERY, { skip: isServer() });

  return (
    <Layout>
      TeamHome
      {data?.me && (
        <Link href="/teamHome/addPlayer/[name]" as={`/teamHome/addPlayer/${data.me.name}`}>
          <ChakraLink>Add Player</ChakraLink>
        </Link>
      )}
    </Layout>
  );
}

export default withApollo({ ssr: true })(TeamHome);
