import React from 'react';
import s from './VideoStyles.module.css';
import mainVideo from "./silk-folds.mp4";

const { video, hero
}=s
const Video = () => {
    return (
        <div className={hero}>
            <video autoPlay loop muted id='video' >
                <source src={mainVideo} type='video/mp4'/>
            </video>
            <div className="content">

            {/*    <h1>Galaxy</h1>*/}
            {/*    <p>Hello World!</p>*/}
            {/*    /!*<div>*!/*/}
            {/*    /!*    <Link to='/training' className='btn'>Training</Link>*!/*/}
            {/*    /!*    <Link to='/contact' className='btn btn-light'>Launch</Link>*!/*/}
            {/*    /!*</div>*!/*/}
            </div>
        </div>
    )
}
export default Video