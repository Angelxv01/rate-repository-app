import React from "react";
import { FlatList, View } from "react-native";
import { render } from "@testing-library/react-native";
import RepositoryItem from "../../components/RepositoryList/RepositoryItem";

const RepositoryListContainer = ({ repositories }) => {
  const render = ({ item }) => <RepositoryItem item={item} />;
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={render}
      keyExtractor={(obj) => obj.id}
    />
  );
};

describe.only("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd"
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4"
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd"
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4"
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ=="
          }
        ]
      };

      // Add your test code here

      const expected = [
        [
          "jaredpalmer/formik",
          "Build forms in React, without the tears",
          "TypeScript",
          "21.9k",
          "1.6k",
          "3",
          "88"
        ],
        [
          "async-library/react-async",
          "Flexible promise-based React data loader",
          "JavaScript",
          "1.8k",
          "69",
          "3",
          "72"
        ]
      ];

      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      const ids = repositories.edges.map((obj) => obj.node.id);
      const elements = ids.map((id) => getAllByTestId(id));

      for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < expected[0].length; j++) {
          expect(elements[i][j]).toHaveTextContent(expected[i][j]);
        }
      }
    });
  });
});
