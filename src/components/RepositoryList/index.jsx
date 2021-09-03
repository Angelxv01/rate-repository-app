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

  const { repositories } = useRepository({ ...sort, find: dFind });

  const repositoryNodes = repositories
    ? repositories.edges.map((obj) => obj.node)
    : [];

  return (
    <RepositoryListContainer
      setFind={setFind}
      setVisible={setVisible}
      setSort={setSort}
      find={find}
      visible={visible}
      history={history}
      repositories={repositoryNodes}
    />
  );
};

export default RepositoryList;
