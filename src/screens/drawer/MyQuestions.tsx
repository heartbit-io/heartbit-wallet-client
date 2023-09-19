import React from 'react';
import styled from 'styled-components/native';

// components
import { Header, MyQuestionList } from 'components';

const MyQuestions = () => {
	return (
		<Wrapper>
			<Header headerTitle={'My Questions'} headerLeft={true} />
			<MyQuestionList />
		</Wrapper>
	);
};

export default MyQuestions;

const Wrapper = styled.View`
	flex: 1;
	background-color: #fff;
`;
