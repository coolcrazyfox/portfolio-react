import React from 'react';
import s from './Main.module.css';
import sCont from '../../src/common/styles/Container.module.css'
import { Parallax } from 'react-parallax';
import mainImage from './rain_-_28236 (Original).gif'
import ReactPlayer from 'react-player'
import {Header} from "../header/Header";

export function Main() {
    return(
        <Parallax  bgImage={mainImage}  strength={500}>
            <Header/>
            <div className={s.MainBlock}>
                <div className={sCont.container}>
                    <div className={s.text}>
                        <span>Hello</span>
                        <h1>I am Andrei Malets</h1>
                        <p>Frontend Developer</p>
                    </div>
                    <div className={s.photo}></div>
                </div>

            </div>
        </Parallax>

        // <div>
        //     <video src="/frame.mp4" autoPlay loop muted>
        //         <h1>adventure awaits</h1>
        //     </video>
        // </div>
        // <ReactPlayer controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>

    );
}
