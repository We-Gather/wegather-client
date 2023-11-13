import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  position: relative;
`;

export const ClubButton = styled.div`
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
  padding: 1.5rem 0 0 0;
  cursor: pointer;
  position: relative;
  background: #fff;
  &:hover {
    background-color: #f3f3f3;
  }
`;

export const ClubLogoDiv = styled.div<{ $url: string }>`
  height: 5rem;
  width: 5rem;
  flex-shrink: 0;
  background-image: url(${props => props.$url});
  background-repeat: no-repeat;
  background-size: 5rem 5rem;
`;

export const ClubNameDiv = styled.div`
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 130%; /* 0.975rem */
`;

export const RoleDiv = styled.div`
  border-top: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  justify-content: center;
  padding: 0.5rem 0 1rem 0;
  color: #000;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
  width: 100%;
`;
