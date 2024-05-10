# Tints and Shades

## Introduction

Tints and Shades is a lightweight library for Node.js that generates tints and shades of colors.

## Installation

To use Tints and Shades in your project, you can install it via npm or yarn.

```bash
npm install tints-shades
```

or

```bash
yarn add tints-shades
```

## Usage

#### `generateTint`

This function generates a tint of the provided color.

```javascript
import { generateTint } from "tints-shades";

// You can provide the color as a hex string
const color = "#ff0000";
const tint = generateTint(color, 0.5);
console.log(tint); // #ff8080

// You can also provide the color as an RGB array
const color = [255, 0, 0];
const tint = generateTint(color, 0.5);
console.log(tint); // #ff8080
```

#### `generateShade`

This function generates a shade of the provided color.

```javascript
import { generateShade } from "tints-shades";

// You can provide the color as a hex string
const color = "#ff0000";
const shade = generateShade(color, 0.5);
console.log(shade); // #800000

// You can also provide the color as an RGB array
const color = [255, 0, 0];
const shade = generateShade(color, 0.5);
console.log(shade); // #800000
```

#### `generateTints`

This function generates multiple tints of the provided color.

```javascript
import { generateTints } from "tints-shades";

// You can provide the color as a hex string
const color = "#5a84b8";
const tints = generateTints(color, 0.25);
console.log(tints);
/*
 *  [
 *      { hex: "#83a3ca", percent: 0.25, rgb: [131, 163, 202]   },
 *      { hex: "#adc2dc", percent: 0.5, rgb: [173, 194, 220]    },
 *      { hex: "#d6e0ed", percent: 0.75, rgb: [214, 224, 237]   },
 *      { hex: "#ffffff", percent: 1, rgb: [255, 255, 255]      }
 *  ]
 */

// You can also provide the color as an RGB array
const color = [90, 132, 184];
const tints = generateTints(color, 0.25);
console.log(tints);
/*
 *  [
 *      { hex: "#83a3ca", percent: 0.25, rgb: [131, 163, 202]   },
 *      { hex: "#adc2dc", percent: 0.5, rgb: [173, 194, 220]    },
 *      { hex: "#d6e0ed", percent: 0.75, rgb: [214, 224, 237]   },
 *      { hex: "#ffffff", percent: 1, rgb: [255, 255, 255]      }
 *  ]
 */
```

#### `generateShades`

This function generates multiple shades of the provided color.

```javascript
import { generateShades } from "tints-shades";

// You can provide the color as a hex string
const color = "#ff0000";
const shades = generateShades(color, 0.3333);
console.log(shades);
/*
 * [
 *      { hex: "#aa0000", percent: 0.3333, rgb: [170, 0, 0]     },
 *      { hex: "#550000", percent: 0.6666, rgb: [85, 0, 0]      },
 *      { hex: "#000000", percent: 0.9999, rgb: [0, 0, 0]       }
 * ]
 */

// You can also provide the color as an RGB array
const color = [255, 0, 0];
const shades = generateShades(color, 0.3333);
console.log(shades);
/*
 * [
 *      { hex: "#aa0000", percent: 0.3333, rgb: [170, 0, 0]     },
 *      { hex: "#550000", percent: 0.6666, rgb: [85, 0, 0]      },
 *      { hex: "#000000", percent: 0.9999, rgb: [0, 0, 0]       }
 * ]
 */
```

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
