import { useState } from "react";
import styled from "styled-components";

import { SingleComment } from "./SingleComment";

const SeeCommentsWrapper = styled.div`
  width: 80vw;
  margin: 0 auto 1rem;
  cursor: pointer;
  text-decoration: underline;
  text-align: right;
`;

export const CommentSection = ({ commentsList, userId }) => {
  const [isCommentSectionVisible, setIsCommentSectionVisible] = useState(false);
  return (
    <>
      <SeeCommentsWrapper
        onClick={() => setIsCommentSectionVisible(!isCommentSectionVisible)}
      >
        Show Comments
      </SeeCommentsWrapper>
      {isCommentSectionVisible && (
        <SingleComment commentsList={commentsList} userId={userId} />
      )}
    </>
  );
};
