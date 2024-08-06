import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

export const COLORS = {
    primary: '#242760',
    secondary: '#544C4C',
    white: '#FFFFFF',
    black: '#000000',
    gray: 'rgba(36, 39, 96, 0.05)',
    secondaryGray: 'rgba(84, 76, 76, 0.14)',
    mauve: '#E73873',
    vert: '#066939',
    vert2: '#009B50',
    marron: '#643729',
    beige: '#E0BAA3',
    vertCouv: '#657514',
    secondaryWhite: "#F7F7FC",
    gray2: "#CCCCCC",
    vertPastel: '#CDF2D8',
    vertsecondary: '#B2E0A3',
    pink: '#E93773'
}

export const SIZES = {
    // global SIZES
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,
    padding3: 16,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 20,
    h3: 18,
    h4: 16,
    body1: 30,
    body2: 20,
    body3: 18,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height,
}

export const FONTS = {
    largeTitle: {
        fontFamily: 'black',
        fontSize: SIZES.largeTitle,
        lineHeight: 55,
    },
    h1: { fontFamily: 'bold', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'bold', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'bold', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'bold', fontSize: SIZES.h4, lineHeight: 20 },
    body1: { fontFamily: 'regular', fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: 'regular', fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: 'regular', fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: 'regular', fontSize: SIZES.body4, lineHeight: 20 },
}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme