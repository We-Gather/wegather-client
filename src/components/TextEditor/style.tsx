import styled from 'styled-components';
import dynamic from 'next/dynamic';
import React from 'react';

const QuillWrapper = dynamic(() => import('react-quill'), {
	ssr: false,
	loading: () => <p>Loading ...</p>,
});

export const StyledQuillWrapper = styled(QuillWrapper)<{ minHeight?: string, borderRadius?: string }>`
	.ql-toolbar {
		border-radius: ${(props) => props.borderRadius || '0'} ${(props) => props.borderRadius || '0'} 0 0;
    border: 1px solid #c9c9c9;
  }
	.ql-editor {
		min-height: ${(props) => props.minHeight || 'auto'};
	}
	.ql-container {
		border-radius: 0 0 ${(props) => props.borderRadius || '0'} ${(props) => props.borderRadius || '0'};
    border: 1px solid #c9c9c9;
  }
`;
