import { clubCreationInfo } from '@/types/clubCreationInfo';
import { useState } from 'react';
import {
	AditionalInfoConatainer,
	ClubExplanationInput,
	ClubIntroductionInput,
	ClubNameInput,
	ClubRowWrapper,
	ClubTypeContainer,
	ClubTypeRadio,
	ClubTypeRadioSpan,
	ClubTypeWrapper,
	CreateForm,
	InfoConatainer,
	HeaderButtonContainer,
	HeaderMenuConatainer,
	InfoText,
	LogoButton,
	LogoInput,
	LogoRowWrapper,
	MainContainer,
	SchoolSelectInput,
	SchoolSelectWrapper,
} from './styles';
// import { axios } from '@/config/axiosConfig';

export default function CreateClub() {
	const [clubCreationInfo, setClubCreationInfo] = useState<clubCreationInfo>({
		name: '',
		type: '',
		schoolId: 0,
		logo: '',
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
						<button>test1test1test1</button>
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
							<LogoRowWrapper>
								<LogoInput>파일을 업로드하세요 (JPG, JPEG, PNG)</LogoInput>
								<LogoButton htmlFor="input-file">찾아보기</LogoButton>
								<input
									type="file"
									id="input-file"
									style={{ display: 'none' }}
									onChange={(e: any) =>
										setClubCreationInfo({
											...clubCreationInfo,
											logo: e.target.value,
										})
									}
								/>
							</LogoRowWrapper>
						</ClubRowWrapper>
						<ClubRowWrapper>
							<InfoText></InfoText>
							이미지
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
							<ClubExplanationInput
								value={clubCreationInfo.explanation}
								onChange={(e: any) =>
									setClubCreationInfo({
										...clubCreationInfo,
										explanation: e.target.value,
									})
								}
								required
							/>
						</ClubRowWrapper>
					</InfoConatainer>
					<InfoConatainer>추가정보</InfoConatainer>
					
				</CreateForm>
			</MainContainer>

		</>
	);
}
