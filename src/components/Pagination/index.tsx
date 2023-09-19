import React, { useEffect, useState, useCallback } from 'react';
import {
  PaginationWrapper,
  PageButton,
  ButtonWrapper,
  PrevNextButton,
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
  const [totalPageArray, setTotalPageArray] = useState<Array<Array<number>>>(
    []
  );

  // 전체 페이지 수와 한 번에 보여줄 페이지 수 가지고 페이지 2차원 배열 정보 생성
  const sliceArrayByLimit = useCallback((totalPage: number, limit: number) => {
    const totalPageArray = [...Array(totalPage)].map((_, i) => i);
    return [...Array(Math.ceil(totalPage / limit))]
      .map((_, i) => i)
      .map(() => totalPageArray.splice(0, limit));
  }, []);

  // 현재 페이지 번호로 하단에 보여줄 페이지 배열 정보 설정
  useEffect(() => {
    if (page % limit === 1) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit)]);
    } else if (page % limit === 0) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit) - 1]);
    }
  }, [page, limit, totalPageArray]);

  // 페이지 정보 생성
  useEffect(() => {
    const slicedPageArray = sliceArrayByLimit(totalPage, limit);
    setTotalPageArray(slicedPageArray);
    setCurrentPageArray(slicedPageArray[0]);
  }, [totalPage, limit, sliceArrayByLimit]);

  return (
    <PaginationWrapper>
      <PrevNextButton
        disabled={page === 1}
        onClick={() => {
          if (page !== 1) setPage(page - 1);
        }}
      >
        {'< 이전'}
      </PrevNextButton>
      <ButtonWrapper>
        {currentPageArray?.map((i) => (
          <PageButton
            key={i + 1}
            onClick={() => setPage(i + 1)}
            selected={page === i + 1}
          >
            {i + 1}
          </PageButton>
        ))}
      </ButtonWrapper>
      <PrevNextButton
        disabled={page === totalPage}
        onClick={() => {
          if (page !== totalPage) setPage(page + 1);
        }}
      >
        {'다음 >'}
      </PrevNextButton>
    </PaginationWrapper>
  );
}
