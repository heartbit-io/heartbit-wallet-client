import {
	Animated,
	Dimensions,
	Image,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { scale, verticalScale } from '../../styles/responsive-size';

const windowHeight = Dimensions.get('window').height;

export function BountyChoiceList({
	bounty,
	setBounty,
}: {
	bounty: number;
	setBounty: Function;
}) {
	const [modalVisible, setModalVisible] = useState(false);

	const translateY = useRef(new Animated.Value(windowHeight)).current;

	const showModal = () => {
		setModalVisible(true);
		Animated.timing(translateY, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	const hideModal = () => {
		Animated.timing(translateY, {
			toValue: windowHeight,
			duration: 300,
			useNativeDriver: true,
		}).start(() => {
			setModalVisible(false);
		});
	};

	return (
		<>
			<View style={styles.infoContainer}>
				<TouchableOpacity onPress={showModal}>
					<Text>
						<Image
							style={styles.infoLogo}
							source={require('../../assets/img/ic_info.png')}
						/>
						<Text style={styles.smallGrayText}> About bounty</Text>
					</Text>
				</TouchableOpacity>
			</View>

			<Modal
				animationType="none"
				transparent={true}
				visible={modalVisible}
				onRequestClose={hideModal}
			>
				<View style={styles.modalContainer}>
					<Animated.View
						style={[
							styles.modalContent,
							{
								transform: [{ translateY }],
							},
						]}
					>
						<View style={styles.modalContent}>
							<Text style={styles.modalTitleText}>
								How does the bounty work?
							</Text>
							<Text style={styles.modalContentText}>
								A bounty goes to doctor who writes the best answer of your
								choice. {'\n\n'}If no answer is received, 100 sats go to AI, and
								the rest will be refunded to you.
							</Text>
							<TouchableOpacity style={styles.modalButton} onPress={hideModal}>
								<Text style={styles.modalButtonText}>OK</Text>
							</TouchableOpacity>
						</View>
					</Animated.View>
				</View>
			</Modal>
			<Text></Text>
			<TouchableOpacity
				style={bounty === 100 ? styles.buttonSelected : styles.button}
				onPress={() => {
					setBounty(100);
					console.log(bounty);
				}}
			>
				<View style={styles.bountyItemContainer}>
					<Text style={styles.leftText}>An AI answer guaranteed</Text>
					<View style={styles.columnContainer}>
						<Text style={styles.rightText}>100 sats</Text>
						<Text style={styles.rightTextBottom}>$0.03</Text>
					</View>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={bounty === 1000 ? styles.buttonSelected : styles.button}
				onPress={() => {
					setBounty(1000);
					console.log(bounty);
				}}
			>
				<View style={styles.bountyItemContainer}>
					<Text style={styles.leftText}>
						May receive less than <Text style={styles.boldText}>1d</Text>
					</Text>
					<View style={styles.columnContainer}>
						<Text style={styles.rightText}>1,000 sats</Text>
						<Text style={styles.rightTextBottom}>$0.28</Text>
					</View>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={bounty === 10000 ? styles.buttonSelected : styles.button}
				onPress={() => {
					setBounty(10000);
					console.log(bounty);
				}}
			>
				<View style={styles.bountyItemContainer}>
					<Text style={styles.leftText}>
						May receive less than <Text style={styles.boldText}>3h</Text>
					</Text>
					<View style={styles.columnContainer}>
						<Text style={styles.rightText}>10,000 sats</Text>
						<Text style={styles.rightTextBottom}>$2.85</Text>
					</View>
				</View>
			</TouchableOpacity>
			<View style={styles.balanceContainer}>
				<Text style={styles.balanceText}>Balance: 2,393,042 sats</Text>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	infoContainer: {
		marginTop: '4%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	balanceContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	bountyItemContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	infoLogo: {
		width: scale(20),
		height: verticalScale(20),
	},
	columnContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: scale(3),
		marginVertical: verticalScale(3),
	},
	rowContainer: {
		flex: 0.3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	contentArea: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		marginTop: '4%',
		width: '100%',
		height: '10%',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'gray',
		backgroundColor: 'white',
		borderWidth: scale(2),
		borderRadius: 10,
	},
	buttonSelected: {
		marginTop: '4%',
		width: '100%',
		height: '10%',
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'red',
		backgroundColor: 'white',
		borderWidth: scale(2),
		borderRadius: 10,
	},
	leftText: {
		marginLeft: '3%',
		fontSize: scale(13),
		marginRight: 'auto',
	},
	rightText: {
		marginRight: '3%',
		fontSize: scale(14),
		fontWeight: 'bold',
		marginLeft: 'auto',
		marginVertical: verticalScale(1),
	},
	rightTextBottom: {
		marginRight: '3%',
		fontSize: scale(12),
		fontWeight: 'bold',
		marginLeft: 'auto',
		color: '#8E8E93',
		marginVertical: verticalScale(1),
	},
	balanceText: {
		fontSize: scale(15),
		color: '#8E8E93',
		textAlign: 'center',
	},
	flexSpacer: {
		flex: 1,
	},
	boldText: {
		fontWeight: 'bold',
	},
	smallGrayText: {
		fontSize: scale(12),
		fontWeight: 'bold',
		color: 'gray',
		marginHorizontal: scale(8),
	},
	bigText: {
		fontSize: scale(18),
		fontWeight: 'bold',
	},
	logo: {
		width: scale(15),
		height: verticalScale(15),
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalContent: {
		backgroundColor: '#FFF5ED',
		borderRadius: 40,
		paddingTop: '5%',
		paddingLeft: '3%',
		paddingRight: '3%',
		paddingBottom: '2%',
		marginLeft: '3%',
		marginRight: '3%',
		marginBottom: '5%',
	},
	modalButton: {
		paddingHorizontal: scale(10),
		paddingVertical: verticalScale(10),
		backgroundColor: '#F68F2A',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 14,
	},
	modalButtonText: {
		fontSize: scale(17),
		color: '#FFFFFF',
	},
	modalTitleText: {
		fontSize: scale(28),
		fontWeight: 'bold',
	},
	modalContentText: {
		fontSize: scale(17),
		paddingTop: verticalScale(20),
		paddingBottom: verticalScale(25),
	},
});
