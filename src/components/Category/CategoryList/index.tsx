import { useState } from 'react';

import { ClubCategory, ClubCategoryStep } from '@/types/clubCreationInfo';

import CategoryStepBox from '../CategoryStepBox';
import { CategoryContainer, CategoryLabel, CategoryRowContainer } from './style';

type CategoryProps = {
	clubCategoryList: ClubCategory[];
}

export default function CategoryList({ clubCategoryList }:CategoryProps) {
  const [categoryStep, setCategoryStep] = useState<ClubCategoryStep>({
    first: {
      id: '',
      name: '',
      sub: [],
    },
    second: {
      id: '',
      name: '',
      sub: [],
    },
    third: {
      id: '',
      name: '',
      sub: [],
    },
  });
	
  return (
    <CategoryContainer>
      <CategoryRowContainer>
        <CategoryLabel>{categoryStep.first.name}</CategoryLabel>
        <CategoryLabel>{categoryStep.second.name}</CategoryLabel>
        <CategoryLabel>{categoryStep.third.name}</CategoryLabel>
      </CategoryRowContainer>
      <CategoryRowContainer>
        <CategoryStepBox
          categoryStep={categoryStep}
          clubCategoryList={clubCategoryList}
          setCategoryStep={((categoryStep: ClubCategoryStep, category: ClubCategory) => setCategoryStep({
            ...categoryStep,
            first: {
              id: category.id,
              name: category.name,
              sub: category.sub,
            },
          }))}
        />
        <CategoryStepBox
          categoryStep={categoryStep}
          clubCategoryList={categoryStep.first.sub}
          setCategoryStep={((categoryStep: ClubCategoryStep, category: ClubCategory) => setCategoryStep({
            ...categoryStep,
            second: {
              id: category.id,
              name: category.name,
              sub: category.sub,
            },
          }))}
        />
        <CategoryStepBox
          categoryStep={categoryStep}
          clubCategoryList={categoryStep.second.sub}
          setCategoryStep={((categoryStep: ClubCategoryStep, category: ClubCategory) => setCategoryStep({
            ...categoryStep,
            third: {
              id: category.id,
              name: category.name,
              sub: category.sub,
            },
          }))}
        />
      </CategoryRowContainer>
    </CategoryContainer>);
}
