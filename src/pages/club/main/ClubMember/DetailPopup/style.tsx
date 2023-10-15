import { styled } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 40.625rem;
  flex-direction: column;
  flex-shrink: 0;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

export const PopupHeader = styled.div`
  border-bottom: 1px solid #d9d9d9;
  padding: 0.87rem 0;
  box-sizing: border-box;
  & div {
    padding: 0 1.37rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #9c9c9c;
    font-size: 0.875rem;
    font-weight: 700;
  }
`;

export const PopupContent = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.span`
  color: #585858;
  font-size: 0.875rem;
  font-weight: 800;
  display: flex;
  gap: 0.62rem;
  align-items: center;
  width: 5rem;
  &:before {
    content: '•';
    color: #d9d9d9;
    font-size: 1.5rem;
  }
`;

export const InfoItemWrapper = styled.div<{ $alignItems?: string }>`
  display: flex;
  align-items: center;
  width: 100%;
  ${(props) => props.$alignItems && `align-items: ${props.$alignItems};`}
`;

export const InfoText = styled.span`
  color: #000;
  font-size: 0.875rem;
  font-weight: 400;
  margin-left: 1rem;
`;

export const BasicInfoWrapper = styled.div`
  display: flex;
  > div {
    width: 50%;
  }
  > :last-child {
    border-left: 1px solid #d9d9d9;
    padding-left: 0.5rem;
  }
`;

export const RoleBox = styled.div`
  border-radius: 0.3125rem;
  border: 1px solid #d9d9d9;
  flex-grow: 1;
  display: grid;
  grid-row-gap: 1.31rem;
  /* grid-column-gap: 5rem; */
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  color: #000;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 0.94rem 2.25rem;
  text-align: start;
  & div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const GroupBox = styled.div`
  border-radius: 0.3125rem;
  border: 1px solid #d9d9d9;
  flex-grow: 1;
  display: flex;
  gap: 0.87rem;
  flex-wrap: wrap;
  color: #000;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 0.94rem 2.25rem;
  text-align: start;
  & div {
    border-radius: 3.125rem;
    background: #e5e5e5;
    color: #585858;
    font-size: 0.75rem;
    font-weight: 400;
    padding: 0.31rem 1rem;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: end;
  padding-bottom: 0.87rem;
`;

export const SaveButton = styled.div`
  margin: 0 auto;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.0625rem;
  border-radius: 3.125rem;
  border: 1px solid #36bf7f;
  background: #36bf7f;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  padding: 0.37rem 1.87rem;
  cursor: pointer;
`;

export const ExileButton = styled.div`
  position: absolute;
  right: 1rem;
  color: #585858;
  font-size: 0.625rem;
  font-weight: 400;
  padding: 0.37rem 0.69rem;
  border-radius: 3.125rem;
  border: 1px solid #585858;
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
