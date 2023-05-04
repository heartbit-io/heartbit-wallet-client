import styled from 'styled-components/native';

const Text = styled.Text<{ weight?: 'bold' | 'regular'; color?: string }>`
	color: ${({ color }) => (color ? color : '#000')};
	font-family: ${({ weight }) =>
		weight === 'bold' ? 'Pretendard-Bold' : 'Pretendard-Regular'};
`;

export const Caption2 = styled(Text)`
	font-size: 11px;
	line-height: 13px;
`;

export const Caption1 = styled(Text)`
	font-size: 12px;
	line-height: 16px;
`;

export const Footnote = styled(Text)`
	font-size: 13px;
	line-height: 18px;
`;

export const Subheadline = styled(Text)`
	font-size: 15px;
	line-height: 20px;
`;

export const Callout = styled(Text)`
	font-size: 16px;
	line-height: 21px;
`;

export const Body = styled(Text)`
	font-size: 17px;
	line-height: 22px;
`;

export const Headline = styled(Text)`
	font-size: 17px;
	line-height: 22px;
`;

export const Title3 = styled(Text)`
	font-size: 20px;
	line-height: 25px;
`;

export const Title2 = styled(Text)`
	font-size: 22px;
	line-height: 28px;
`;

export const Title1 = styled(Text)`
	font-size: 28px;
	line-height: 34px;
`;

export const LargeTitle = styled(Text)`
	font-size: 34px;
	line-height: 41px;
`;
