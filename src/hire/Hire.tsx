import React from 'react';
import s from './Hire.module.css';
import sCont from '../../src/common/styles/Container.module.css'


export function Hire(props: any) {
    return(
    <div className={s.HireBlock}>
        <div className={`${s.hireContainer} ${sCont.container} `}>
            <h2 className={s.title}>I am available for Freelance</h2>
            <button type={"submit"} className={s.hireBtn}>writing to me</button>
        </div>

    </div>
    );
}