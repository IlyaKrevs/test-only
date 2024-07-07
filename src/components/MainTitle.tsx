import React from 'react'
import styled from 'styled-components'
import myFonts from '../const/fonts'
import myColours from '../const/colors'
import mediaQuery from '../const/mediaQuery'

const StyledTitle = styled.h1`
    position: relative;
    ${myFonts.basic.big}
    color: ${myColours.main};

    font-size: 56px;
    line-height: 67.2px;


    &::before {
        content: '';
        position: absolute;
        top: 7px;
        left: -80px;
        
        width: 5px;
        height: 120px;

        background: linear-gradient(180deg, #3877EE -5%, #EF5DA8 85%);
    }

    @media (width < ${mediaQuery.width.mobile}) {
        font-size: 20px;
        line-height: 24px;
        
        &::before{
            display:none;
        }
    }
`

export const MainTitle = () => {
    return (
        <StyledTitle>
            Исторические
            <br />
            даты
        </StyledTitle>
    )
}
