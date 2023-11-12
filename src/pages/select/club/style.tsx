import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-content: center;
  align-items: center;
  gap: 2rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75rem;
  gap: 5.5rem;
  > button {
    border-radius: 0.3125rem;
    border: 1px solid #1ca526;
    color: #1ca526;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.31rem 0.8rem;
    background-color: #fff;
    cursor: pointer;
  }
`;
export const TitleDiv = styled.div`
  color: #000;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const SchoolLogo = styled.div<{ $url: string }>`
  width: 3.125rem;
  height: 3.125rem;
  flex-shrink: 0;
  background-image: url(${props => props.$url});
  background-repeat: no-repeat;
  background-size: 3.125rem 3.125rem;
  background-color: #1ca526;
  border-radius: 50%;
`;


export const ContentDiv = styled.div`
  width: 75rem;
  display: flex;
  flex-direction: column;
  gap: 1.44rem;
`;
