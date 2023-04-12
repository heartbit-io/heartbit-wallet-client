import { Dimensions } from 'react-native';
const { width, height, fontScale } = Dimensions.get('window');

// guideline size : Pixel 2 for android studio device
const guidelineBaseWidth = 411;
const guidelineBaseHeight = 683;
const guidelineFontScale = 1;

// based on viewport
const scale = (size: number) => (width / guidelineBaseWidth) * size;

// based on height
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

// factor control
const moderateScale = (size: number, factor = 0.5) =>
	size + (scale(size) - size) * factor;

// scale font
const fontSizeScale = (size: number) => (guidelineFontScale / fontScale) * size;

export { scale, verticalScale, moderateScale, fontSizeScale };
