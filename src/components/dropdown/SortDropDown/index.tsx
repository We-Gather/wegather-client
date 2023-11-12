import { useState } from 'react';

import { StyledOptionItem, StyledOptionList, StyledSelectbox, StyledSelectedLabel } from './style';

interface DropdownProps {
  list: Array<string>;
}

export default function SortDropDown({ list }: DropdownProps) {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(list[0]);
  return (
    <StyledSelectbox>
      <StyledSelectedLabel value={selected} onClick={() => setActive(!active)}>
        {selected}
      </StyledSelectedLabel>
      <StyledOptionList $active={active}>
        {list
          .filter(element => element !== selected)
          .map(element => (
            <StyledOptionItem
              key={element}
              onClick={() => {
                setActive(false);
                setSelected(element);
              }}
            >
              {element}
            </StyledOptionItem>
          ))}
      </StyledOptionList>
    </StyledSelectbox>
  );
}
