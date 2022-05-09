import s from './MyWorks.module.scss';
import {WorksBox} from './WorksBox/WorksBox';
import socialNet from './imgWorks/social.gif';
import tList from './imgWorks/todolist.gif';
import websitePr from './imgWorks/webSite.gif';
import counterPr from './imgWorks/counter.gif';
import hanamiPr from './imgWorks/hanami.gif';
import cardsPrj from './imgWorks/cards.jpg';
import nextPrj from './imgWorks/next.gif';
// @ts-ignore
import Rotate from 'react-reveal/Fade'

const {
    MyWorksTitle,
    blockTitle,
    container,
    MyWorksBlock,
    MyWorksFirstBlock,
    MyWorksSecondBlock,
    h1Text
} = s;


export const MyWorks = () => {


    const socialPrjImg = {
        backgroundImage: `url(${socialNet})`
    }
    const todolistPrjImg = {
        backgroundImage: `url(${tList})`
    }
    const webPrjImg = {
        backgroundImage: `url(${websitePr})`
    }
    const counterPrjImg = {
        backgroundImage: `url(${counterPr})`
    }
    const hanamiPrjImg = {
        backgroundImage: `url(${hanamiPr})`
    }
    const cardsPrjImg = {
        backgroundImage: `url(${cardsPrj})`
    }
    const nextPrjImg = {
        backgroundImage: `url(${nextPrj})`
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
                    </div>
                    <div className={MyWorksFirstBlock}>
                        <WorksBox href={'https://coolcrazyfox.github.io/social_network-v/#/'} styleImg={socialPrjImg} descriptions={'Look at my social network'}
                                  name={'social network'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/Todolist/'} styleImg={todolistPrjImg} descriptions={'Look at my todolist'}
                                  name={'todolist'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/web-site-v2/'} styleImg={webPrjImg} descriptions={'Look at my Website'}
                                  name={'website'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/Hanami/'} styleImg={hanamiPrjImg} descriptions={'Look at my project'}
                                  name={'hanami'}/>
                    </div>
                    <div className={MyWorksSecondBlock}>
                        <WorksBox href={'https://coolcrazyfox.github.io/web-site-v2/'} styleImg={webPrjImg} descriptions={'Look at my Website'}
                                  name={'website'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/my-counter-v/'} styleImg={counterPrjImg} descriptions={'Look at my counter'}
                                  name={'counter'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/cards-project/'} styleImg={cardsPrjImg} descriptions={'Look at my project'}
                                  name={'cards'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/draggable-site/'} styleImg={nextPrjImg}  descriptions={'My next project'}
                                  name={'next project'}/>
                    </div>
                </div>
            </div>
        </Rotate>
        </div>
    )
}