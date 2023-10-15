import React from 'react';
import { CheckBoxDiv } from './style';
import { Check as CheckIcon } from '@styled-icons/fa-solid/Check';

function Checkbox({
  checked,
  onClickHandler,
}: {
  checked: boolean;
  onClickHandler?: () => void;
}) {
  return (
    <CheckBoxDiv onClick={onClickHandler}>
      <div>{checked && <CheckIcon size="13" />}</div>
    </CheckBoxDiv>
  );
}

export default Checkbox;
