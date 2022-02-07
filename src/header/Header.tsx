import React from 'react';
import s from './Header.module.css';
import {Nav} from "../nav/Nav";

export function Header(props: any) {
    return(
    <div className={s.Header}>
        <Nav/>
    </div>
    );
}