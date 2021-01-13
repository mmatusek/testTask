import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { colors } from "../constant";
import { AddNewPostForm, DeleteForm } from "../containers";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${colors.alto};
  opacity: 0.75;
`;

type ModalTypes = {
  isDeleteModalActive: boolean;
  setIsDeleteModalActive: (value: boolean) => void;
  isModalActive: boolean;
  setIsModalActive: (value:boolean) => void;
  userId: number;
  currentPostId : number;
}

export const Modal = ({
  isDeleteModalActive,
  setIsDeleteModalActive,
  isModalActive,
  setIsModalActive,
  userId,
  currentPostId,
}: ModalTypes)  => {
  const container = document.getElementById("modal");

  const renderModalBody = () => {
    if (isDeleteModalActive) {
      return (
        <DeleteForm
          setIsDeleteModalActive={setIsDeleteModalActive}
          currentPostId={currentPostId}
        />
      );
    }
    return (
      <AddNewPostForm setIsModalActive={setIsModalActive} userId={userId} />
    );
  };

  return (
    container && (isModalActive || isDeleteModalActive) &&
    createPortal(
      <ModalWrapper className="modal">
        <BackgroundWrapper />
        <div>{renderModalBody()}</div>
      </ModalWrapper>,
      container
    )
  );
};
