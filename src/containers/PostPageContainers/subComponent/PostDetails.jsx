import styled from "styled-components";

import { fontSize, fontWeight } from "../../../constant";

const Wrapper = styled.div`
  margin: 2rem auto;
  width: 80vw;
`;

const Title = styled.div`
  font-size: ${fontSize.large};
  font-weight: ${fontWeight.semiBold};
  line-height: 2rem;
  text-align: center;
`;

const PostContent = styled.div`
  font-size: ${fontSize.large};
  line-height: 2rem;
`;

export const PostDetails = ({ currentPost }) => (
  <Wrapper>
    <Title>{currentPost?.title}</Title>
    <PostContent>{currentPost?.body}</PostContent>
  </Wrapper>
);
