import s from './Skills.module.scss';
import {SkillBox} from './skillBox/SkillBox';
import reactImg from './skillBox/skillImgIcon/REACT.png';
import JSImg from './skillBox/skillImgIcon/javascript.gif';
import HTMLImg from './skillBox/skillImgIcon/html-5-icon.png';
import CSSImg from './skillBox/skillImgIcon/css3.png';
import reduxImg from './skillBox/skillImgIcon/REDUX.png';
import typescript from './skillBox/skillImgIcon/typescript.svg';
import PythonImg from './skillBox/skillImgIcon/python.png';
import DjImg from './skillBox/skillImgIcon/Django.png';
import FlImg from './skillBox/skillImgIcon/flask.png';
import SassImg from './skillBox/skillImgIcon/sass.png';


// @ts-ignore
import Rotate from 'react-reveal/Fade'


const {skillsTitle, blockTitle, skillsMain, container,skillsBlock} = s;


export const Skills = () => {
    return (<div id={'MySkills'} className={blockTitle}>
            <Rotate top right>
            <div className={container}>
                <div className={skillsBlock}>
                <div className={skillsTitle}>
                    <span>My</span> <p>skills</p>
                </div>
                <div className={skillsMain}>
                    <SkillBox skill={'React'} skillDescr={''} skillImg={reactImg} progress={75}/>
                    <SkillBox skill={'Redux'} skillDescr={''} skillImg={reduxImg} progress={70}/>
                    <SkillBox skill={'TypeScript'} skillDescr={''} skillImg={typescript} progress={75}/>
                    <SkillBox skill={'Native JS'} skillDescr={''} skillImg={JSImg} progress={70}/>
                    <SkillBox skill={'HTML 5'} skillDescr={''} skillImg={HTMLImg} progress={84}/>
                    <SkillBox skill={'CSS 3'} skillDescr={''} skillImg={CSSImg} progress={82}/>
                    <SkillBox skill={'Python'} skillDescr={''} skillImg={PythonImg} progress={70}/>
                    <SkillBox skill={'Django'} skillDescr={''} skillImg={DjImg} progress={40}/>
                    <SkillBox skill={'Flask'} skillDescr={''} skillImg={FlImg} progress={35}/>
                    <SkillBox skill={'SASS'} skillDescr={''} skillImg={SassImg} progress={35}/>

                </div>
                </div>
            </div>
            </Rotate>
        </div>
    )
}