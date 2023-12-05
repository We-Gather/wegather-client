import { ArrowIosForward } from '@styled-icons/evaicons-solid/ArrowIosForward';
import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderMenuConatainer = styled.div`
  width: 75rem;
  display: flex;
  align-items: end;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 0.56rem;
  background-color: white;
  > span {
    color: #000;
    font-size: 1.875rem;
    font-weight: 500;
  }
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
`;


export const ClubCategories = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  > :last-child {
    display: none;
  }
`;

export const Category = styled.div<{selected?:boolean}>`
  border-radius: 0.8125rem;
  background: ${props=>props.selected ? '#1CA526':'#E8E8E8'};
  color: ${props=>props.selected ? '#FFFFFF':'#585858'};
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 1.0625rem;
`;

export const Seperator = styled(ArrowIosForward)`
  color: #c9c9c9;
`;


export const TabMenu = styled.div`
  border-radius: 10px 10px 0rem 0rem;
  color: rgb(232, 234, 237);
  font-weight: bold;
  display: flex;
  gap: 0.25rem;
  align-items: flex-end;
  list-style: none;
  margin-top: 10px;
  .submenu {
    display: flex;
    color: #000;
    align-items: center;
    justify-content: center;
    transition: height 0.5s;
    width: 8.625rem;
    height: 2.5rem;
    border-radius: 10px 10px 0rem 0rem;
    margin-bottom: -1px;
    background: #e5e5e5;
    color: #585858;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    & div {
      display: flex;
      align-items: end;
      height: 2.5rem;
      padding-bottom: 0.4rem;
      justify-content: center;
      box-sizing: border-box;
      width: 7rem;
    }
  }

  .focused {
    border-top: 1px solid #585858;
    border-right: 1px solid #585858;
    border-left: 1px solid #585858;
    border-bottom: 1px solid #fff;
    z-index: 999;
    background: #fff;
    color: #1ca526;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 500;
    > div {
      border-bottom: 2px solid #1ca526;
    }
  }

  & div.desc {
    text-align: center;
  }
`;

export const Content = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`;

export const Desc = styled.div`
  width: 75rem;
  flex-shrink: 0;
  background: #fff;
  border-radius: 0rem 0.8125rem 0.8125rem 0.8125rem;
  border: 1px solid #585858;
  background: #fff;
`;
