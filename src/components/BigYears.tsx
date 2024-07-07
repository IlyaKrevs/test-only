import React from 'react'
import styled from 'styled-components'
import myColours from '../const/colors'
import myFonts from '../const/fonts'
import { AnimatedNumbers } from './AnimatedNumbers'
import mediaQuery from '../const/mediaQuery'

const StyledYearsContainer = styled.div`
    display: flex;
    gap: 92px;

    padding: 96px 0 0 137px;
    ${myFonts.basic.big}


    font-size: 200px;
    line-height: 160px;
    letter-spacing: -0.02em;

    .left{
        color: ${myColours.bigText.left}
    }
    .right{
        color: ${myColours.bigText.right}
    }

    @media (width < ${mediaQuery.width.mobile}) {
        font-size: 56px;
        line-height: 72.46px;
        gap: 20px;
        padding: 56px 0 57px 0;
        border-bottom: 1px solid rgba(199, 205, 217, 1);
    }
`

interface IProps {
    years: {
        from: number,
        to: number,
    }
}

export const BigYears: React.FC<IProps> = ({ years }) => {
    return (
        <StyledYearsContainer>
            <AnimatedNumbers myClassName='left' value={years.from} />
            <AnimatedNumbers myClassName='right' value={years.to} />
        </StyledYearsContainer>
    )
}
