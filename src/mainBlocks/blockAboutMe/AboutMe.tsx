import React, {useRef, useState} from "react";
import s from './AboutMe.module.scss';
import useSound from 'use-sound';
import img from '../../header/iconsImg/sound.gif'
// @ts-ignore
import sound from './Billie-Eilish-Khalid-Lovely.mp3';
// @ts-ignore
import Rotate from 'react-reveal/Fade'



const {blockTitle, container, aboutMeTitle, aboutMeText, aboutMePhoto, colorBlock, btnMusic} = s;


export const AboutMe = () => {
    const [play, { stop }] = useSound(sound);
    // const [playSound]  = useSound(sound);
    // let audio = new Audio(sound)
    //
    // const start = () => {
    //     audio.play()
    // }
    // const stopM = () => {
    //     audio.pause()
    // }

    // const ref=useRef(null)
    // const [click, setClick]=useState(false)
    // const handlerClick=()=>{
    //     setClick(!click)
    //     if(!click){
    //         ref.current.play()
    //     }else{
    //         ref.current.pause()
    //     }
    // }



    return (<div id={'AboutMe'} className={blockTitle}>

            <div className={container}>

                <div className={aboutMeTitle}>
                    <div className={colorBlock}></div>
                    <Rotate top left>
                    <div className={aboutMeText}>
                        <span>Hello</span>
                        <h1><span>I am </span> Andrei Malets</h1>
                        <p>Frontend Developer</p>
                        {/*<button className={btnMusic} onClick={() => play()} onDoubleClick={() => stop()}>*/}
                        {/*    /!*<img src={img}></img>*!/*/}
                        {/*</button>*/}
                        <img  className={btnMusic} onClick={() => play()} onDoubleClick={() => stop()} src={img} />


                        {/*<button className={btnMusic} onClick={start}>Play</button>*/}
                        {/*<button className={btnMusic} onClick={stopM}>stop</button>*/}
                        {/*<div onClick={()=>handlerClick()}><audio src={music} ref={ref} loop/></div> */}

                    </div>
                    <div className={aboutMePhoto}></div>
                    </Rotate>
                </div>
            </div>

        </div>
    )
}