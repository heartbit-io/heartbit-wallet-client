import React, { useState } from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { View } from 'react-native';

const AnswerLoading = () => {
	return (
		<SkeletonPlaceholder>
			<View style={{ flexDirection: 'row', marginBottom: 18 }}>
				<View style={{ width: 45, height: 45, borderRadius: 22.5 }} />
				<View style={{ flexDirection: 'column' }}>
					<View
						style={{
							width: 158,
							height: 20,
							marginLeft: 12,
							marginTop: 3,
						}}
					/>
					<View
						style={{
							width: 98,
							height: 16,
							marginLeft: 12,
							marginTop: 4,
						}}
					/>
				</View>
			</View>
			<View style={{ flexDirection: 'column' }}>
				<View
					style={{
						width: 338,
						height: 23,
						marginBottom: 16,
					}}
				/>
				<View
					style={{
						width: 127,
						height: 23,
						marginBottom: 16,
					}}
				/>
				<View
					style={{
						width: 274,
						height: 23,
					}}
				/>
			</View>
		</SkeletonPlaceholder>
	);
};

export default AnswerLoading;
