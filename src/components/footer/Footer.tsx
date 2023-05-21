import styled from 'styled-components';

const StyledFooter = styled.div`
  height: 80px;
	width: 100%;
	position:fixed;
  display: flex;
  flex-direction: row;
	align-items: center;
	background-color: #EEEEEE;
`;

const MaxWidthDiv = styled.div`
	max-width: 1440px;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
const SytledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  place-content: center;
  align-items: center;
	margin: 8px;
`;
export default function Footer() {
	return (
	<footer>
		<StyledFooter>
			<MaxWidthDiv>
				<SytledDiv>
					<h3>
						Test Footer
					</h3>
				</SytledDiv>
				<SytledDiv>
					<div>
						Read Documentation
					</div>
					<div>
						View on GitHub
					</div>
				</SytledDiv>
			</MaxWidthDiv>
		</StyledFooter>
    </footer>
	);
}