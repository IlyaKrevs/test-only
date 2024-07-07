import React, { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { TextPlugin } from 'gsap/all'

gsap.registerPlugin(useGSAP, TextPlugin)

interface IProps {
    myClassName: 'left' | 'right',
    value: number,
}


export const AnimatedNumbers: React.FC<IProps> = ({ myClassName, value }) => {

    const valueRef = useRef<number>(value)

    const container = useRef(null)

    useGSAP(() => {

        const countFrames = Math.abs(value - valueRef.current)
        const basicDuration = 1;
        const timeForOneFrame = isFinite(basicDuration / countFrames) ? basicDuration / countFrames : 0

        let tweenCongif: GSAPTweenVars = {
            duration: timeForOneFrame,
        }

        const tl = gsap.timeline()


        for (let i = 0; i < countFrames; i++) {

            let isAscendio = valueRef.current < value
            let newValue = 0;

            if (isAscendio) {
                newValue = valueRef.current + (i + 1)
                tl.to(container.current, { ...tweenCongif, text: newValue + '' })
            } else {
                newValue = valueRef.current - (i + 1)
                tl.to(container.current, { ...tweenCongif, text: newValue + '' })
            }
        }

        valueRef.current = value

    }, { scope: container, dependencies: [value] })


    return (
        <span className={myClassName} ref={container}>
            {value}
        </span>
    )
}
