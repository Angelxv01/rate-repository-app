import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { Button, Menu, Provider } from "react-native-paper";

import useRepository from "../../hooks/useRepositories";
import { useHistory } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import Text from "../styledComponents/Text";
import theme from "../../theme";

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const render = ({ item }) => {
    return (
      <Pressable onPress={() => history.push(`/repository/${item.id}`)}>
        <RepositoryItem item={item} />
      </Pressable>
    );
  };

  const history = useHistory();

  const [repositories, setRepositories] = useState(null);
  const [visible, setVisible] = useState(false);
  const [sort, setSort] = useState({ order: "CREATED_AT", by: "DESC" });

  const { getData, lazyData } = useRepository();

  useEffect(() => {
    getData({ variables: { ...sort } });
    if (lazyData.data) {
      setRepositories(lazyData.data.repositories.edges.map((obj) => obj.node));
    }
  }, [lazyData.data, sort]);

  if (lazyData.loading) {
    return null;
  }

  return (
    <Provider>
      <View style={styles.shrink}>
        <FlatList
          data={repositories}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={render}
          keyExtractor={(obj) => obj.id}
          ListHeaderComponent={
            <Menu
              visible={visible}
              onDismiss={() => setVisible(false)}
              anchor={
                <Button onPress={() => setVisible(true)}>Order By</Button>
              }
              style={styles.py5}
            >
              <Menu.Item
                onPress={() => setSort({ order: "CREATED_AT", by: "DESC" })}
                title="Latest repositories"
              />
              <Menu.Item
                onPress={() => setSort({ order: "RATING_AVERAGE", by: "DESC" })}
                title="Highest rated repositories"
              />
              <Menu.Item
                onPress={() => setSort({ order: "RATING_AVERAGE", by: "ASC" })}
                title="Lowest rated repositories"
              />
            </Menu>
          }
        />
      </View>
    </Provider>
  );
};

export default RepositoryList;

const styles = StyleSheet.create({
  separator: {
    height: 10
  },
  shrink: {
    flexShrink: 1
  },
  py5: {
    paddingVertical: 5
  }
});
