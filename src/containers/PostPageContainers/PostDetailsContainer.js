import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

import {
  getCommentsListRequest,
  getUserListRequest,
  getUserPostListRequest,
} from "../../store";
import { PostDetails } from "./subComponent";
import { PageHeader } from "../../components";
import { CommentSection } from "./subComponent/CommentSection";

const PostDetailsPageContainerPure = ({
  users,
  posts,
  comments,
  getCommentsListRequest,
  getUserListRequest,
  getUserPostListRequest,
}) => {
  const { postId, id } = useParams();

  useEffect(() => {
    !users.length && getUserListRequest();
    !posts.length && getUserPostListRequest(id);
    getCommentsListRequest(postId);
  }, [getUserListRequest, getCommentsListRequest, getUserPostListRequest]);

  const currentUser = users.filter((item) => item.id === Number(id));

  const currentPost = posts.filter((item) => item.id === Number(postId));

  return (
    <>
      <PageHeader name={currentUser[0]?.name} />
      <PostDetails currentPost={currentPost[0]} />
      <CommentSection commentsList={comments} userId={id} />
    </>
  );
};

const mapStateToProps = ({ posts, users, comments }) => ({
  comments,
  posts,
  users,
});

const mapDispatchToProps = (dispatch) => ({
  getUserPostListRequest: (userId) => dispatch(getUserPostListRequest(userId)),
  getCommentsListRequest: (userId) => dispatch(getCommentsListRequest(userId)),
  getUserListRequest: () => dispatch(getUserListRequest()),
});

export const PostDetailsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailsPageContainerPure);
