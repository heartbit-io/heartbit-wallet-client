import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

const Word = ({ word, onAnimationEnd }) => {
	const opacity = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 200,
			useNativeDriver: true,
		}).start(onAnimationEnd);
	}, []);

	const animatedStyle = {
		opacity,
	};

	return (
		<Animated.Text style={[styles.gptAnswerText, animatedStyle]}>
			{word + ' '}
		</Animated.Text>
	);
};

function GPT4Answer({
	text = "I'm an AI language model and not a licensed doctor. However, I can provide you with some general information. Methotrexate (MTX) is a medication commonly used for treating arthritis. It's important to discuss your concerns with your healthcare provider, especially if you feel your eyes have gotten worse. Your doctor will be able to give you personalized advice based on your medical history and current condition.",
	interval = 5,
}: {
	text: string;
	interval: number;
}) {
	const words = text.split(' ');
	const [shownWords, setShownWords] = useState([]);
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	const onAnimationEnd = () => {
		if (currentWordIndex < words.length) {
			const timer = setTimeout(() => {
				setCurrentWordIndex(currentWordIndex + 1);
			}, interval);
			return () => clearTimeout(timer);
		}
	};

	useEffect(() => {
		if (currentWordIndex < words.length) {
			setShownWords([...shownWords, words[currentWordIndex]]);
		}
	}, [currentWordIndex]);

	return (
		<View style={styles.container}>
			<View style={styles.postContainer}>
				<View style={styles.rowContainer}>
					<View style={styles.gptProfile}>
						<Image
							style={styles.gptLogo}
							source={require('../../assets/img/ic_gpt_logo.png')}
						/>
					</View>
					<View style={styles.columnContainer}>
						<Text style={styles.bigText}>GPT-4</Text>
						<Text style={styles.smallGrayText}>Open AI ・ 23 Mar 2023</Text>
					</View>
				</View>
				<View style={styles.gptAnswerContainer}>
					<View style={styles.gptAnswerTextWrapper}>
						{shownWords.map((word, index) => (
							<Word
								key={index}
								word={word}
								onAnimationEnd={
									index === shownWords.length - 1 ? onAnimationEnd : null
								}
							/>
						))}
					</View>
				</View>
			</View>
		</View>
	);
}

export default GPT4Answer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
	},
	postContainer: {
		flex: 1,
		paddingHorizontal: '5%',
	},
	columnContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	rowContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	gptProfile: {
		verticalAlign: 'middle',
		fontWeight: 'bold',
		backgroundColor: '#189B70',
		width: 40,
		height: 40,
		borderRadius: 20,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	smallText: {
		fontSize: 10,
		fontWeight: 'bold',
	},
	bigText: {
		fontSize: 18,
		fontWeight: 'bold',
		paddingLeft: '4%',
	},
	bigTextWithoutBold: {
		fontSize: 18,
		paddingTop: '4%',
	},
	smallGrayText: {
		fontSize: 12,
		fontWeight: 'bold',
		color: 'gray',
		paddingLeft: '4%',
	},
	gptAnswerContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	gptAnswerTextWrapper: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		width: '100%',
		paddingTop: '4%',
	},
	gptAnswerText: {
		fontSize: 18,
	},
	gptLogo: { width: 20, height: 20 },
});
