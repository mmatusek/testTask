import styled from "styled-components";

const AddButtonWrapper = styled.img`
  width: 2rem;
  height: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 0.5rem 0.5rem;
`;

export const AddNewPostButton = ({ setIsModalActive }) => (
  <Wrapper>
    <AddButtonWrapper
      src="/icons/add.svg"
      alt="add icon"
      onClick={() => setIsModalActive(true)}
    />
  </Wrapper>
);
