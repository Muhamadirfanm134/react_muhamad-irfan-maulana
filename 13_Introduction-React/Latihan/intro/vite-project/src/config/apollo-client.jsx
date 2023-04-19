import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://immortal-aardvark-49.hasura.app/v1/graphql",
  cache: new InMemoryCache({ addTypename: false }),
  headers: {
    "x-hasura-admin-secret":
      "rjLtCjQ4AChQQTsJUMP03931cnuamhx8mNSHWSz752of2mmCMTMEenJZpAXst9cd",
  },
});
