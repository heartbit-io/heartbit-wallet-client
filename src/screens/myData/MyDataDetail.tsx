import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

function MyDataDetail({ navigation, route }: { navigation: any; route: any }) {
	const { dataInfo } = route.params;
	useEffect(() => {
		navigation.setOptions({
			headerTitle: dataInfo?.title,
		});
	});
	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<View style={styles.rowContainer}>
				<View style={styles.row}>
					<Text style={styles.key}>Shared to</Text>
					<Text style={styles.value}>
						{dataInfo?.compatibleSystem ?? 'None'} {'and 1 other >'}
					</Text>
				</View>
			</View>
			<Text style={styles.headerTitle}>Summary</Text>

			<View style={styles.rowContainer}>
				<View style={[styles.row, styles.rowBottomLine]}>
					<Text style={styles.key}>Title</Text>
					<Text style={styles.value}>{dataInfo?.title ?? 'None'}</Text>
				</View>
				<Pressable
					onPress={() => {
						navigation.navigate('MyDataIssuer', {
							issuer: dataInfo?.issuer ?? 'None',
						});
					}}
					style={({ pressed }) => [
						{
							backgroundColor: pressed ? '#f8f9fa' : 'white', // TODO(hyunsub): common style
							width: '100%',
						},
					]}
				>
					<View style={[styles.row, styles.rowBottomLine]}>
						<Text style={styles.key}>Issuer</Text>
						<Text style={styles.value}>
							{dataInfo?.issuer?.name ?? 'None'} {' >'}
						</Text>
					</View>
				</Pressable>
				<View style={[styles.row, styles.rowBottomLine]}>
					<Text style={styles.key}>Type</Text>
					<Text style={styles.value}>{dataInfo?.type ?? 'None'}</Text>
				</View>
				<View style={[styles.row, styles.rowBottomLine]}>
					<Text style={styles.key}>PI</Text>
					<Text style={styles.value}>{dataInfo?.PI ?? 'None'}</Text>
				</View>
				<View style={[styles.row, styles.rowBottomLine]}>
					<Text style={styles.key}>Start date</Text>
					<Text style={styles.value}>{dataInfo?.startDate ?? 'None'}</Text>
				</View>
				<View style={[styles.row, styles.rowBottomLine]}>
					<Text style={styles.key}>End date</Text>
					<Text style={styles.value}>{dataInfo?.endDate ?? 'None'}</Text>
				</View>
				<View style={[styles.row, styles.rowBottomLine]}>
					<Text style={styles.key}>Jurisdiction</Text>
					<Text style={styles.value}>{dataInfo?.jurisdiction ?? 'None'}</Text>
				</View>
				<View style={[styles.row, styles.rowBottomLine]}>
					<Text style={styles.key}>Compatible system</Text>
					<Text style={styles.value}>
						{dataInfo?.compatibleSystem ?? 'None'}
					</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.key}>Issued at</Text>
					<Text style={styles.value}>{dataInfo?.issuedAt ?? 'None'}</Text>
				</View>
			</View>
			<Text style={styles.headerTitle}>Issued data</Text>
			<Text style={styles.headerDescription}>
				These data are encrypted and stored only in your local and others’
				device you allowed.
			</Text>
			<Pressable
				onPress={() => {
					navigation.navigate('MyDataDemographics', {
						demographics: dataInfo?.demographics ?? 'None',
					});
				}}
				style={({ pressed }) => [
					styles.rowContainer,
					{
						backgroundColor: pressed ? '#f8f9fa' : 'white', // TODO(hyunsub): common style
					},
				]}
			>
				<View style={styles.row}>
					<Text style={styles.key}>Demographics</Text>
					<Text style={styles.value}>
						{dataInfo?.dataCnt ?? 0} {'data >'}
					</Text>
				</View>
			</Pressable>
			<View style={styles.rowContainer}>
				<View style={[styles.row, styles.rowBottomLine]}>
					<Text style={styles.key}>Family Hx.</Text>
					<Text style={styles.value}>
						{dataInfo?.isFamilyHistory ? 'Yes' : 'No'}
					</Text>
				</View>
				<View style={[styles.row, styles.rowBottomLine]}>
					<Text style={styles.key}>Familyhistory_diagnosis</Text>
					<Text style={styles.value}>
						{dataInfo?.familyHistoryDiagnosis ?? 'None'}
					</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.key}>NF1 mutation</Text>
					<Text style={styles.value}>{dataInfo?.NF1Mutation ?? 'None'}</Text>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 8,
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20,
	},
	headerTitle: {
		fontWeight: 'bold',
		fontSize: 18,
		marginTop: 10,
		marginBottom: 10,
	},
	headerDescription: {
		fontSize: 10,
		marginBottom: 10,
		color: '#828282',
	},
	rowContainer: {
		padding: 10,
		alignItems: 'center',
		marginVertical: 10,
		borderRadius: 8,
		backgroundColor: 'white',
		height: 'auto',
		flex: 1,
	},
	row: {
		padding: 18,
		flexDirection: 'row',
		alignItems: 'center',
	},
	rowBottomLine: {
		borderBottomColor: '#e9ecef',
		borderBottomWidth: 1,
	},
	key: {
		flex: 1,
	},
	value: {
		textAlign: 'right',
		color: '#828282',
		flex: 2,
	},
	backButton: {
		padding: 10,
	},
	backButtonText: {
		fontSize: 16,
		color: 'blue',
	},
});

export default MyDataDetail;
