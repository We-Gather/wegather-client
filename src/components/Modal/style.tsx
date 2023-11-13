import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  text-align: center;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border-radius: 0.3125arem;
`;

export const PopupHeader = styled.div`
  border-bottom: 1px solid #d9d9d9;
  padding: 0.3rem 0;
  box-sizing: border-box;
  & div {
    padding: 0 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #c9c9c9;
    font-size: 0.775rem;
    font-weight: 700;
  }
`;
