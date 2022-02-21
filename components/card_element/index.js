import style from './card_style.module.css';
export default function Card({image, description}){
    return(
        <div className={style.card}>
            <div  className={style.capa} style={{ backgroundImage: 'url(' + image + ')' }}></div>
            <div  className={style.info}>
                <p>{description}</p>
            </div>
        </div>
    );
}