import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

// guideline size : Pixel 2 for android studio device
const guidelineBaseWidth = 411;
const guidelineBaseHeight = 683;

// based on viewport
const scale = (size: number) => (width / guidelineBaseWidth) * size;

// based on height
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

// factor control
const moderateScale = (size: number, factor = 0.5) =>
	size + (scale(size) - size) * factor;

// radius control to make responsive circle
const radiusScale = (circleWidth: number, circleHeight: number) =>
	Math.round(scale(circleWidth) + verticalScale(circleHeight)) / 2;

export { scale, verticalScale, moderateScale, radiusScale };
