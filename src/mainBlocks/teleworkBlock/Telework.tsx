import s from './Telework.module.scss';
import {Btns} from '../btns/btns';
// @ts-ignore
import Rotate from 'react-reveal/Fade'

const {blockTitle, container, teleWorkBlock} = s;


export const Telework = () => {
    return (<div className={blockTitle}>
            <Rotate top right>
                <div className={container}>
                    <div className={teleWorkBlock}>
                        <div>
                            <p>I am available</p> <span>for freelance</span>
                        </div>
                        <div><Btns href={'#Contacts'} type={'link'} title={'Hire me'}/></div>
                    </div>
                </div>
            </Rotate>
        </div>
    );
}