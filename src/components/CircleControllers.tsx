import React from 'react'
import styled, { css } from 'styled-components'
import myColours from '../const/colors'
import myFonts from '../const/fonts'
import mediaQuery from '../const/mediaQuery'


// CONTAINER
const StyledCircleControllers = styled.div`
    z-index: 10;
    position: absolute;
    top: calc(45% - 265px);
    left: calc(50% - 265px);

    .circleItemsContainer{
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;

        width: 530px;
        height: 530px;
    
        border-radius: 50%;
        border: 1px solid ${myColours.borders};
    }

    @media (width < ${mediaQuery.width.mobile}) {
        top: calc(100% - 32px);
        left: 0;
        right: 0;
        .circleItemsContainer {

            gap: 10px;
            width: auto;
            border: none;
            height: auto;
        }
    }
`





interface ICircleItem {
    $count: number,
    $corner: number,
    $extraOffset: number,
    $isChosen: boolean,
    $titleContent: string,
}

// HOVER STATE CSS FRAGMENT
const hoverStyle = css<ICircleItem>`
width: 56px;
height: 56px;
border: 1px solid ${myColours.main};
border-radius: 50%;
background-color: white;

top: calc(50% - 28px);
left: calc(50% - 28px);

    &::before {
    content: '${props => props.$count}';

    background-color: white;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    ${myFonts.basic.medium}
    line-height: 30px;
    font-size: 20px;

    color: ${myColours.main};

    transform: rotate(${props => (1 * props.$count * props.$corner) - props.$extraOffset}deg);
    }

    &::after{
        content: '${props => props.$isChosen ? props.$titleContent : ''}';
        transform: rotate(${props => (1 * props.$count * props.$corner) - props.$extraOffset}deg);

        position: absolute;
        top: 95px;
        left: 30px;
        ${myFonts.basic.big}
        font-size: 20px;
        line-height: 30px;
        color: ${myColours.main};
    }

    @media (width < ${mediaQuery.width.mobile}) {
        
        transform: none;
        top:0;
        left:0;
        &::before{
            display:none;
        }
        &::after{
            display:none;
        }
    }
`

// DEFAULT STATE
const StyledCircleItem = styled.div<ICircleItem>`
    width: 20px;
    height: 20px;
    border-radius: 50%;

    transition-duration: 0.3s;

    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 10px);

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transform: rotate(${props => (-1 * props.$count * props.$corner) + props.$extraOffset}deg) translateX(265px);

    &::before {
        content: '';
        width: 4px;
        height: 4px;
        border: 1px solid ${myColours.main};
        background-color: ${myColours.main};
        border-radius: 50%;
    }

    &:hover { 
        ${hoverStyle}
    }

    ${props => props.$isChosen ? hoverStyle : ''}

    @media (width < ${mediaQuery.width.mobile}) {
        top:0;
        left:0;
        transform: none;
        width: 6px;
        height: 6px;
        background-color: ${props => props.$isChosen ? 'rgba(66, 86, 122, 1)' : 'rgba(66, 86, 122, 0.5)'};
        position: relative;
        display:flex;
        gap: 10px;

        &::before{
            display:none;
        }
        &::after{
            display:none;
        }

        &:hover{
            width: 6px;
            height: 6px;
            background-color: rgba(66, 86, 122, 1);
        }
    }
`





interface IProps {
    changeHandler: (value: number) => void,
    maxLength: number,
    currentIndex: number,
    mainTitle: string,
}

export const CircleControllers: React.FC<IProps> = ({ changeHandler, maxLength, currentIndex, mainTitle }) => {

    const corner = 360 / maxLength

    const extraOffset = currentIndex * corner;

    const content = []

    for (let i = 0; i < maxLength; i++) {

        let value = i + 1

        content.push(
            <StyledCircleItem
                key={value}
                $count={value}
                $corner={corner}
                $extraOffset={extraOffset}
                $isChosen={i === currentIndex}
                $titleContent={mainTitle}
                onClick={() => changeHandler(i)}
            >
            </StyledCircleItem>
        )

    }

    return (
        <StyledCircleControllers>
            <div className="circleItemsContainer">
                {content}
            </div>
        </StyledCircleControllers>
    )
}
