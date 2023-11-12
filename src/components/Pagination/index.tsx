import React, { useEffect, useState } from 'react';

import {
  ButtonWrapper,
  PageButton,
  PaginationWrapper,
  PrevNextButton
} from './style';

type PaginationProps = {
  totalPage: number; // 전체 페이지 개수 (데이터 개수/한 페이지당 보여줄 데이터 개수)
  limit: number; // 하단에 한 번에 보여줄 페이지 수
  page: number; // 현재 페이지 번호
  setPage: React.Dispatch<React.SetStateAction<number>>; // 현재 페이지 번호 set 함수
};

/**
 * 페이징 컴포넌트
 */
export default function Pagination({
  totalPage,
  limit,
  page,
  setPage,
}: PaginationProps) {
  const [currentPageArray, setCurrentPageArray] = useState<Array<number>>([]);

  useEffect(() => {
    const start = Math.floor((page - 1) / limit) * limit + 1;
    const end = Math.ceil(page / limit) * limit;
    let pageCount = limit;
    if (totalPage < end) {
      pageCount = totalPage - start + 1;
    }
    setCurrentPageArray(Array.from({ length: pageCount }, (_, i) => i + start));
  }, [page, limit, totalPage]);

  return (
    <PaginationWrapper>
      <PrevNextButton
        disabled={page === 1}
        onClick={() => {
          if (page !== 1) setPage(page - 1);
        }}>
        {'< 이전'}
      </PrevNextButton>
      <ButtonWrapper>
        {currentPageArray?.map(i => (
          <PageButton key={i} onClick={() => setPage(i)} selected={page === i}>
            {i}
          </PageButton>
        ))}
      </ButtonWrapper>
      <PrevNextButton
        disabled={page === totalPage}
        onClick={() => {
          if (page !== totalPage) setPage(page + 1);
        }}>
        {'다음 >'}
      </PrevNextButton>
    </PaginationWrapper>
  );
}
