import React from "react";
import { View } from "react-native";
import { Button, Menu, Searchbar } from "react-native-paper";

const RepositoryListHeader = ({
  find,
  visible,
  setFind,
  setVisible,
  setSort
}) => {
  return (
    <View>
      <Searchbar
        style={{ marginHorizontal: 10 }}
        placeholder="Search"
        onChangeText={(value) => setFind(value)}
        value={find}
      />
      <Menu
        visible={visible}
        onDismiss={() => setVisible(false)}
        anchor={<Button onPress={() => setVisible(true)}>Order By</Button>}
        style={{ paddingVertical: 5 }}
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
    </View>
  );
};

export default RepositoryListHeader;
