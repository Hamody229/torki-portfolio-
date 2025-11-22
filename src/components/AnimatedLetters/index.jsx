import React from 'react'
import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span aria-hidden="true">
            {strArray.map((char, i) => (
                <span key={`${i}-${char}`} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))}
        </span>
    )
}

export default React.memo(AnimatedLetters)
