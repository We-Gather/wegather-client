import Image from 'next/image';
import React, { useState } from 'react';

import { ImageContainer, LogoButton, LogoInput, LogoRowWrapper, PreviewBox } from './style';

type ImagePreviewProps = {
	setFile: (file: File) => void;
	onChange: (value: string) => void;
	height?: number;
	width?: number;
};


export default function ImagePreview({setFile, onChange, height=120, width=120 }: ImagePreviewProps) {
  const [imagePreview, setImagePreview] = useState<string>('');

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
        <LogoButton htmlFor="input-file">찾아보기</LogoButton>
        <input
          type="file"
          id="input-file"
          style={{ display: 'none' }}
          onChange={(e) => addPreviewImage(e.target.files?.[0])}
        />
      </LogoRowWrapper>
      <LogoRowWrapper>
        {imagePreview ? (
          <Image
            priority
            src={imagePreview}
            width={width}
            height={height}
            alt="프로필 이미지 미리보기"
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
