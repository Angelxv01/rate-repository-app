import React, { useState } from "react";
import useRepository from "../../hooks/useRepositories";
import { useHistory } from "react-router-native";
import { useDebounce } from "use-debounce";
import { RepositoryListContainer } from "./RepositoryListContainer";

const RepositoryList = () => {
  const history = useHistory();

  const [visible, setVisible] = useState(false);
  const [sort, setSort] = useState({ order: "CREATED_AT", by: "DESC" });
  const [find, setFind] = useState("");
  const [dFind] = useDebounce(find, 500);

  const { repositories, fetchMore } = useRepository({
    ...sort,
    find: dFind,
    first: 8
  });

  const repositoryNodes = repositories
    ? repositories.edges.map((obj) => obj.node)
    : [];

  const onEndReach = () => fetchMore();

  return (
    <RepositoryListContainer
      setFind={setFind}
      setVisible={setVisible}
      setSort={setSort}
      find={find}
      visible={visible}
      history={history}
      repositories={repositoryNodes}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
