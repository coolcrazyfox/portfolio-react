import React from 'react';
import s from './Skills.module.css';
import sCont from '../../src/common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";


export function Skills(props: any) {
    return(
    <div className={s.SkillsBlock}>
        <div className={`${sCont.container} ${s.skillsContainer}`}>
            <Title text ={"skills"}/>
            <div className={s.skills}>
                <Skill title={"HTML"} description={'description'}/>
                <Skill title={"CSS"} description={'des'}/>
                <Skill title={"TS"} description={'ption'}/>
            </div>

        </div>

    </div>
    );
}