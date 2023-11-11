import 'react-quill/dist/quill.snow.css';

import React from 'react';

import { StyledQuillWrapper } from './style';

type TextEdditorProps = {
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
	minHeight?: string;
	borderRadius?: string;
};

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

export default function TextEdditor({ placeholder, value, onChange, minHeight, borderRadius }: TextEdditorProps) {
  return (
    <StyledQuillWrapper
      modules={modules}
      formats={formats}
      value={value}
      onChange={onChange}
      minHeight={minHeight}
      borderRadius={borderRadius}
      theme="snow"
    />
  );
}
