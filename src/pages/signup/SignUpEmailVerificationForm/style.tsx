import styled from "styled-components";

export const SingupContainerDiv = styled.div`
  width: 48.75rem;
  height: 34.375rem;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  place-content: center;
	display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #C9C9C9;
  background: #FFF;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.20);
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const SignUpTitle = styled.p`
  color: #36BF7F;
  font-size: 2rem;
  margin: 0;
  span {
    color: #000;
  }
`;
export const SignUpSubTitle = styled.p`
  color: #303030;
  font-size: 0.875rem;
  margin: 0.5rem 0 0 0;
`;
export const SignUpModal =  styled.div`
  display: flex;
  position: relative;
  width: 11.5rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin: 1.25rem 0;
`;
export const HorizonLineDiv = styled.div`
  width: 43.75rem;
	margin-bottom: 1rem;
`;


export const StyledForm = styled.form`
  justify-content: center;
  align-items: center;
  place-content: center;
  display: flex;
  flex-direction: column;
`;

export const SignUpWrapper = styled.div`
  display: flex;
  width: 41.4375rem;
  height: 3.125rem;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1.15rem;
`;
export const SignUpP = styled.p`
  color: #303030;
  font-size: 1rem;
`;

export const SignUpInput = styled.input`
  display: flex;
  width: 25.625rem;
  height: 3.125rem;
  flex-shrink: 0;
  align-items: flex-start;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #9C9C9C;
  background: #FFF;
  color: #000;

  transition: background-color 0.2s ease-in-out;
`;
export const EmailInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const EmailButton = styled.div`
  width: 7.8125rem;
  height: 3.125rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #303030;
  color: #FFF;
`;
export const NextButtonWrapper = styled.div`
  width: 29rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 3.5rem 0 0 0;
`;
export const PrevButton = styled.button`
  position: absolute;
  top: 100%;
  transform: translateY(-200%);
  left: 2rem;
  border: none;
  border-radius: 5rem;
`;
