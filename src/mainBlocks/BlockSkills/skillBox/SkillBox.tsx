import s from './SkillBox.module.scss';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const {
    skillItem,
    skillItemTitle,
    skillItemTitleImg,
    circleBar

} = s;

type skillBoxPropsType = {
    skill: string
    skillDescr: string
    skillImg: string
    progress: number
}

const ProgressBarStyle={
    root:'white',
    path: 'red',
    trail: "gray",
    text : 'yellow',
    background: 'green'
}



export const SkillBox = (pr: skillBoxPropsType) => {

    const {skill, skillDescr, skillImg, progress} = pr;
    return (<div className={skillItem}>
            <div className={skillItemTitle}>
                <div className={skillItemTitleImg}>
                    <img src={skillImg} alt={skillDescr}/>
                </div>
                <p>{skill}</p>
                <CircularProgressbar styles={buildStyles({
                    textSize: '15px',
                    pathTransitionDuration: 0.3,
                    pathColor: `#a9233c`,
                    textColor: '#fff',
                    trailColor: '#f1f0ec',
                })} className={circleBar} value={progress} text={`${progress}%`} strokeWidth={5}/>
            </div>
        </div>

    )
}