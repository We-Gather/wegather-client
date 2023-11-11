import { useState } from 'react';

import { clubCategory, clubCategoryStep } from '@/types/clubCreationInfo';

import CategoryStepBox from '../CategoryStepBox';
import { CategoryContainer, CategoryLabel, CategoryRowContainer } from './style';

type CategoryProps = {
	clubCategoryList: clubCategory[];
}

export default function CategoryList({ clubCategoryList }:CategoryProps) {
  const [categoryStep, setCategoryStep] = useState<clubCategoryStep>({
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
          setCategoryStep={((categoryStep: clubCategoryStep, category: clubCategory) => setCategoryStep({
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
          setCategoryStep={((categoryStep: clubCategoryStep, category: clubCategory) => setCategoryStep({
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
          setCategoryStep={((categoryStep: clubCategoryStep, category: clubCategory) => setCategoryStep({
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
