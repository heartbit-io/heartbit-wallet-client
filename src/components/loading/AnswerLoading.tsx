import React, { useState } from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Dimensions, View } from 'react-native';

const AnswerLoading = () => {
	return (
		<SkeletonPlaceholder>
			<View style={{ marginBottom: 26 }}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginBottom: 15,
					}}
				>
					<View
						style={{
							width: 45,
							height: 45,
							borderRadius: 100,
							marginRight: 12,
						}}
					/>
					<View>
						<View
							style={{
								width: Dimensions.get('window').width / 2,
								height: 18,
								borderRadius: 3,
							}}
						/>
						<View
							style={{
								width: Dimensions.get('window').width / 3,
								height: 14,
								marginTop: 4,
								borderRadius: 3,
							}}
						/>
					</View>
				</View>
				<View
					style={{
						width: Dimensions.get('window').width - 60,
						height: 20,
						marginBottom: 4,
						borderRadius: 3,
					}}
				/>
				<View
					style={{
						width: Dimensions.get('window').width - 90,
						height: 20,
						marginBottom: 4,
						borderRadius: 3,
					}}
				/>
				<View
					style={{
						width: Dimensions.get('window').width - 120,
						height: 20,
						borderRadius: 3,
					}}
				/>
			</View>
		</SkeletonPlaceholder>
	);
};

export default AnswerLoading;
