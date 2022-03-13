import s from './headerMusicEl.module.scss';
import useSound from 'use-sound';
// @ts-ignore
import sound from './billie-eilish-everything-i-wanted.mp3';
// @ts-ignore
// import sound from './First-Step-Interstellar.mp3';


const {navOne,imgM} = s;

type NavPropsType = {
    img: any
    id?: number
}

export const HeaderMusicElement = (props: NavPropsType) => {
    const [play, { stop }] = useSound(sound);
    const {img} = props;
    return (
        <>
            <div className={navOne}>
                <img className={imgM} src={img} onClick={() => play()} onDoubleClick={() => stop()} />
            </div>
        </>
    )
}