import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

import { getUserPostListRequest, getUserListRequest } from "../../store";
import { SinglePost, AddNewPostButton } from "./subComponent";
import { PageHeader, Modal } from "../../components";

const UserPageContainerPure = ({
  users,
  posts,
  getUserPostListRequest,
  getUserListRequest,
}) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    !users.length && getUserListRequest();
    getUserPostListRequest(id);
  }, [getUserListRequest, getUserPostListRequest, id]);

  const currentUser = users.filter((item) => item.id === Number(id));

  const handleClick = (userId, postId) =>
    history.push(`/user/${userId}/${postId}`);

  const handleOpenDeleteModal = (postId) => {
    setCurrentPostId(postId);
    setIsDeleteModalActive(true);
  };

  return (
    <>
      <PageHeader name={currentUser[0]?.name} />
      <AddNewPostButton setIsModalActive={setIsModalActive} />
      <SinglePost
        postsList={posts}
        handleClick={handleClick}
        handleOpenDeleteModal={handleOpenDeleteModal}
      />
      {(isModalActive || isDeleteModalActive) && (
        <Modal
          isModalActive={isModalActive}
          isDeleteModalActive={isDeleteModalActive}
          setIsModalActive={setIsModalActive}
          setIsDeleteModalActive={setIsDeleteModalActive}
          userId={id}
          currentPostId={currentPostId}
        />
      )}
    </>
  );
};

const mapStateToProps = ({ users, posts }) => ({
  users,
  posts,
});

const mapDispatchToProps = (dispatch) => ({
  getUserPostListRequest: (userId) => dispatch(getUserPostListRequest(userId)),
  getUserListRequest: () => dispatch(getUserListRequest()),
});

export const UserPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPageContainerPure);
