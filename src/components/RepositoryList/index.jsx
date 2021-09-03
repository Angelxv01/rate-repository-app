import React, { useEffect, useState } from "react";
import useRepository from "../../hooks/useRepositories";
import { useHistory } from "react-router-native";
import { useDebounce } from "use-debounce";
import { RepositoryListContainer } from "./RepositoryListContainer";

const RepositoryList = () => {
  const history = useHistory();

  const [repositories, setRepositories] = useState(null);
  const [visible, setVisible] = useState(false);
  const [sort, setSort] = useState({ order: "CREATED_AT", by: "DESC" });
  const [find, setFind] = useState("");
  const [dFind] = useDebounce(find, 500);

  const { getData, lazyData } = useRepository();

  useEffect(() => {
    getData({ variables: { ...sort, find: dFind } });
    if (lazyData.data) {
      setRepositories(lazyData.data.repositories.edges.map((obj) => obj.node));
    }
  }, [lazyData.data, sort, dFind]);

  if (lazyData.loading) {
    return null;
  }

  return (
    <RepositoryListContainer
      setFind={setFind}
      setVisible={setVisible}
      setSort={setSort}
      find={find}
      visible={visible}
      history={history}
      repositories={repositories}
    />
  );
};

export default RepositoryList;
