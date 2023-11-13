import { Star as EmptyStarIcon } from '@styled-icons/evil/Star';
import { StarRate as FilledStarIcon } from '@styled-icons/material-sharp/StarRate';
import styled from 'styled-components';

export const ContainerDiv = styled.div`
  border-radius: 0.625rem;
  border: 1px solid #585858;
  display: flex;
  align-items: center;
  max-height: 100rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2.25rem;
  padding: 2.56rem 0;
  justify-content: center;
  overflow: auto;
`;

export const ClubDiv = styled.div`
  width: 19.375rem;
  height: 14.375rem;
  flex-shrink: 0;
  border-radius: 1.06rem;
  border: 1px solid #c9c9c9;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 1.31rem;
  position: relative;
  padding: 0.81rem 1.06rem;
  cursor: pointer;
`;

export const ClubImage = styled.div<{ $url: string }>`
  width: 3.125rem;
  height: 3.125rem;
  flex-shrink: 0;
  background-image: url(${props => props.$url});
  background-repeat: no-repeat;
  background-size: 3.125rem 3.125rem;
  background-color: #1ca526;
  border-radius: 50%;
`;

export const ClubTitleDiv = styled.div`
  display: flex;
  gap: 0.44rem;
  align-items: center;
  > div {
    color: #000;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

export const ClubInfoDiv = styled.div`
  color: #585858;
  font-family: Noto Sans KR;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 130%;
`;

export const ClubDiscriptionDiv = styled.div`
  color: #000;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 150%;
  flex-grow: 1;
  > div {
    color: #000;
    word-break: keep-all;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
`;

export const StarButton = styled.button`
  position: absolute;
  display: inline-block;
  right: 1rem;
  top: 0.87rem;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: none;
  color: #fff;
`;

export const EmptyStar = styled(EmptyStarIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #9c9c9c;
  cursor: pointer;
`;

export const FilledStar = styled(FilledStarIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: #fbbc05;
  cursor: pointer;
`;

export const TagListDiv = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  > div {
    padding: 0.19rem 1.25rem;
    color: #585858;
    font-size: 0.75rem;
    font-weight: 400;
    border-radius: 3.125rem;
    background: #e5e5e5;
  }
`;
