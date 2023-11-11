import Image from 'next/image';
import React from 'react';

import { ImageContainer, LogoButton, LogoInput, LogoRowWrapper, PreviewBox } from './style';

type ImagePreviewProps = {
  inputId: string;
  imagePreview: string;
  setImagePreview: React.Dispatch<React.SetStateAction<string>>;
	setFile: (file: File) => void;
	height?: number;
	width?: number;
};


export default function ImagePreview({ inputId, imagePreview, setImagePreview, setFile, height=120, width=120 }: ImagePreviewProps) {

  const addPreviewImage = (image?:File) => {
    if (image) {
      setFile(image);
      const reader = new FileReader();
      reader.readAsDataURL(image);
      return new Promise<void>((resolve) => {
        reader.onload = () => {
          setImagePreview(reader.result as string);
          resolve();
        };
      });
    }
  };

  return (
    <ImageContainer>
      <LogoRowWrapper>
        <LogoInput>파일을 업로드하세요 (JPG, JPEG, PNG)</LogoInput>
        <LogoButton htmlFor={inputId}>찾아보기</LogoButton>
        <input
          type="file"
          id={inputId}
          style={{ display: 'none' }}
          onChange={(e) => addPreviewImage(e.target.files?.[0])}
        />
      </LogoRowWrapper>
      <LogoRowWrapper>
        {imagePreview ? (
          <Image
            src={imagePreview}
            width={width}
            height={height}
            alt="이미지 미리보기"
          />
        ): (
          <PreviewBox
            width={`${width}px`}
            height={`${height}px`}
          >
            {`${height} x ${width} px`}
          </PreviewBox>
        )}
       
      </LogoRowWrapper>
    </ImageContainer>
  );
}
