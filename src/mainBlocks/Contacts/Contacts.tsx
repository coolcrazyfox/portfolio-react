import s from './Contacts.module.scss';
import {Btns} from '../btns/btns';
// @ts-ignore
import Rotate from 'react-reveal/Fade'
import {FormEvent, useState} from 'react';
import emailjs from 'emailjs-com';
import {Preloader} from './Preloader/Preloader';
import OkImg from './OK.png';
import badImg from './error.png';

const {
    contactsTitle,
    blockTitle,
    container,
    contactsFormBox,
    OkPage
} = s;

type SendStatusType = 'OK' | 'PENDING' | 'BAD REQUEST'|'START_STATUS'


export const Contacts = () => {

    const [sendStatus, setSendStatus] = useState<SendStatusType>('START_STATUS')

   async function sendEmail(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSendStatus('PENDING')
        try {
            // @ts-ignore
            const res = await emailjs.sendForm('portfolioMSG', 'template_14kp1zc', e.target, 'user_KlcGpOZ1VW1yf2qUwglMW');
            setSendStatus('OK')
        } catch (error) {
            setSendStatus('BAD REQUEST')
        }finally {
            setTimeout(()=>{
                setSendStatus('START_STATUS')
            },2000)
        }
            // @ts-ignore
            e.target.reset()

    }


    if (sendStatus === 'PENDING') {
        return (
            <div id={'Contacts'} className={blockTitle}>
                <Preloader/>
            </div>
        )
    }
    if (sendStatus === 'OK') {
        return (
            <div id={'Contacts'} className={blockTitle}>
                <div className={OkPage}>
                <img src={OkImg} alt="success"/>
                </div>
            </div>
        )
    }

    if (sendStatus === 'BAD REQUEST') {
        return (
            <div id={'Contacts'} className={blockTitle}>
                <div className={OkPage}>
                    <img src={badImg} alt="bad_request"/>
                <h1 style={{color:'red'}}>HAPPEN SOME ERROR</h1>
                </div>
            </div>
        )
    }

    return (<div id={'Contacts'} className={blockTitle}>
            <Rotate top left>
                <div className={container}>
                    <div className={contactsTitle}>
                        <p>Contacts</p>
                        <form onSubmit={sendEmail}>
                            <div className={contactsFormBox}>
                                <input placeholder={'please Enter your name'} type="text" name={'from_name'}/>
                                <input placeholder={'Enter your email'} type="text" name={'from_email'}/>
                                <textarea placeholder={'Enter your comments'} name={'message'}/>
                            </div>
                            <Btns type={'submit'} title={'Send message'}/>
                        </form>
                    </div>
                </div>
            </Rotate>
        </div>
    )
}