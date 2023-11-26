import styled from "styled-components";

export const SingupContainerDiv = styled.div`
  width: 48.75rem;
  height: 47rem;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  place-content: center;
	display: flex;
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
  width: 43.75rem;
  justify-content: center;
  align-items: center;
  place-content: center;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
