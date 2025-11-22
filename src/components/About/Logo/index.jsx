import React from 'react'
import './index.scss'

const Logo = () => {
    return (
        <div className="logo-container">
            <div className="cubespinner">
                <div className="face1">
                    <svg viewBox="0 0 24 24" className="cube-icon">
                        <path fill="currentColor" d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4M11,7V13H13V15H15V13H17V11H15V9H13V7H11M7,11H9V17H7V11Z" />
                    </svg>
                    <p>Quartus</p>
                </div>

                <div className="face2">
                    <svg viewBox="0 0 24 24" className="cube-icon">
                        <path fill="currentColor" d="M2,13H6V5H8V19H12V9H14V15H18V10H20V13H22V11H20V8H18V13H14V11H12V21H8V7H6V11H2V13Z" />
                    </svg>
                    <p>ModelSim</p>
                </div>

                <div className="face3">
                    <svg viewBox="0 0 24 24" className="cube-icon">
                        <path fill="currentColor" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M7,7V9H9V11H7V13H9V15H7V17H9V15H11V17H13V15H15V17H17V15H15V13H17V11H15V9H17V7H15V9H13V7H11V9H9V7H7Z" />
                    </svg>
                    <p>Vivado</p>
                </div>

                <div className="face4">
                    <svg viewBox="0 0 24 24" className="cube-icon">
                        <path fill="currentColor" d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" />
                    </svg>
                    <p>MATLAB</p>
                </div>

                <div className="face5">
                    <svg viewBox="0 0 24 24" className="cube-icon">
                        <path fill="currentColor" d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.18,11.37 22.18,12.63 21.4,13.41L13.41,21.4C12.63,22.18 11.37,22.18 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z" />
                    </svg>
                    <p>Git</p>
                </div>

                <div className="face6">
                    <svg viewBox="0 0 24 24" className="cube-icon">
                        <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
                    </svg>
                    <p>LaTeX</p>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Logo)