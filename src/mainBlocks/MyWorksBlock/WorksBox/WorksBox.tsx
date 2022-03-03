import s from './WorksBox.module.scss';
import {Btns} from '../../btns/btns';

const {
    MyWorksItem,
    MyWorksItemTitle,
    MyWorksItemMain,
    MyWorksItemTitleImg,
    MyWorksItemMainDescr,
    MyWorksItemMainName,
} = s;

type WorksBoxType = {
    name: string
    descriptions: string
    styleImg: any
    href?:string
}


export const WorksBox = (props: WorksBoxType) => {
    const {name, descriptions, styleImg,href} = props;

    return (<div className={MyWorksItem}>

            <div className={MyWorksItemTitle}>
                <div style={styleImg} className={MyWorksItemTitleImg}>
                    <Btns href={href} type={'link'} title={'Link'}/>
                </div>
            </div>
            <div className={MyWorksItemMain}>
                <div className={MyWorksItemMainName}>
                    <p>{name}</p>
                </div>
                <div className={MyWorksItemMainDescr}>
                    <p>{descriptions}</p>
                </div>
            </div>

        </div>
    )
}