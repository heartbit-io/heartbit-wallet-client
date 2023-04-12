const Bitcoin =
	'data:image/png;base64,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';
export default Bitcoin;
