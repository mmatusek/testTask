import styled from "styled-components";

import { fontSize, colors } from "../../../constant";

const SingleUserWrapper = styled.div`
  display: flex;
  border: 2px solid ${colors.alto};
  padding: 0.5rem 0;
  margin: 0.5rem auto;
  width: 50rem;
`;

const DeleteIconWrapper = styled.img`
  width: 2rem;
  height: 2rem;
  padding: 0 0.5rem;
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: ${fontSize.large};
  line-height: 1.5rem;
  cursor: pointer;
`;

export const SinglePost = ({ postsList, handleClick, handleOpenDeleteModal }) =>
  postsList.map(({ userId, id, title }) => (
    <SingleUserWrapper key={id}>
      <DeleteIconWrapper
        src="/icons/delete.svg"
        alt="delete icon"
        onClick={() => handleOpenDeleteModal(id)}
      />
      <TitleWrapper onClick={() => handleClick(userId, id)}>
        {title.substr(0, 50)}
      </TitleWrapper>
    </SingleUserWrapper>
  ));
