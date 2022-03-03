import s from './btns.module.scss';

const {
    MyWorksItemTitleBtn,
    MyWorksItemTitleBtnTrue
} = s;

type BtnsPropsType = {
    title: string
    type: 'submit' | 'link'
    href?:string
}

export const Btns = (pr: BtnsPropsType) => {
    const {title, type,href} = pr;
    return (
        <div className={type==='link'?MyWorksItemTitleBtn:MyWorksItemTitleBtnTrue}>
            {type === 'link' && <a target={'_blank'} href={href}>{title}</a>}
            {type === 'submit' && <button type='submit'>
                {title}
            </button>}
        </div>
    )
}