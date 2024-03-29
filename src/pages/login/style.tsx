import styled from 'styled-components';

export const LoginContainerDiv = styled.div`
  width: 27.5rem;
  height: 36.875rem;
  border-radius: 0.625rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background-color: #f2f2f2;
  justify-content: center;
  align-items: center;
  place-content: center;
  display: flex;
  flex-direction: column;
`;

export const WegatherTextSpan = styled.span`
  color: #36bf7f;
`;

export const UpperDescription = styled.p`
  margin-bottom: 2.5rem;
  font-size: 0.75rem;
`;
export const StyledP = styled.p`
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
`;
export const StyledForm = styled.form`
  width: 22.5rem;
  justify-content: center;
  align-items: center;
  place-content: center;
  display: flex;
  flex-direction: column;
`;

export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 0.5rem;
  font-size: 0.75rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ErrorMessage = styled.span`
  color: red;
  width: 100%;
  margin-bottom: 0.5rem;
  text-align: left;
  font-size: 0.6rem;
`;

export const LoginInput = styled.input`
  display: flex;
  width: 100%;
  height: 2.5rem;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 0;
  padding: 0 0 0 1.5rem;
  /* padding-left: 1.5rem; */
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  transition: background-color 0.2s ease-in-out;
  &:focus {
    background-color: #ffffff;
  }
`;
export const HorizonWrapper = styled.div`
  width: 100%;
  margin: 1.5rem 0 2rem 0;
`;
export const ImageWrapper = styled.div`
  width: 11.25rem;
  height: 3.17456rem;
  position: relative;
`;
