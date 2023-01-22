
import React from 'react'

export default function profile(props) {
    return (
        <div className='yellow'>
            <center>
            <h1>hello my name is {props.infos}</h1>
            <h1>I live in {props.adress}</h1>
            <p>Im a med students</p>
            </center>
        </div>
    )
}