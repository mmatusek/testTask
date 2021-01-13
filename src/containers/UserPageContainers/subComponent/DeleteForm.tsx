import styled from "styled-components";
import { useState } from "react";

import { userPostListService } from "../../../services";
import { colors, fontSize } from "../../../constant";

const Wrapper = styled.div`
  position: absolute;
  height: 20rem;
  width: 20rem;
  top: calc(100% - 40rem);
  left: calc(100% - 55rem);
  background-color: ${colors.white};
`;
const FormWrapper = styled.div`
  padding: 2rem 1rem;
`;

const AswerWrapper = styled.div`
  font-size: ${fontSize.large};
  line-height: 2rem;
  text-align: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem 0.5rem 0;
`;

const Button = styled.button`
  display: block;
  width: 6rem;
  line-height: 1.5rem;
  margin-left: 1rem;
`;

const ErrorWrapper = styled.div`
  color: ${colors.theme};
  width: fit-content;
  margin: 1rem auto;
`;

const DoneIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

const DoneStatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const DoneStatus = styled.div`
  font-size: ${fontSize.large};
  margin: 0 0.5rem;
  line-height: 2rem;
`;

type DeleteFormTypes = {
  setIsDeleteModalActive: (value: boolean) => void;
  currentPostId: number;
}

export const DeleteForm = ({
  setIsDeleteModalActive,
  currentPostId,
}: DeleteFormTypes) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      await userPostListService.deletePost(currentPostId);
      setIsSuccess(true);
    } catch (error) {
      setError(error.status);
    }
  };

  return (
    <Wrapper>
      <FormWrapper>
        <AswerWrapper>Are you sure you want to delete this post?</AswerWrapper>
        <ButtonsWrapper>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
          <Button onClick={() => setIsDeleteModalActive(false)}>Cancel</Button>
        </ButtonsWrapper>
        {isSuccess && (
          <DoneStatusWrapper>
            <DoneStatus>Done</DoneStatus>
            <DoneIcon src="/icons/check.svg" alt="Done icon" />
          </DoneStatusWrapper>
        )}
        {error && <ErrorWrapper>{error}</ErrorWrapper>}
      </FormWrapper>
    </Wrapper>
  );
};
