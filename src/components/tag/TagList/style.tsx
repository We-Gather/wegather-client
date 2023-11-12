import { XCircle } from '@styled-icons/boxicons-solid';
import styled from 'styled-components';

type TagElementProps = {
  width: string;
  height: string;
}
export const TagElementContainer = styled.div<TagElementProps>`
	width: ${(props:TagElementProps) => props.width};
  height: ${(props:TagElementProps) => props.height};
	border-radius: 5px;
	border: 1px solid #D9D9D9;
	background: #FFF;
	padding: 5px;
`;
export const TagContainer = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 32px;
	border: 1px solid #C9C9C9;
  margin: 5px;
`;
export const TagText = styled.span`
  margin-right: 4px;
	font-size: 0.75rem;
	color: #585858;
`;
export const CloseButton = styled(XCircle)`
  background-color: transparent;
  border: none;
  width: 1rem;
  height: 1rem;
  color: #9C9C9C;
  cursor: pointer;
`;
