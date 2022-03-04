import React, {useRef, useState} from "react";
import styled from 'styled-component';
import music from './GAYAZOV-BROTHER-Bolshe.mp3'
const Box= styled.div`
display: flex;
cursor: pointer;
color: palevioletred;
position: fixed;
left: 8rem;
top: 3rem;
z-index: 10;`
export const SoundBar = () =>{
    const ref=useRef(null)
    const [click, setClick]=useState(false)
    const handlerClick=()=>{
        setClick(!click)
        if(!click){
            ref.current.play()
        }else{
            ref.current.pause()
        }
    }
    return (
        <Box onClick={()=>handlerClick()}>
            {/*<Box></Box>*/}
                sound
            <audio src={music} ref={ref} loop/>
        </Box>

    )
}