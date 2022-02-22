import React from 'react';
import s from './Main.module.css';
import sCont from '../../src/common/styles/Container.module.css'
import { Parallax } from 'react-parallax';
import mainImage from './first1920x1080.jpg'

export function Main() {
    return(
        <Parallax  bgImage={mainImage}  strength={500}>
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

    );
}
