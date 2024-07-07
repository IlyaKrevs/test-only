import React, { useState } from 'react'
import { MainContainer } from '../layout-components/MainContainer'
import { MainTitle } from '../components/MainTitle'
import { BigYears } from '../components/BigYears'
import { Controllers } from '../components/Controllers'
import { Slider } from '../components/Slider'
import { CircleControllers } from '../components/CircleControllers'


interface IProps {
    data: {
        id: number,
        title: string,
        years: {
            from: number,
            to: number,
        },
        sliderItems: {
            id: number,
            title: string,
            text: string,
        }[]
    }[]
}

export const ShowCard: React.FC<IProps> = ({ data }) => {

    const [cardIndex, setCardIndex] = useState<number>(0)

    const currentCard = data[cardIndex]


    function nextHandler() {
        if (cardIndex < data.length - 1) {
            setCardIndex(cardIndex + 1)
        }
    }

    function prevHandler() {
        if (cardIndex > 0) {
            setCardIndex(cardIndex - 1)
        }
    }

    function setValueHandler(value: number) {
        setCardIndex(value)
    }

    const counter = {
        current: cardIndex + 1,
        max: data.length
    }

    return (
        <MainContainer >

            <MainTitle />

            <BigYears years={currentCard.years} />

            <Controllers prev={prevHandler} next={nextHandler} count={counter} />

            <Slider sliderItems={currentCard.sliderItems} />

            <CircleControllers
                changeHandler={setValueHandler}
                maxLength={data.length}
                currentIndex={cardIndex}
                mainTitle={currentCard.title}
            />

        </MainContainer>
    )
}

