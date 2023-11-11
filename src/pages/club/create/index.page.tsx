import { useState } from 'react';
import React from 'react';

import ImagePreview from '@/components/ImagePreview';
import TextEditor from '@/components/TextEditor';
import { clubCreationInfo } from '@/types/clubCreationInfo';

import {
  ClubExplanationInput,
  ClubIntroductionInput,
  ClubNameInput,
  ClubRowWrapper,
  ClubTypeContainer,
  ClubTypeRadio,
  ClubTypeRadioSpan,
  ClubTypeWrapper,
  CreateForm,
  HeaderButtonContainer,
  HeaderMenuConatainer,
  InfoConatainer,
  InfoText,
  MainContainer,
  SchoolSelectInput,
  SchoolSelectWrapper
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
    // catagory: '',
    // tag: '',
    poster: '',
  });

  // const handler = () => {
  // 	setClubCreationInfo({
  // 		name: 'test',
  // 		type: 'union',
  // 		schoolId: 1,
  // 		logo: '',
  // 		introduction: 'adf',
  // 		explanation: 'dddd',
  // 		// catagory: '',
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
            <button onClick={() => {
              console.log(clubCreationInfo);
            }}>test1test1test1</button>
            <button>test1</button>
            <button>test1</button>
            <button>test1</button>
          </HeaderButtonContainer>
        </HeaderMenuConatainer>
        <CreateForm>
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
                setFile={(file: File) => setClubCreationInfo({
                  ...clubCreationInfo,
                  logo: file,
                })}
                onChange={(e: any) => setClubCreationInfo({
                  ...clubCreationInfo,
                  logo: e.target.value,
                })}
              />
            </ClubRowWrapper>
            <ClubRowWrapper>
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
            </ClubRowWrapper>
            <ClubRowWrapper>
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
                  minHeight='16rem'
                  borderRadius='5px'
                  placeholder={'상세설명'}
                />
              </ClubExplanationInput>
            </ClubRowWrapper>
          </InfoConatainer>
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
          </InfoConatainer>
        </CreateForm>
      </MainContainer>
    </>
  );
}
