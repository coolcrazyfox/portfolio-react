import s from './MyWorks.module.scss';
import {WorksBox} from './WorksBox/WorksBox';
import socialNet from './imgWorks/social.gif';
import tList from './imgWorks/todolist.gif';
import websitePr from './imgWorks/webSite.gif';
import counterPr from './imgWorks/counter.gif';
import hanamiPr from './imgWorks/hanami.gif';
import cardsPrj from './imgWorks/cards.jpg';
import nextPrj from './imgWorks/next.gif';
import hotelPrj from './imgWorks/hotel.jpg';
import naturePrj from './imgWorks/nature.gif';
import animPrj from  './imgWorks/bmw.gif';
import countryPrj from  './imgWorks/countries.gif';
import miamiPrj from  './imgWorks/miami.gif';
import weatherPrj from  './imgWorks/weather.gif';
import calendarPrj from  './imgWorks/calendar.jpg';
import r_mPrj from  './imgWorks/rick&morty.gif';
import chessPrj from  './imgWorks/chess.gif';
import luxuryPrj from  './imgWorks/luxury-car.gif';
import parallaxPrj from  './imgWorks/forest.gif';
// @ts-ignore
import Rotate from 'react-reveal/Fade'

const {
    MyWorksTitle,
    blockTitle,
    container,
    MyWorksBlock,
    MyWorksFirstBlock,
    MyWorksSecondBlock,
    MyWorksThirdBlock,
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
    const hotelPrjImg = {
        backgroundImage: `url(${hotelPrj})`
    }
    const naturePrjImg = {
        backgroundImage: `url(${naturePrj})`
    }
    const animPrjImg = {
        backgroundImage: `url(${animPrj})`
    }
    const countryPrjImg = {
        backgroundImage: `url(${countryPrj})`
    }
    const miamiPrjImg = {
        backgroundImage: `url(${miamiPrj})`
    }
    const weatherPrjImg = {
        backgroundImage: `url(${weatherPrj})`
    }
    const calendarPrjImg = {
        backgroundImage: `url(${calendarPrj})`
    }
    const r_mPrjImg = {
        backgroundImage: `url(${r_mPrj})`
    }
    const chessPrjImg = {
        backgroundImage: `url(${chessPrj})`
    }
    const luxuryPrjImg = {
        backgroundImage: `url(${luxuryPrj})`
    }
    const parallaxPrjImg = {
        backgroundImage: `url(${parallaxPrj})`
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
                        <WorksBox href={'https://coolcrazyfox.github.io/my-counter-v/'} styleImg={counterPrjImg} descriptions={'Look at my counter'}
                                  name={'counter'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/cards-project/'} styleImg={cardsPrjImg} descriptions={'Look at my project'}
                                  name={'cards'}/>
                    </div>
                    <div className={MyWorksSecondBlock}>
                        <WorksBox href={'https://coolcrazyfox.github.io/draggable-site/'} styleImg={hotelPrjImg}  descriptions={'Most Beautiful hotels'}
                                  name={'Hotels'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/3D-site/'} styleImg={naturePrjImg} descriptions={'Look at my nice 3d-site'}
                                  name={'lovely 3D-Site'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/anim-slider-site/'} styleImg={animPrjImg}  descriptions={'Look at my animation site'}
                                  name={'animation slider site'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/countries-app/'} styleImg={countryPrjImg}  descriptions={'Look at my countries-app'}
                                  name={'countries app'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/gallery-miami/'} styleImg={miamiPrjImg}  descriptions={'Look at my Miami-gallery'}
                                  name={'Miami'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/drive-react-website/'} styleImg={luxuryPrjImg}  descriptions={'Look at my drive-website'}
                                  name={'Drive-Website'}/>
                    </div>
                    <div className={MyWorksThirdBlock}>
                        <WorksBox href={'https://coolcrazyfox.github.io/weather-nextjs-app/'} styleImg={weatherPrjImg}  descriptions={'Look at my weather-app'}
                                  name={'Weather-APP'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/calendar-app/'} styleImg={calendarPrjImg}  descriptions={'Look at my calendar-app'}
                                  name={'calendar'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/vue-project/'} styleImg={r_mPrjImg}  descriptions={'Look at my Vue.JS-App'}
                                  name={'Rick & Morty'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/chess-game/'} styleImg={chessPrjImg}  descriptions={'Look at my chess-app'}
                                  name={'Chess-game-app'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/Fairy-Forest/'} styleImg={parallaxPrjImg}  descriptions={'Look at my Parallax-site'}
                                  name={'Parallax Website'}/>
                        <WorksBox href={'https://coolcrazyfox.github.io/portfolio-v2/'} styleImg={nextPrjImg}  descriptions={'My next project'}
                                  name={'my next project'}/>
                    </div>
                </div>
            </div>
        </Rotate>
        </div>
    )
}
