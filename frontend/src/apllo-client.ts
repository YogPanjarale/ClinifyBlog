import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://demo-graphql-blog.herokuapp.com/graphql",
    cache: new InMemoryCache(),
});

export default client;