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

const FormGroupWrapper = styled.div`
  margin-bottom: 1rem;
`;

const InputWrapper = styled.input`
  display: block;
  width: 18rem;
  margin: 1rem auto 0;
  line-height: 1.5rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
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
  font-size: ${fontSize.lagrge};
  margin: 0 0.5rem;
  line-height: 2rem;
`;

export const AddNewPostForm = ({ setIsModalActive, userId }) => {
  const [bodyValue, setBodyValue] = useState({ userId });
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setBodyValue({
      ...bodyValue,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await userPostListService.addNewPost(bodyValue);
      setIsSuccess(true);
    } catch (error) {
      setError(error.status);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormGroupWrapper>
          <InputWrapper
            placeholder="Title"
            type="textarea"
            row={2}
            name="title"
            onChange={handleInputChange}
          />
          <InputWrapper
            placeholder="Post message"
            as="textarea"
            rows={5}
            name="body"
            onChange={handleInputChange}
          />
        </FormGroupWrapper>
      </form>
      <ButtonsWrapper>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Button onClick={() => setIsModalActive(false)}>Cancel</Button>
      </ButtonsWrapper>
      {isSuccess && (
        <DoneStatusWrapper>
          <DoneStatus>Done</DoneStatus>
          <DoneIcon src="/icons/check.svg" alt="Done icon" />
        </DoneStatusWrapper>
      )}
      {error && <ErrorWrapper>{error}</ErrorWrapper>}
    </Wrapper>
  );
};
