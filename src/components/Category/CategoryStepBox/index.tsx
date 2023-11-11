
import { ClubCategory, ClubCategoryStep } from '@/types/clubCreationInfo';

import { CategoryInput, CategoryList, CategoryListElement, CategoryWrapper, InputWrapper, SearchButton, SearchIcon } from './style';

type CategoryStepProps = {
  categoryStep: ClubCategoryStep;
	clubCategoryList: ClubCategory[];
  setCategoryStep: (categoryStep: ClubCategoryStep, category: ClubCategory) => void;
}

export default function CategoryStep({ categoryStep, clubCategoryList, setCategoryStep }:CategoryStepProps) {
  return (
    <CategoryWrapper>
      <InputWrapper>
        <CategoryInput
          placeholder="검색"
          onClick={(e: any) => {
            e.preventDefault();
          }}
        />
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </InputWrapper>
      <CategoryList>
        {clubCategoryList.map((category) => (
          <CategoryListElement
            key={category.id}
            onClick={(e: any) => {
              setCategoryStep(categoryStep, category);
            }}
          >
            {category.name}
          </CategoryListElement>
        ))}
      </CategoryList>
    </CategoryWrapper>

  );
}
