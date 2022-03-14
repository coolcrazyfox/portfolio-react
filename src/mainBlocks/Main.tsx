import s from './Main.module.css';
import {AboutMe} from './blockAboutMe/AboutMe';
import {Skills} from './BlockSkills/Skills';
import {MyWorks} from './MyWorksBlock/MyWorks';
import {Telework} from './teleworkBlock/Telework';
import {Contacts} from './Contacts/Contacts';
import {Header} from "../header/header";
import React from "react";


export const Main = () => {
    return (<>
            <Header/>
            <AboutMe/>
            <Skills/>
            <MyWorks/>
            <Telework/>
            <Contacts/>
        </>
    )
}