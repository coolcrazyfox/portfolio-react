import React from 'react';
import s from './Footer.module.css';
import sCont from '../../src/common/styles/Container.module.css'



export function Footer(props: any) {
    return(
    <div className={s.Footer}>
        <div className={` ${sCont.container} ${s.footerContainer}`}>
            <h2 className={s.title}>Andrei M</h2>
            <div className={s.socialIcons}>
                <div className={s.socialIcon}></div>
                <div className={s.socialIcon}></div>
                <div className={s.socialIcon}></div>
                <div className={s.socialIcon}></div>
            </div>
            <span>2022 All rights reserved </span>

        </div>

    </div>
    );
}