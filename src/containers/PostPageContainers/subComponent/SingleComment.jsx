import styled from "styled-components";

import { colors } from "../../../constant";

const Wrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

const SingleUserWrapper = styled.div`
  border: 2px solid ${colors.alto};
  margin: 0.5rem 0;
  padding: 1rem;
`;

const UserDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  background-color: ${colors.alto};
  padding: 0.5rem 0.25rem;
`;

const UserNameWrapper = styled.div``;

const UserEmailWrapper = styled.div``;

const CommentWrapper = styled.div``;

export const SingleComment = ({ commentsList }) => (
  <Wrapper>
    {commentsList.map(({ name, email, body, id }) => (
      <SingleUserWrapper key={id}>
        <UserDataWrapper>
          <UserNameWrapper>{name}</UserNameWrapper>
          <UserEmailWrapper>{email}</UserEmailWrapper>
        </UserDataWrapper>
        <CommentWrapper>{body}</CommentWrapper>
      </SingleUserWrapper>
    ))}
  </Wrapper>
);
