import styled from 'styled-components';

export const ImageContainer = styled.div``;
export const LogoRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.25rem;
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
  color: #585858;
  font-size: 0.75rem;
  font-weight: 400;
  padding: 0.3rem 0.8rem;
  box-sizing: border-box;
`;
export const LogoButton = styled.label`
  height: 1.875rem;
  border-radius: 5px;
  border: 1px solid #585858;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.0225rem;
  padding: 0 0.94rem;
  cursor: pointer;
`;
interface PreviewBoxProps {
  width: string;
  height: string;
}
export const PreviewBox = styled.div<PreviewBoxProps>`
  width: ${(props: PreviewBoxProps) => props.width};
  height: ${(props: PreviewBoxProps) => props.height};
  border-radius: 5px;
  border: 1px dashed #585858;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #585858;
  font-size: 0.75rem;
  font-weight: 400;
`;
