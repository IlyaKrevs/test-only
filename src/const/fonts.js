import { css } from "styled-components"

const basicBig = css`
font-family: PT Sans;
font-weight: 700;
`

const basicMedium = css`
font-family: PT Sans;
font-weight: 400;
`

const specialFont = css`
font-family: Bebas Neue;
font-weight: 400;
`

const myFonts = {
    basic: {
        big: basicBig,
        medium: basicMedium,
    },
    special: specialFont,
}


export default myFonts