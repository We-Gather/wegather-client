import { useState } from 'react';
import React from 'react';

import GreenBorderButton from '@/components/button/GreanMediumButton';
import CategoryList from '@/components/Category/CategoryList';
import ImagePreview from '@/components/ImagePreview';
import TextEditor from '@/components/TextEditor';
import { clubCategory, clubCreationInfo } from '@/types/clubCreationInfo';

import {
  ClubExplanationInput,
  ClubIntroductionInput,
  ClubNameInput,
  ClubRowWrapper,
  ClubTypeContainer,
  ClubTypeRadio,
  ClubTypeRadioSpan,
  ClubTypeWrapper,
  CountText,
  CreateForm,
  HeaderButtonContainer,
  HeaderMenuConatainer,
  InfoConatainer,
  InfoText,
  InfoType,
  MainContainer,
  SchoolSelectInput,
  SchoolSelectWrapper,
  TagContainer,
  TextCountInputWrapper,
  TextCountWrapper
} from './style';

// import { axios } from '@/config/axiosConfig';

export default function CreateClub() {
  const [clubCreationInfo, setClubCreationInfo] = useState<clubCreationInfo>({
    name: '',
    type: '',
    schoolId: 0,
    logo: undefined,
    introduction: '',
    explanation: '',
    // category: '',
    // tag: '',
    poster: undefined,
  });


  const clubCategoryList: clubCategory[] = [
    {
      id: '1',
      name: '테스트1',
      sub: [
        {
          id: '11',
          name: '테스트11',
          sub: [
            {
              id: '111',
              name: '테스트111',
              sub: [],
            },
          ],
        },
        {
          id: '12',
          name: '테스트12',
          sub: [
            {
              id: '121',
              name: '테스트121',
              sub: [],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: '테스트2',
      sub: [
        { id: '21', name: '테스트21', sub: [] },
        { id: '22', name: '테스트22', sub: [] },
      ],
    },
  ];
  // const handler = () => {
  // 	setClubCreationInfo({
  // 		name: 'test',
  // 		type: 'union',
  // 		schoolId: 1,
  // 		logo: '',
  // 		introduction: 'adf',
  // 		explanation: 'dddd',
  // 		// category: '',
  // 		// tag: '',
  // 		poster: '',
  // 	});
  // 	axios
  // 		.post('/club', clubCreationInfo)
  // 		.then((res: any) => {
  // 			console.log(res);
  // 		})
  // 		.catch((err: any) => {
  // 			console.log(err);
  // 		});
  // };

  return (
    <>
      <MainContainer>
        <HeaderMenuConatainer>
          <p>동아리 생성</p>
          <HeaderButtonContainer>
            <GreenBorderButton
              background="#FFF"
              text="미리보기"
              textcolor="#36BF7F"
              onClick={() => {
                console.log(clubCreationInfo);
              }}
            />
            <GreenBorderButton
              background="#DDF8EB"
              text="불러오기"
              textcolor="#36BF7F"
              onClick={() => {
                console.log(clubCreationInfo);
              }}
            />
            <GreenBorderButton
              background="#DDF8EB"
              text="임시저장"
              textcolor="#36BF7F"
              onClick={() => {
                console.log(clubCreationInfo);
              }}
            />
            <GreenBorderButton
              background="#36BF7F"
              text="생성하기"
              textcolor="#FFF"
              onClick={() => {
                console.log(clubCreationInfo);
              }}
            />
          </HeaderButtonContainer>
        </HeaderMenuConatainer>
        <CreateForm>
          <InfoType>필수정보</InfoType>
          <InfoConatainer>
            <ClubRowWrapper>
              <InfoText>동아리 명</InfoText>
              <ClubNameInput
                type="text"
                value={clubCreationInfo.name}
                placeholder="동아리 명"
                onChange={(e: any) =>
                  setClubCreationInfo({
                    ...clubCreationInfo,
                    name: e.target.value,
                  })
                }
                required
              />
            </ClubRowWrapper>
            <ClubRowWrapper>
              <ClubTypeContainer>
                <InfoText>타입</InfoText>
                <ClubTypeWrapper>
                  <div>
                    <ClubTypeRadio
                      id="general"
                      value="general"
                      name="type"
                      onChange={(e: any) =>
                        setClubCreationInfo({
                          ...clubCreationInfo,
                          type: e.target.value,
                        })
                      }
                      checked
                    />
                    <ClubTypeRadioSpan>일반동아리</ClubTypeRadioSpan>
                    <ClubTypeRadio
                      id="union"
                      value="union"
                      name="type"
                      onChange={(e: any) =>
                        setClubCreationInfo({
                          ...clubCreationInfo,
                          type: e.target.value,
                        })
                      }
                    />
                    <ClubTypeRadioSpan>연합동아리</ClubTypeRadioSpan>
                  </div>
                  <SchoolSelectWrapper>
                    <InfoText>학교명</InfoText>
                    <SchoolSelectInput />
                  </SchoolSelectWrapper>
                </ClubTypeWrapper>
              </ClubTypeContainer>
            </ClubRowWrapper>
            <ClubRowWrapper>
              <InfoText>로고</InfoText>
              <ImagePreview
							  inputId='logo'
                setFile={(file:File) => setClubCreationInfo({
                  ...clubCreationInfo,
                  logo: file,
                })} 
              />
            </ClubRowWrapper>
            <ClubRowWrapper>
              <TextCountWrapper>
                <TextCountInputWrapper>
                  <InfoText>간단소개</InfoText>
                  <ClubIntroductionInput
                    value={clubCreationInfo.introduction}
                    onChange={(e: any) =>
                      setClubCreationInfo({
                        ...clubCreationInfo,
                        introduction: e.target.value,
                      })
                    }
                    required
                  />
                </TextCountInputWrapper>
                <CountText>
                  <span>{clubCreationInfo.introduction.length}</span>/120자
                </CountText>
              </TextCountWrapper>
            </ClubRowWrapper>
            <ClubRowWrapper>
              <TextCountWrapper>
                <TextCountInputWrapper>
                  <InfoText>상세설명</InfoText>
                  <ClubExplanationInput>
                    <TextEditor
                      value={clubCreationInfo.explanation}
                      onChange={(value: string) =>
                        setClubCreationInfo({
                          ...clubCreationInfo,
                          explanation: value,
                        })
                      }
                      minHeight="16rem"
                      borderRadius="5px"
                      placeholder={'상세설명'}
                    />
                  </ClubExplanationInput>
                </TextCountInputWrapper>
                <CountText>
                  <span>{clubCreationInfo.explanation.length}</span>/2000자
                </CountText>
              </TextCountWrapper>
            </ClubRowWrapper>
          </InfoConatainer>
          <InfoType>추가정보</InfoType>
          <InfoConatainer>
            <ClubRowWrapper>
              <InfoText>카테고리</InfoText>
              <CategoryList
                clubCategoryList={clubCategoryList}
                // setClubCreationInfo로 다시 가져와야함.
              />
            </ClubRowWrapper>
            <ClubRowWrapper>
              <InfoText>태그</InfoText>
              <TagContainer>
                <div>인풋</div>
                <div>태그들</div>
              </TagContainer>
            </ClubRowWrapper>
            <ClubRowWrapper>
              <InfoText>포스터</InfoText>
              <ImagePreview
                inputId='poster'
                setFile={(file:File) => setClubCreationInfo({
                  ...clubCreationInfo,
                  poster: file,
                })} 
                height={200}
                width={200}
              />
            </ClubRowWrapper>
          </InfoConatainer>
        </CreateForm>
      </MainContainer>
    </>
  );
}
