import styled from "styled-components";
import { useHistory } from "react-router-dom";

const BackArrow = styled.img`
  width: 2rem;
  height: 2rem;
`;

const NameWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
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
