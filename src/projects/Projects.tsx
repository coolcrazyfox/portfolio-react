import React from 'react';
import s from './Projects.module.scss';
import sCont from '../../src/common/styles/Container.module.css'
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import j from './../assets/image/todolist.jpg';
import soc from './../assets/image/Social-network.jpg';


export function Projects(props: any) {
    const social ={
        backgroundImage: `url(${soc})`,
    }
    const todoList ={
        backgroundImage: `url(${j})`,
    }
    const socialText= 'Social networking is the use of internet-based social media platforms to stay connected with friends, family, or peers. The most popular social networking sites in the U.S. include Facebook, Instagram, and Twitter. ... Social media can help connect people and businesses and can help promote brand awareness.'
    const todoListText='To do lists come in all shapes and sizes. It always used to be something that you would write using pen and paper, but thanks to technology there’s an app that can come to the rescue. All it takes is just a few minutes every day to keep a to do list up to date. With a to do list, you can complete goals without wasting time trying to figure out priorities. Your productivity will increase, you won’t forget things, your time management will improve and you’ll be able to manage your tasks more effectively.'
    return(
    <div className={s.ProjectsBlock}>
        <div className={`${sCont.container} ${s.projectsContainer}`}>
            <Title text ={"projects"}/>
            <div className={s.projects}>
                <Project style={social} title={"Social network"} description={socialText}/>
                <Project style={todoList} title={"Todo list"} description={todoListText}/>
            </div>

        </div>

    </div>
    );
}