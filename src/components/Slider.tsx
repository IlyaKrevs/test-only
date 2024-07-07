import React, { useEffect } from 'react'
import styled from 'styled-components'
import myColours from '../const/colors'
import myFonts from '../const/fonts'
import { RoundBtn } from './RoundBtn'
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from "swiper/types/swiper-options"
import { Navigation, FreeMode } from 'swiper/modules'
import 'swiper/css/bundle';
import mediaQuery from '../const/mediaQuery'

const StyledSliderContainer = styled.div`
    position: relative;
    padding-top: 56px;

    .prevBtnContainer{
        position: absolute;
        top: 50%;
        left: -60px;
    }
    .nextBtnContainer{
        position: absolute;
        top: 50%;
        right: -60px;
    }
    
    .hiddenClass {
        visibility: hidden;
    }

    @media (width < ${mediaQuery.width.mobile}) {
       padding: 20px 0 0 0;

       .prevBtnContainer{
            display: none;
       }
       .nextBtnContainer{
            display: none;
       }
    }
`

const StyledSliderItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    height: 135px;

    min-width: 320px;
    max-width: 400px;

    .itemTitle {
        color: ${myColours.second};
        ${myFonts.special};

        font-size: 25px;
        line-height: 30px;
    }

    .itemText {
        color: ${myColours.main};
        ${myFonts.basic.medium};

        font-size: 20px;
        line-height: 30px;
    }

    @media (width < ${mediaQuery.width.mobile}) {
        max-width: 140px;
        height: auto;
        .itemTitle {
            font-size: 16px;
            line-height: 19.2px;
        }

        .itemText {
            font-size: 14px;
            line-height: 20.3px;
        }
    }
`

interface IProps {
    sliderItems: {
        id: number,
        title: string,
        text: string,
    }[]
}

export const Slider: React.FC<IProps> = ({ sliderItems }) => {

    const swiperOptions: SwiperOptions = {
        modules: [Navigation, FreeMode,],
        spaceBetween: 80,
        slidesPerView: 3,
        navigation: {
            prevEl: '.prevBtnContainer',
            nextEl: '.nextBtnContainer',
            disabledClass: 'hiddenClass',
        },
        freeMode: {
            enabled: true,
        },
    }

    const content = sliderItems.map(item => {
        return (
            <SwiperSlide key={item.id}>
                <StyledSliderItem >
                    <div className="itemTitle">
                        {item.title}
                    </div>
                    <div className="itemText">
                        {item.text}
                    </div>
                </StyledSliderItem>
            </SwiperSlide>
        )
    })

    return (
        <>
            <StyledSliderContainer>
                <div className="prevBtnContainer">

                    <RoundBtn
                        handler={() => false}
                        isSpecial={true}
                        isLeft={true} />
                </div>
                <div className="nextBtnContainer">
                    <RoundBtn
                        handler={() => false}
                        isSpecial={true} />
                </div>

                <Swiper {...swiperOptions}>
                    {content}
                </Swiper>
            </StyledSliderContainer >
        </>
    )
}
