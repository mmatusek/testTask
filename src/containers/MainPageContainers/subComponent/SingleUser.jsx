import styled from "styled-components";

import { colors } from "../../../constant";

const ElementWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SingleUserWrapper = styled.div`
  width: 20rem;
  border: 2px solid ${colors.alto};
  margin: 1rem 5rem;
  padding: 0.5rem;
`;

const RecordWrapper = styled.div`
  display: flex;
  margin: 0.2rem 0;
`;

const TitleWrapper = styled.div`
  width: 5rem;
  margin-right: 0.5rem;
`;

export const SingleUser = ({ userList, handleClick }) => (
  <ElementWrapper>
    {userList.map(({ id, username, name, email, website, phone, company }) => (
      <SingleUserWrapper key={id} onClick={() => handleClick(id)}>
        <RecordWrapper>
          <TitleWrapper>Username:</TitleWrapper>
          <div>{username}</div>
        </RecordWrapper>
        <RecordWrapper>
          <TitleWrapper>Name:</TitleWrapper>
          <div>{name}</div>
        </RecordWrapper>
        <RecordWrapper>
          <TitleWrapper>Email:</TitleWrapper>
          <div>{email}</div>
        </RecordWrapper>
        <RecordWrapper>
          <TitleWrapper>Webiste:</TitleWrapper>
          <div>{website}</div>
        </RecordWrapper>
        <RecordWrapper>
          <TitleWrapper>Phone:</TitleWrapper>
          <div>{phone}</div>
        </RecordWrapper>
        <TitleWrapper>Company</TitleWrapper>
        <RecordWrapper>
          <TitleWrapper>Name:</TitleWrapper>
          <div>{company.name}</div>
        </RecordWrapper>
        <RecordWrapper>
          <TitleWrapper>Busines:</TitleWrapper>
          <div>{company.bs}</div>
        </RecordWrapper>
        <RecordWrapper>
          <TitleWrapper>Description:</TitleWrapper>
          <div>{company.catchPhrase}</div>
        </RecordWrapper>
      </SingleUserWrapper>
    ))}
  </ElementWrapper>
);
