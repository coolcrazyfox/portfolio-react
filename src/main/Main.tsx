import React from 'react';
import s from './Main.module.css';
import sCont from '../../src/common/styles/Container.module.css'

export function Main(props: any) {
    return(
    <div className={s.MainBlock}>
        <div className={sCont.container}>
            <div className={s.text}>
                <span>Hey</span>
                <h1>I am Andrei Malest</h1>
                <p>Frontend Developer</p>
            </div>
            <div className={s.photo}></div>
        </div>

    </div>
    );
}