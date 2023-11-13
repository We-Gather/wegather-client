import React from 'react';

// import { Tooltip as ReactTooltip } from 'react-tooltip';
import Modal from '@/components/Modal';

import {
  CategoryInputWrapper,
  PopupContent,
  PopupTitle,
  Seperator,
  TooltipIcon,
} from './style';

function RequestCategoryPopup({
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
      title={
        <PopupTitle>
          카테고리 신청
          <span>
            <TooltipIcon data-tooltip-id='my-tooltip-1' size='16' />
          </span>
          {/* <ReactTooltip
            id='my-tooltip-1'
            place='top'
            content='승인까지 최대 일주일이 소요될 수 있습니다. 승인 후 메일이 전송됩니다.'
          /> */}
        </PopupTitle>
      }>
      <PopupContent>
        <CategoryInputWrapper>
          <input />
          <Seperator size='21' />
          <input />
          <Seperator size='21' />
          <input />
        </CategoryInputWrapper>
        <button>신청하기</button>
      </PopupContent>
    </Modal>
  );
}

export default RequestCategoryPopup;
