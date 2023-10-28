import { Check as CheckIcon } from '@styled-icons/fa-solid/Check';
import React from 'react';

import { CheckBoxDiv } from './style';

function Checkbox({
  checked,
  onClickHandler,
}: {
  checked: boolean;
  onClickHandler?: () => void;
}) {
  return (
    <CheckBoxDiv onClick={onClickHandler}>
      <div>{checked && <CheckIcon size='13' />}</div>
    </CheckBoxDiv>
  );
}

export default Checkbox;
