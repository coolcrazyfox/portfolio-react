import React from 'react';
import s from './Ttle.module.scss';



export function Title(props: any) {
    return (
        <div className={s.title}>
            <h2>{props.text}</h2>
        </div>
    );
}