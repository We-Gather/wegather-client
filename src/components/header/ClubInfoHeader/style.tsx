import { ArrowIosForward } from '@styled-icons/evaicons-solid/ArrowIosForward';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.56rem;
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
`;

export const ClubType = styled.div`
  padding: 0.25rem 1.0625rem;
  color: #fff;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.8125rem;
  background: #1ca526;
`;

export const ClubCategories = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  > :last-child {
    display: none;
  }
`;

export const Category = styled.div`
  border-radius: 0.8125rem;
  background: #d9d9d9;
  color: #585858;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 1.0625rem;
`;

export const Seperator = styled(ArrowIosForward)`
  color: #c9c9c9;
`;
