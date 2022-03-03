import s from './header.module.scss';
import {Nav} from './NavBar/Nav';
// @ts-ignore
import Rotate from 'react-reveal/Fade'

const {header_title, container} = s;


export const Header = () => {
    return (<div className={header_title}>
            <Rotate top right>
                <div className={container}>
                    <Nav/>
                </div>
            </Rotate>
        </div>
    )
}