import styled from 'styled-components';

export const ContainerDiv = styled.div`
  width: 8.75rem;
  height: 8.125rem;
  flex-shrink: 0;
  border-radius: 1.5625rem;
  border: 1px solid #9c9c9c;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
`;

export const SchoolLogoDiv = styled.div<{ $url: string }>`
  width: 4.375rem;
  height: 4.375rem;
  flex-shrink: 0;
  background-image: url(${(props) => props.$url});
  background-repeat: no-repeat;
  background-size: 4.375rem 4.375rem;
`;

export const Border = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
`;

export const SchoolNameDiv = styled.div`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.0625rem;
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MarkWrapper = styled.div`
  position: absolute;
  right: 0.5rem;
  height: 1.25rem;
  width: 1.25rem;
  flex-shrink: 0;
`;
