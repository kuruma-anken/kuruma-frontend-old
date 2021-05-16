import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL as string,
  cache: new InMemoryCache(),
  credentials: "include"
});

export default client;
