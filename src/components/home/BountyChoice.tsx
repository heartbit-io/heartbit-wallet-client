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

import BountyConfirm from './BountyConfirm';

const windowHeight = Dimensions.get('window').height;

export function BountyChoice({ navigation }: { navigation: any }) {
	const [bounty, setBounty] = useState(0);
	const [modalVisible, setModalVisible] = useState(false);
	const bountyHandler = (bounty: number) => {
		setBounty(bounty);
	};

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
					<View style={styles.flexSpacer} />
					<Text style={styles.rightText}>100 sats</Text>
				</View>
				<Text style={styles.rightTextBottom}>$0.03</Text>
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
					<View style={styles.flexSpacer} />
					<Text style={styles.rightText}>1,000 sats</Text>
				</View>
				<Text style={styles.rightTextBottom}>$0.28</Text>
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
					<View style={styles.flexSpacer} />
					<Text style={styles.rightText}>10,000 sats</Text>
				</View>
				<Text style={styles.rightTextBottom}>$2.85</Text>
			</TouchableOpacity>

			<View style={styles.balanceContainer}>
				<Text style={styles.balanceText}>Balance: 2,393,042 sats</Text>
			</View>
			<BountyConfirm navigation={navigation} bounty={bounty} />
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
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	infoLogo: {
		width: 20,
		height: 20,
	},
	columnContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
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
		borderWidth: 2,
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
		borderWidth: 2,
		borderRadius: 10,
	},
	leftText: {
		marginTop: 14,
		marginLeft: '3%',
		fontSize: 13,
		marginRight: 'auto',
	},
	rightText: {
		marginRight: '3%',
		fontSize: 17,
		fontWeight: 'bold',
		marginLeft: 'auto',
	},
	rightTextBottom: {
		marginRight: '3%',
		fontSize: 12,
		fontWeight: 'bold',
		marginLeft: 'auto',
		color: '#8E8E93',
	},
	balanceText: {
		fontSize: 15,
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
		fontSize: 12,
		fontWeight: 'bold',
		color: 'gray',
		marginHorizontal: 8,
	},
	bigText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	logo: {
		width: 15,
		height: 15,
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
		padding: 10,
		backgroundColor: '#F68F2A',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 14,
	},
	modalButtonText: {
		fontSize: 17,
		color: '#FFFFFF',
	},
	modalTitleText: {
		fontSize: 28,
		fontWeight: 'bold',
	},
	modalContentText: {
		fontSize: 17,
		paddingTop: 20,
		paddingBottom: 25,
	},
});
