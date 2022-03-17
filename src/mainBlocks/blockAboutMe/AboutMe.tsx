import React from "react";
import s from './AboutMe.module.scss';
// @ts-ignore
import Rotate from 'react-reveal/Fade';
import Video from "../blockVideo/Video";
import {Header} from "../../header/header";

const {blockTitle, container, aboutMeTitle, aboutMeText, aboutMePhoto, colorBlock,liText, aText, h2Text, nameContainer, nameText, frText} = s;

export const AboutMe = () => {
    return (<div id={'AboutMe'} className={blockTitle}>


            <div className={container}>


                <div className={aboutMeTitle}>

                    <div className={colorBlock}></div>


                    <Rotate top left>
                    <ul className={aboutMeText}>
                        <h1>Hello. My name is</h1>

                        {/*<li className={liText}><h1>Hello.</h1><a className={aText}  data-text="&nbsp;My&nbsp;name&nbsp;is">&nbsp;My name is&nbsp;</a></li>*/}

                        {/*<div className={nameContainer}>*/}
                        {/*    <h2 className={nameText}>*/}
                        {/*        <span>my name is</span>*/}
                        {/*    </h2>*/}
                        {/*</div>*/}
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
                        <div className={frText}>
                            Frontend Developer
                        </div>
                        {/*<p>Frontend Developer</p>*/}
                        {/*<div >Frontend</div>*/}
                        {/*<div >*/}
                        {/*    <span>Developer</span>*/}
                        {/*</div>*/}


                        {/*<h2 className={h2Text}><span></span><span>Frontend Developer</span></h2>*/}
                    </ul>
                    <div className={aboutMePhoto}></div>
                    </Rotate>
                </div>
            </div>

        </div>
    )
}