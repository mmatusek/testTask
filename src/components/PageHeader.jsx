import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { fontSize } from "../constant";

const BackArrow = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  margin-left: 0.5rem;
`;

const NameWrapper = styled.div`
  margin: 1rem auto;
  width: fit-content;
  font-size: ${fontSize.large};
`;

export const PageHeader = ({ name }) => {
  const history = useHistory();
  return (
    <>
      <NameWrapper>{name}</NameWrapper>
      <BackArrow
        src="/icons/leftArrow.svg"
        alt="back arrow"
        onClick={() => history.goBack()}
      />
    </>
  );
};
