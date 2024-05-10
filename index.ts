// tints-and-shades

type Color = {
	rgb: number[];
	hex: string;
	percent: number;
};

function numberToHex(value: number) {
	let hex = value.toString(16);
	return hex.padStart(2, "0");
}

function getHex(rgb: number[]) {
	return `#${rgb.map(numberToHex).join("")}`;
}

function getRGB(hex: string) {
	const fullHex = hex
		.replace(/^#?([0-9a-f]{6}|[0-9a-f]{3})$/i, (_, hex) => (hex.length === 3 ? hex.repeat(2) : hex))
		.substring(0, 6);

	return [
		parseInt(fullHex.substring(0, 2), 16),
		parseInt(fullHex.substring(2, 4), 16),
		parseInt(fullHex.substring(4, 6), 16),
	];
}

function generateVariant(color: string | number[], percent: number, isShade: boolean): Color {
	const variant = isShade
		? (value: number) => Math.round(value * (1 - percent))
		: (value: number) => Math.round(value + (255 - value) * percent);

	if (typeof color === "string") {
		color = getRGB(color);
	}

	const generatedVariant = color.map(variant);

	return {
		rgb: generatedVariant,
		hex: getHex(generatedVariant),
		percent,
	};
}

function generateVariants(color: string | number[], stepSize: number, isShade: boolean): Color[] {
	color = typeof color === "string" ? getRGB(color) : color;
	// for example if step is 0.05, create an array of 20 elements
	const steps = 1 / stepSize;
	return Array.from({ length: steps }, (_, i) => generateVariant(color, (i + 1) / steps, isShade));
}

function generateTint(color: string | number[], percent: number): Color {
	return generateVariant(color, percent, false);
}

function generateShade(color: string | number[], percent: number): Color {
	return generateVariant(color, percent, true);
}

function generateTints(color: string | number[], stepSize: number): Color[] {
	return generateVariants(color, stepSize, false);
}

function generateShades(color: string | number[], stepSize: number): Color[] {
	return generateVariants(color, stepSize, true);
}

export { generateShade, generateShades, generateTint, generateTints };
