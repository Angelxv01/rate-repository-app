import React from "react";
import { Provider } from "react-native-paper";
import { FlatList, Pressable, View } from "react-native";

import RepositoryListHeader from "./RepositoryListHeader";
import RepositoryItem from "./RepositoryItem";

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    // this.props contains the component's props
    const { setFind, setVisible, setSort, find, visible } = this.props;

    return (
      <RepositoryListHeader
        setFind={setFind}
        setVisible={setVisible}
        setSort={setSort}
        find={find}
        visible={visible}
      />
    );
  };

  renderItem = ({ item }) => (
    <Pressable
      onPress={() => this.props.history.push(`/repository/${item.id}`)}
    >
      <RepositoryItem item={item} />
    </Pressable>
  );

  itemSeparator = () => <View style={{ height: 10 }} />;

  render() {
    return (
      <Provider>
        <FlatList
          style={{ paddingVertical: 5 }}
          ListHeaderComponent={this.renderHeader}
          data={this.props.repositories}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.itemSeparator}
          keyExtractor={(obj) => obj.id}
        />
      </Provider>
    );
  }
}
