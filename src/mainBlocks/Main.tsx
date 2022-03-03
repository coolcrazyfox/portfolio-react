import s from './Main.module.css';
import {AboutMe} from './blockAboutMe/AboutMe';
import {Skills} from './BlockSkills/Skills';
import {MyWorks} from './MyWorksBlock/MyWorks';
import {Telework} from './teleworkBlock/Telework';
import {Contacts} from './Contacts/Contacts';


export const Main = () => {
    return (<>
            <AboutMe/>
            <Skills/>
            <MyWorks/>
            <Telework/>
            <Contacts/>
        </>
    )
}