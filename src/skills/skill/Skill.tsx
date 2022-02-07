import React from 'react';
import s from './Skill.module.css';

type SkillPropsType={
    title: string
    description: string
}
export function Skill(props: SkillPropsType) {
    return(
    <div className={s.Skill}>
        <div className={s.icon}></div>
        <h3>{props.title}</h3>
        <span className={s.description}>{props.description}</span>
    </div>
    );
}