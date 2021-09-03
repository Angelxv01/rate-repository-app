import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Constants from "expo-constants";
import { setContext } from "@apollo/client/link/context";
import AuthStorage from "./authStorage";
import { relayStylePagination } from "@apollo/client/utilities";

const httpLink = createHttpLink({
  uri: Constants.manifest.extra.APOLLO_URI
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination()
      }
    },
    Repository: {
      fields: {
        reviews: relayStylePagination()
      }
    }
  }
});

const authStorage = new AuthStorage();

const createApolloClient = () => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : ""
        }
      };
    } catch (err) {
      console.error(err);
      return { headers };
    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache
  });
};

export default createApolloClient;
