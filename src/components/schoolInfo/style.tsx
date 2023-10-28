import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  position: relative;
`;

export const SchoolButton = styled.div<{ $borderEffect?: boolean }>`
  width: 8.75rem;
  height: 8.25rem;
  flex-shrink: 0;
  border-radius: 1.0625rem;
  border: 1px solid #d9d9d9;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
  background: #fff;
  ${(props) => (props.$borderEffect ? 'border: 2px solid #1CA526;' : '')};
  &:hover {
    background-color: #f3f3f3;
  }
`;

export const SchoolLogoDiv = styled.div<{ $url: string }>`
  height: 5rem;
  width: 5rem;
  flex-shrink: 0;
  background-image: url(${(props) => props.$url});
  background-repeat: no-repeat;
  background-size: 5rem 5rem;
`;

export const SchoolNameDiv = styled.div`
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 130%; /* 0.975rem */
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MarkWrapper = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  height: 1.25rem;
  width: 1.25rem;
  flex-shrink: 0;
`;
