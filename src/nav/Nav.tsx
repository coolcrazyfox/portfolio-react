import React from 'react';
import s from './Nav.module.css';

export function Nav(props: any) {
    return(
    <div className={s.Nav}>
        <a href="">Main</a>
        <a href="">Skills</a>
        <a href="">Projects</a>
        <a href="">Contacts</a>
    </div>
    );
}