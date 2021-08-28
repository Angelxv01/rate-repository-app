import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";

import useRepository from "../../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const render = ({ item }) => (
    <View>
      <RepositoryItem item={item} />
    </View>
  );
  const { repositories } = useRepository();
  const repositoryNodes = repositories
    ? repositories.edges.map((obj) => obj.node)
    : [];
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={render}
      keyExtractor={(obj) => obj.id}
    />
  );
};

export default RepositoryList;
