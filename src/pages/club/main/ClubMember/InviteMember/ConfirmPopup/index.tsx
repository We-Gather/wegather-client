import { Close as CloseIcon } from '@styled-icons/ionicons-outline/Close';
import React from 'react';

import Modal from '@/components/Modal';

import {
  ButtonWrapper,
  CancelButton,
  ConfirmButton,
  Container,
  PopupContent,
  PopupHeader
} from './style';

function ConfirmPopup({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  return (
    <Modal show={show} onCloseModal={onClose}>
      <Container>
        <PopupHeader>
          <div>
            알림
            <CloseIcon
              size='21'
              style={{ cursor: 'pointer' }}
              onClick={onClose}
            />
          </div>
        </PopupHeader>
        <PopupContent>
          <div>
            <span>이메일 ID, 역할</span>만 대조 후 <br />
            초대장이 발송됩니다.
          </div>
          <ButtonWrapper>
            <ConfirmButton>확인</ConfirmButton>
            <CancelButton onClick={onClose}>취소</CancelButton>
          </ButtonWrapper>
        </PopupContent>
      </Container>
    </Modal>
  );
}

export default ConfirmPopup;
