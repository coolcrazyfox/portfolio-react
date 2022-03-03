import s from './Nav.module.scss';
import me from '../iconsImg/user1.png';
import skills from '../iconsImg/skills.png';
import cases from '../iconsImg/cases.png';
import contacts from '../iconsImg/contact.png';
import {HeaderElement} from './headerEl/headerEl';


const {header_nav} = s;


export const Nav = () => {
    return (

        <div className={header_nav}>
          <HeaderElement img={me} text={'Main'} alt={'About me'} href={'#AboutMe'}/>
          <HeaderElement img={skills} text={'Skills'} alt={'MySkills'} href={'#MySkills'}/>
          <HeaderElement img={cases} text={'Projects'} alt={'Portfolio'} href={'#MyWorksBlock'}/>
          <HeaderElement img={contacts} text={'Contacts'} alt={'Contacts'} href={'#footer'}/>
        </div>
    )
}