import s from './Footer.module.scss';
import linkedin from './footerIcon/linkedin.gif';
import codewars from './footerIcon/codewars.png';
import github from './footerIcon/github.png';
import telegram from './footerIcon/telegram.gif';
// @ts-ignore
import Rotate from 'react-reveal/Fade'

const {
    footerTitle,
    blockTitle,
    container,
    footerBlock,
    footerBox,
    footerTitle_header,
    black_Img,
    link
} = s;


export const Footer = () => {
    return (<div id={'footer'} className={blockTitle}>
            <Rotate bottom right>
            <div className={container}>
                <div className={footerBlock}>
                    <div className={footerTitle}>
                        <div className={footerTitle_header}>
                            <p>With all respect,</p><span> Andrei Malets</span>
                        </div>
                        <div className={footerBox}>
                            <div className={link}>
                                <a target={'_blank'} href="https://www.linkedin.com/in/andrei-malets-072827210/"><img
                                    src={linkedin} alt="linkedin"/></a>
                            </div>
                            <div className={black_Img}>
                                <a target={'_blank'} href="https://www.codewars.com/users/coolfox"><img
                                    src={codewars} alt="codewars"/></a>
                            </div>
                            <div className={black_Img}>
                                <a target={'_blank'} href="https://github.com/coolcrazyfox"><img src={github}
                                                                                               alt="github"/></a>
                            </div>
                            <div className={link}>
                                <a target={'_blank'} href="https://t.me/Andrei_Malets/"><img src={telegram} alt="telegram"/></a>
                            </div>
                        </div>
                        <span>2022 All rights reserved</span>
                    </div>
                </div>
            </div>
            </Rotate>
        </div>
    )
}