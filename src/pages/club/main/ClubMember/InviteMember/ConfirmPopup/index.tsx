import React from 'react';

import Modal from '@/components/Modal';

import {
  ButtonWrapper,
  CancelButton,
  ConfirmButton,
  PopupContent,
} from './style';

function ConfirmPopup({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      show={show}
      onCloseModal={onClose}
      title='
    알림'>
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
    </Modal>
  );
}

export default ConfirmPopup;
