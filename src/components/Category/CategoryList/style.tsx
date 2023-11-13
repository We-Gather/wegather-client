import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CategoryRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 9.375rem;
`;
export const CategoryLabel = styled.div`
  width: 100%;
  display: flex;
  height: 1.875rem;
  border-radius: 5px;
  border: 1px solid #c9c9c9;
  background: #f3f3f3;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.7rem;
  text-indent: 10px;
  color: #000;
  font-size: 0.75rem;
  font-weight: 400;
`;
export const CategoryInput = styled.input`
  width: 100%;
  height: 1.9375rem;
  border-radius: 5px 5px 0 0;
  border: 1px solid #c9c9c9;
  border-bottom: none;
  background: #fff;
  text-indent: 10px;
  padding: 0;
`;
export const CategorySubList = styled.ul`
  width: 100%;
  height: 9rem;
  border-radius: 0 0 5px 5px;
  border: 1px solid #c9c9c9;
  background: #f3f3f3;
  padding: 0;
  margin: 0;
`;
export const CategoryListElement = styled.li`
  /* width: 100%; */
  list-style-type: none;
  padding: 0.5rem;
`;
export const CategorySearchInput = styled.input`
  width: 23.75rem;
  height: 2.5rem;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #c9c9c9;
  background: #fff;
  text-indent: 10px;
`;
