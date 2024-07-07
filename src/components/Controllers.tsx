import React from 'react'
import styled from 'styled-components'
import myColours from '../const/colors'
import myFonts from '../const/fonts'
import { RoundBtn } from './RoundBtn'
import mediaQuery from '../const/mediaQuery'

const StyledControl = styled.div`
    padding-top: 137px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    .numbers {
        ${myFonts.basic.medium}
        color: ${myColours.main};

        font-size: 14px;
        line-height: 18.12px;
    }

    .btnsContainer {
        display: flex;
        gap: 20px;
    }

    @media (width < ${mediaQuery.width.mobile}) {
        padding: 0;
        margin-top:auto;
        order: 1;
        gap: 10px;
        .numbers {
            font-size: 14px;
            line-height: 18.12px;
        }

        .btnsContainer {
            gap: 8px;
        }
    }
`


interface IProps {
    prev: () => void,
    next: () => void,
    count: {
        current: number,
        max: number,
    }
}

export const Controllers: React.FC<IProps> = ({ prev, next, count }) => {

    const prevStatus = count.current === 1
    const nextStatus = count.current === count.max

    return (
        <StyledControl>
            <div className="numbers">
                {count.current}/{count.max}
            </div>
            <div className="btnsContainer">
                <RoundBtn
                    handler={prev}
                    isDisable={prevStatus}
                />
                <RoundBtn
                    handler={next}
                    isLeft={true}
                    isDisable={nextStatus} />
            </div>
        </StyledControl>
    )
}

