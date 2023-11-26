import { Star as EmptyStarIcon } from '@styled-icons/evil/Star';
import { IosArrowLtr } from '@styled-icons/fluentui-system-filled/IosArrowLtr';
import { IosArrowRtl } from '@styled-icons/fluentui-system-filled/IosArrowRtl';
import { StarRate as FilledStarIcon } from '@styled-icons/material-sharp/StarRate';
import styled from 'styled-components';

export const ContainerDiv = styled.div`
  border-radius: 0.625rem;
  border: 1px solid #585858;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ContentDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const CategoryListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
  width: 14rem;
`;

export const CategoryDiv = styled.div<{ $selected?: boolean }>`
  padding: 0.4rem 1.5rem;
  border-radius: 2rem;
  box-sizing: border-box;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
  width: 6.25rem;
  cursor: pointer;
  ${props => props.$selected && 'background: #EFEFEF;'}
  ${props => props.$selected && 'color: #1CA526;'}
  ${props => props.$selected && 'font-weight: 500;'}
`;

export const ClubListDiv = styled.div`
  display: flex;
  gap: 1.69rem;
  padding: 1.38rem 0;
  align-items: center;
  position: relative;
`;

export const ClubDiv = styled.div`
  width: 13.75rem;
  height: 15rem;
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

export const PageDotList = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-bottom: 1rem;
  align-self: center;
`;

export const PageDot = styled.div<{ $current?: boolean }>`
  border-radius: 50%;
  width: 0.4375rem;
  height: 0.4375rem;
  background-color: ${props => (props.$current ? '#1ca526' : '#d9d9d9')};
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
  font-size: 0.625rem;
  font-weight: 400;
`;

export const ClubDiscriptionDiv = styled.div`
  color: #000;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 150%;
  flex-grow: 1;
  > div {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    padding: 0 0.9rem;
  }
`;

export const LeftIcon = styled(IosArrowLtr)`
  color: #9c9c9c;
  cursor: pointer;
`;

export const RightIcon = styled(IosArrowRtl)`
  color: #9c9c9c;
  cursor: pointer;
  position: absolute;
  right: 3rem;
`;

export const StarButton = styled.button`
  position: absolute;
  display: inline-block;
  right: 0.8rem;
  bottom: 0.8rem;
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
