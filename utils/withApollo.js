import { createWithApollo } from "./createWithApollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const createClient = (ctx) => new ApolloClient({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
  headers: {
    cookie: typeof window === "undefined" ? ctx.req?.headers.cookie : ""
  },
  cache: new InMemoryCache(),
})

export const withApollo = createWithApollo(createClient);