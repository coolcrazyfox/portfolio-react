import s from './headerEl.module.scss';


const {skillName, navOne} = s;

type NavPropsType = {
    img: any
    text: string
    alt: string
    href: string
}


export const HeaderElement = (props: NavPropsType) => {


    const {img, text, alt, href} = props;
    return (
        <>
            <div className={navOne}>
                <a href={href}>
                    <img src={img} alt={alt}/>

                    <div className={skillName}>
                        {text}
                    </div>
                </a>
            </div>
        </>
    )
}