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
    h1Text
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
                        <h1 className={h1Text}>
                            <span>m</span>
                            <span>y&nbsp;&nbsp;</span>
                            <span>w</span>
                            <span>o</span>
                            <span>r</span>
                            <span>k</span>
                            <span>s</span>
                        </h1>
                        {/*<span>My</span> <p>works</p>*/}
                    </div>
                    <div className={MyWorksMain}>
                        <WorksBox href={'https://coolcrazyfox.github.io/social_network-v/#/'} styleImg={socialPrjImg} descriptions={'Look at my social network'}
                                  name={'social network'}/>
                        {/*https://coolcrazyfox.github.io/counter-v2/*/}
                        {/*https://coolcrazyfox.github.io/Social-network/*/}
                        {/*https://coolcrazyfox.github.io/Todolist/*/}
                        <WorksBox href={'https://coolcrazyfox.github.io/my-counter-v/'} styleImg={todolistPrjImg} descriptions={'Look at my todolist'}
                                  name={'todolist'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/social_network-v/#/'} styleImg={socialPrjImg} descriptions={'Look at my social network'}
                                  name={'social network'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/my-counter-v/'} styleImg={todolistPrjImg} descriptions={'Look at my todolist'}
                                  name={'todolist'}/>

                    </div>
                </div>
            </div>
        </Rotate>
        </div>
    )
}