import { Close as CloseIcon } from '@styled-icons/ionicons-outline/Close';
import React, { ReactNode } from 'react';

import { Container, ModalContainer, PopupHeader } from './style';

type ModalProps = {
  children: ReactNode;
  show: boolean;
  title: ReactNode;
  onCloseModal: () => void;
};

/**
 * 모달 팝업 컴포넌트
 */
export default function Modal({
  children,
  show,
  onCloseModal,
  title,
}: ModalProps) {
  if (!show) return null;
  return (
    <ModalContainer onClick={onCloseModal}>
      <Container
        onClick={e => {
          e.stopPropagation();
        }}>
        <PopupHeader>
          <div>
            {title}
            <CloseIcon
              size='21'
              style={{ cursor: 'pointer' }}
              onClick={onCloseModal}
            />
          </div>
        </PopupHeader>
        {children}
      </Container>
    </ModalContainer>
  );
}
