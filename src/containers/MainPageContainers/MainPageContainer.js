import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { getUserListRequest } from "../../store";
import { SingleUser } from "./subComponent";

const MainPageContainerPure = ({ users, getUserListRequest }) => {
  const history = useHistory();

  useEffect(() => {
    getUserListRequest();
  }, [getUserListRequest]);

  const handleClick = (userId) => history.push(`/user/${userId}`);

  return <SingleUser userList={users} handleClick={handleClick} />;
};

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = (dispatch) => ({
  getUserListRequest: () => dispatch(getUserListRequest()),
});

export const MainPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPageContainerPure);
