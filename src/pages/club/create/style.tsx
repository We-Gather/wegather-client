import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeaderMenuConatainer = styled.div`
  width: 66.875rem;
  display: flex;
  align-items: end;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 0.56rem;
  background-color: white;
  position: fixed;
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
export const InfoType = styled.div<{ required?: boolean }>`
  color: #585858;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
  &::before {
    content: ${props => (props.required ? "'*'" : "''")};
    font-size: 1rem;
    color: ${props => (props.required ? '#f00' : 'transparent')};
    padding-top: ${props => (props.required ? '0.5rem' : '0')};
  }
  margin-top: 3rem;
`;

export const InfoConatainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  color: #000;
  border-radius: 0.625rem;
  border: 1px solid #d9d9d9;
  background: #fff;
  padding: 3rem;
  box-sizing: border-box;
  & input {
    &::placeholder {
      color: #9c9c9c;
      font-size: 0.75rem;
      font-weight: 400;
    }
  }
`;

export const AditionalInfoConatainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ClubRowWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-direction: row;
  align-items: start;
  background-color: #fff;
  /* justify-content: space-between; */
`;
export const TextCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  background-color: #fff;
`;
export const TextCountInputWrapper = styled.div`
  display: flex;
  align-items: start;
  background-color: #fff;
`;

export const CountText = styled.p`
  color: #585858;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  .span {
    color: #000;
  }
`;

export const InfoExtraText = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  color: #9c9c9c;
  font-weight: 400;
`;

export const InfoText = styled.span<{ required?: boolean }>`
  width: 8rem;
  color: #585858;
  font-size: 0.875rem;
  font-weight: 700;
  padding-left: 1rem;
  margin-top: 0.45rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  &::before {
    content: ${props => (props.required ? "'*'" : "''")};
    font-size: 1rem;
    color: ${props => (props.required ? '#f00' : 'transparent')};
    padding-top: ${props => (props.required ? '0.5rem' : '0')};
  }
`;
export const ClubNameInput = styled.input`
  width: 50.625rem;
  height: 1.875rem;
  border-radius: 5px;
  border: 1px solid #c9c9c9;
  background: #fff;
  color: #000;
  padding: 0;
  text-indent: 10px;
`;
export const ClubTypeContainer = styled.div`
  height: 5.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ClubTypeWrapper = styled.div`
  width: 50.625rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ClubTypeRadio = styled.input.attrs(() => ({
  type: 'radio',
}))``;

export const ClubTypeRadioSpan = styled.span`
  color: #585858;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.0625rem;
  margin: 0 1.2rem 0 0.4rem;
`;
export const SchoolSelectWrapper = styled.div`
  display: flex;
  height: 5.5rem;
  flex-direction: row;
  align-items: center;
`;
export const SchoolSelectInput = styled.input`
  width: 15.625rem;
  height: 1.875rem;
  border-radius: 5px;
  border: 1px solid #c9c9c9;
  background: #fff;
  padding: 0;
  text-indent: 10px;
`;
export const CreateForm = styled.form`
  width: 66.875rem;
  padding-top: 100px;
`;
export const LogoColWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LogoRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const LogoInput = styled.label`
  width: 22.25rem;
  height: 1.875rem;
  border-radius: 5px;
  border: 1px solid #c9c9c9;
  background: #eee;
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  padding: 0;
  text-indent: 10px;
`;
export const LogoButton = styled.label`
  width: 6.0625rem;
  height: 1.875rem;
  border-radius: 5px;
  border: 1px solid #585858;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InputWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
`;
export const TagContainer = styled.div`
  width: 50.625rem;
  display: flex;
  justify-content: space-between;
`;
export const ClubIntroductionInput = styled.textarea`
  width: 50.625rem;
  min-height: 4.6875rem;
  border-radius: 5px;
  border: 1px solid #c9c9c9;
  background: #fff;
  color: #000;
  padding: 0.5rem;
`;
export const ClubExplanationInput = styled.div`
  width: 50.625rem;
  background: #fff;
  color: #000;
  resize: none;
  padding: 0;
`;
export const TagAddInput = styled.input`
  width: 15.625rem;
  height: 1.875rem;
  border-radius: 5px;
  border: 1px solid #c9c9c9;
  background: #fff;
  padding: 0;
  text-indent: 10px;
`;
export const TagAddButtom = styled.button`
  height: 1.875rem;
  width: 1.875rem;
  border-radius: 5px;
  border: 1px solid #c9c9c9;
`;
export const TagRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
