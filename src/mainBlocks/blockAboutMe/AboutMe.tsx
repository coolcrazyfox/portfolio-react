import React from "react";
import s from './AboutMe.module.scss';
// @ts-ignore
import Rotate from 'react-reveal/Fade';
import Video from "../blockVideo/Video";
import {Header} from "../../header/header";

const {blockTitle, container, aboutMeTitle, aboutMeText, aboutMePhoto, colorBlock,liText, aText, h2Text, nameContainer, nameText} = s;

export const AboutMe = () => {
    return (<div id={'AboutMe'} className={blockTitle}>


            <div className={container}>


                <div className={aboutMeTitle}>

                    <div className={colorBlock}></div>


                    <Rotate top left>
                    <ul className={aboutMeText}>
                        <h1>Hello.</h1>
                        {/*<span>My name is</span>*/}
                        {/*<li className={liText}><a className={aText}  data-text="&nbsp;I'm&nbsp;Andrei&nbsp;Malets">&nbsp;I'm Andrei Malets&nbsp;</a></li>*/}

                        <div className={nameContainer}>
                            <h2 className={nameText}>
                                <span>A</span>
                                <span>n</span>
                                <span>d</span>
                                <span>r</span>
                                <span>e</span>
                                <span>i&nbsp;&nbsp;</span>
                                <span>M</span>
                                <span>a</span>
                                <span>l</span>
                                <span>e</span>
                                <span>t</span>
                                <span>s</span>
                            </h2>
                        </div>
                        <p>Frontend Developer</p>


                        {/*<h2 className={h2Text}><span></span><span>Frontend Developer</span></h2>*/}
                    </ul>
                    <div className={aboutMePhoto}></div>
                    </Rotate>
                </div>
            </div>

        </div>
    )
}