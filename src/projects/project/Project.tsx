import React from 'react';
import s from './Project.module.scss';

// type ProjectsPropsType={
//     title: string
//     description: string
//     style:string
// }
export function Project(props: any) {
    return(
    <div className={s.Project}>
        <div className={s.image} style={props.style}>
            <a  className={s.viewBtn}>Link</a>
        </div>
        <div className={s.projectInfo}>
            <h3 className={s.projectTitle}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>

    </div>
    );
}