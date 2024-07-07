import React from 'react'
import styled from 'styled-components'
import myColours from '../const/colors'
import mediaQuery from '../const/mediaQuery'

interface IProps {
    isLeft?: boolean,
    isDisable?: boolean,
    isSpecial?: boolean,
    handler: () => void,
}

const StyledControlBtn = styled.button<{ $isLeft?: boolean, $isDisable?: boolean }>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;


    background-color: white;

    width: 50px;
    height: 50px;
    border-radius:50%;
    border: 1px solid ${myColours.main};

    transform: rotate(${props => props.$isLeft ? '225deg' : '45deg'} );

    opacity: ${props => props.$isDisable ? 0.5 : 1};

    cursor: ${props => props.$isDisable ? '' : 'pointer'};

    &::before{
        content: '';
        position:absolute;
        left: 20px;
        top: 16px;
        width: 10px;
        height: 10px;
        border-left: 2px solid rgba(66, 86, 122, 1);
        border-bottom: 2px solid rgba(66, 86, 122, 1);
    }

    @media (width < ${mediaQuery.width.mobile}) {
        width: 25px;
        height: 25px;

        &::before{
            content: '';
            position:absolute;
            left: 8px;
            top: 7px;
            width: 6px;
            height: 6px;
        }
    }
`

const SpecialControlBtn = styled(StyledControlBtn)`
    width: 40px;
    height: 40px;
    border: none;
    box-shadow: 0px 0px 15px 0px rgba(56, 119, 238, 0.1);

    &::before{
        content: '';
        position:absolute;
        left: 16px;
        top: 16px;
        width: 6px;
        height: 6px;
        border-left: 2px solid rgba(56, 119, 238, 1);
        border-bottom: 2px solid rgba(56, 119, 238, 1);
    }
`


export const RoundBtn: React.FC<IProps> = ({ isDisable, isLeft: isLeft, isSpecial, handler }) => {
    return (
        <>
            {!isSpecial ?
                <StyledControlBtn
                    onClick={handler}
                    $isLeft={isLeft}
                    $isDisable={isDisable}
                    disabled={isDisable}
                >

                </StyledControlBtn>
                :
                <SpecialControlBtn
                    onClick={handler}
                    $isLeft={!isLeft}
                    $isDisable={isDisable}
                    disabled={isDisable}
                >

                </SpecialControlBtn>
            }
        </>
    )
}


