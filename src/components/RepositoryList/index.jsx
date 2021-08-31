import React from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";

import useRepository from "../../hooks/useRepositories";
import { useHistory } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const history = useHistory();
  const render = ({ item }) => (
    <Pressable onPress={() => history.push(`/repository/${item.id}`)}>
      <RepositoryItem item={item} />
    </Pressable>
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
