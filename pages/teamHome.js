import React from 'react'
import { withApollo } from "../utils/withApollo";

function TeamHome() {
  return (
    <div>
      TeamHome
    </div>
  )
}

export default withApollo({ ssr: true })(TeamHome);