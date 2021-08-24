import React from "react";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";

import createApolloClient from "./src/utils/apolloClients";
import Main from "./src/Main";

const apolloClient = createApolloClient();

const App = () => {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;
