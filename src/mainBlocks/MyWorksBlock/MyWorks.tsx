import s from './MyWorks.module.scss';
import {WorksBox} from './WorksBox/WorksBox';
import socialNet from './imgWorks/social.gif';
import tList from './imgWorks/todolist.gif';
// @ts-ignore
import Rotate from 'react-reveal/Fade'

const {
    MyWorksTitle,
    blockTitle,
    container,
    MyWorksBlock,
    MyWorksMain,
} = s;


export const MyWorks = () => {


    const socialPrjImg = {
        backgroundImage: `url(${socialNet})`
    }
    const todolistPrjImg = {
        backgroundImage: `url(${tList})`
    }
    return (<div id={'MyWorksBlock'} className={blockTitle}>
        <Rotate top left>
            <div className={container}>
                <div className={MyWorksBlock}>
                    <div className={MyWorksTitle}>
                        <span>My</span> <p>works</p>
                    </div>
                    <div className={MyWorksMain}>
                        <WorksBox href={'https://coolcrazyfox.github.io/social_network-v/#/'} styleImg={socialPrjImg} descriptions={'Look at my social network'}
                                  name={'social network'}/>
                        {/*https://coolcrazyfox.github.io/counter-v2/*/}
                        {/*https://coolcrazyfox.github.io/Social-network/*/}
                        {/*https://coolcrazyfox.github.io/Todolist/*/}
                        <WorksBox href={'https://coolcrazyfox.github.io/my-counter-v/'} styleImg={todolistPrjImg} descriptions={'Look at my todolist'}
                                  name={'todolist'}/>


                    </div>
                </div>
            </div>
        </Rotate>
        </div>
    )
}