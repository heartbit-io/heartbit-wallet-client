/*

scope for v2

import { Button, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { selectDID } from './DIDSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { BtcAccount } from '../../utils/hippocrat';

export function DID() {
	const DID: BtcAccount = useAppSelector(selectDID);

	const copyToClipboard = (didPubKey: string): void => {
		Clipboard.setString(didPubKey);
	};

	return (
		<>
			<Text style={styles.text}>My Hippocrat DID</Text>
			<Text style={styles.text} ellipsizeMode="middle" numberOfLines={1}>
				did:hpo:
				{DID.publicKey.toString('hex')}
			</Text>
			<TouchableOpacity
				onPress={() =>
					copyToClipboard(`did:hpo:${DID.publicKey.toString('hex')}`)
				}
			>
				<Text style={styles.smallText}>
					Click Here To Copy DID To Clipboard
				</Text>
			</TouchableOpacity>
		</>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 14,
		fontWeight: 'bold',
		width: '80%',
		textAlign: 'center',
	},
	smallText: {
		fontSize: 10,
		fontWeight: 'bold',
	},
	bigText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	mnemonic: {
		height: '15%',
		width: '80%',
		borderRadius: 10,
		borderWidth: 0.5,
		borderColor: 'black',
		alignItems: 'center',
		textAlign: 'center',
		justifyContent: 'center',
	},
});

*/
