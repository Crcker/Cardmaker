import styles from './CardMaker.module.css';
import Menu from './Menu/Menu';
import Canvas from './Canvas/Canvas';
import { CardMakerType } from '../CardMakerTypes';

type CardMakerProps = {
    cardMaker: CardMakerType,
}

function CardMaker(props: CardMakerProps) {
    return(
        <div className={styles.CardMaker}>
            <Menu />
            <Canvas cardMaker={props.cardMaker}/>

        </div>
    )
}

export default CardMaker