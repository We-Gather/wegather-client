import styled, { StyledComponent } from "styled-components";

const StyledLoginInput = styled.input`
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  width: 80%;
  height: 8%;
  margin-bottom: 3%;
  transition: background-color 0.2s ease-in-out;
  &:focus {
  background-color: #ffffff;
  }
`;

interface LoginInputProps {
  type: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}

export default function LoginInput ({type, value, placeholder, onChange, required }: LoginInputProps) {
	return (
		<StyledLoginInput 
			type={type}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			required={required}/>
		);
}