import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://legible-adder-84.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "4EE99wXnzGuQPIEn24EW6B5X7ZrUlNRlOJPBbbJkLrocD8KBKIq6ZDsU3qjU8hmp",
  },
});
