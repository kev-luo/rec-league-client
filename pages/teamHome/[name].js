import React from 'react'
import Head from "next/head";
import { withApollo } from "../../utils/withApollo";

import Layout from "../../components/Layout";

function TeamHome() {
  return (
    <Layout>
      
      TeamHome
    </Layout>
  )
}

export default withApollo({ ssr: true })(TeamHome);