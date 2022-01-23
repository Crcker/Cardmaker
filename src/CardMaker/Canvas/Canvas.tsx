import { ReactElement } from 'react';
import { Img, Text, CardMakerType } from '../../CardMakerTypes';
import styles from './Canvas.module.css';
import ImgElement from './ImgElement/ImgElement';
import TextElement from './TextElement/TextElement';

type CanvasProps = {
    cardMaker: CardMakerType,
}

function Canvas(props: CanvasProps) {

    let background: string = "#ffffff"

    const color: string | null = props.cardMaker.canvas.background.color;
    const src: string | null = props.cardMaker.canvas.background.src;
    
    if (color) {
        background = color
    } else if (src) {
        background = 'url(' + src + ')'
    }

    const style = {
        width: props.cardMaker.canvas.width,
        height: props.cardMaker.canvas.height,
        background: background,    
    }

    let elementList: ReactElement[] = [];
    props.cardMaker.canvas.elementList.forEach(element =>{
        switch(element.type) {
            case 'text':
                elementList.push(<TextElement textElement={element as Text} />);
                break;
            case 'img':
                elementList.push(<ImgElement imgElement={element as Img} />);
                break;
                
        } 
    });

    return(
        <div className={styles.Canvas} style={style}>
            <div className={styles.element}>{elementList}</div>
        </div>
    )
}

export default Canvas