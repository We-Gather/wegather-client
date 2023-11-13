import React from 'react';

import { Container, SearchIcon } from './style';

interface ISearchInputProps {
  placeholder: string;
  value: any;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function SearchInput({ placeholder, value, onChangeValue }: ISearchInputProps) {
  return (
    <Container>
      <input placeholder={placeholder} value={value} onChange={onChangeValue} />
      <SearchIcon />
    </Container>
  );
}

export default SearchInput;
