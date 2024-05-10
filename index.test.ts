import { generateShade, generateShades, generateTint, generateTints } from "./dist";

describe("generateTint", () => {
	it("should generate a tint of a RGB color", () => {
		expect(generateTint([255, 0, 0], 0.5)).toEqual({
			hex: "#ff8080",
			percent: 0.5,
			rgb: [255, 128, 128],
		});
	});

	it("should generate a tint of a hex color", () => {
		expect(generateTint("#0e7afe", 0.05)).toEqual({
			hex: "#1a81fe",
			percent: 0.05,
			rgb: [26, 129, 254],
		});
	});

	it("should generate a tint of white", () => {
		expect(generateTint("#ffffff", 0.5)).toEqual({
			hex: "#ffffff",
			percent: 0.5,
			rgb: [255, 255, 255],
		});
	});

	it("should generate a tint of black", () => {
		expect(generateTint("#000000", 0.1)).toEqual({
			hex: "#1a1a1a",
			percent: 0.1,
			rgb: [26, 26, 26],
		});
	});
});

describe("generateShade", () => {
	it("should generate a shade of a RGB color", () => {
		expect(generateShade([255, 0, 0], 0.5)).toEqual({
			hex: "#800000",
			percent: 0.5,
			rgb: [128, 0, 0],
		});
	});

	it("should generate a shade of a hex color", () => {
		expect(generateShade("#0e7afe", 0.05)).toEqual({
			hex: "#0d74f1",
			percent: 0.05,
			rgb: [13, 116, 241],
		});
	});

	it("should generate a shade of white", () => {
		expect(generateShade("#ffffff", 0.1)).toEqual({
			hex: "#e6e6e6",
			percent: 0.1,
			rgb: [230, 230, 230],
		});
	});

	it("should generate a shade of black", () => {
		expect(generateShade("#000000", 0.5)).toEqual({
			hex: "#000000",
			percent: 0.5,
			rgb: [0, 0, 0],
		});
	});
});

describe("generateTints", () => {
	it("should generate tints of a RGB color", () => {
		expect(generateTints([90, 132, 184], 0.25)).toEqual([
			{
				hex: "#83a3ca",
				percent: 0.25,
				rgb: [131, 163, 202],
			},
			{
				hex: "#adc2dc",
				percent: 0.5,
				rgb: [173, 194, 220],
			},
			{
				hex: "#d6e0ed",
				percent: 0.75,
				rgb: [214, 224, 237],
			},
			{
				hex: "#ffffff",
				percent: 1,
				rgb: [255, 255, 255],
			},
		]);
	});

	it("should generate tints of a hex color", () => {
		expect(generateTints("#5a84b8", 0.25)).toEqual([
			{
				hex: "#83a3ca",
				percent: 0.25,
				rgb: [131, 163, 202],
			},
			{
				hex: "#adc2dc",
				percent: 0.5,
				rgb: [173, 194, 220],
			},
			{
				hex: "#d6e0ed",
				percent: 0.75,
				rgb: [214, 224, 237],
			},
			{
				hex: "#ffffff",
				percent: 1,
				rgb: [255, 255, 255],
			},
		]);
	});
});

describe("generateShades", () => {
	it("should generate shades of a RGB color", () => {
		expect(generateShades([255, 0, 0], 0.3333)).toEqual([
			{
				hex: "#aa0000",
				percent: 0.3333,
				rgb: [170, 0, 0],
			},
			{
				hex: "#550000",
				percent: 0.6666,
				rgb: [85, 0, 0],
			},
			{
				hex: "#000000",
				percent: 0.9999,
				rgb: [0, 0, 0],
			},
		]);
	});

	it("should generate shades of a hex color", () => {
		expect(generateShades("#ff0000", 0.3333)).toEqual([
			{
				hex: "#aa0000",
				percent: 0.3333,
				rgb: [170, 0, 0],
			},
			{
				hex: "#550000",
				percent: 0.6666,
				rgb: [85, 0, 0],
			},
			{
				hex: "#000000",
				percent: 0.9999,
				rgb: [0, 0, 0],
			},
		]);
	});
});
