import Preload from './EXfZ.gif';
import s from './Preloader.module.css';

const {preloaderBlock}= s;
export const Preloader =() =>{

return(
    <div className={preloaderBlock} >
        <img src={Preload} alt="Preloader"/>
    </div>
)

}