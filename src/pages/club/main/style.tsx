import styled from 'styled-components';

export const ClubMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-content: center;
  align-items: center;
  gap: 4.5rem;
  width: 71.875rem;
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

export const TabMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Desc = styled.div`
  width: 71.875rem;
  text-align: center;
  flex-shrink: 0;
  background: #fff;
  border-radius: 0rem 0.8125rem 0.8125rem 0.8125rem;
  border: 1px solid #585858;
  background: #fff;
`;
export const PosterWrapper = styled.div`
  width: 71.875rem;
  height: 40rem;
  flex-shrink: 0;
  margin-top: 4rem;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background: #fff;
`;
