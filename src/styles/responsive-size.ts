import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

// guideline size : Pixel 2 for android studio device
const guidelineBaseWidth = 411;
const guidelineBaseHeight = 683;

// based on viewport
const scale = size => (width / guidelineBaseWidth) * size;

// based on height
const verticalScale = size => (height / guidelineBaseHeight) * size;

// factor control
const moderateScale = (size, factor = 0.5) =>
	size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };
