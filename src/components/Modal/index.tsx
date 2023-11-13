import React, { ReactNode } from 'react';

import { ModalContainer } from './style';

type ModalProps = {
  children: ReactNode;
  show: boolean;
  onCloseModal: () => void;
};

/**
 * 모달 레이아웃
 */
export default function Modal({ children, show, onCloseModal }: ModalProps) {
  if (!show) return null;
  return (
    <ModalContainer onClick={onCloseModal}>
      <div
        onClick={e => {
          e.stopPropagation();
        }}>
        {children}
      </div>
    </ModalContainer>
  );
}
