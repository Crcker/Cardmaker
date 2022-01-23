import { Img } from '../../../CardMakerTypes'
import styles from './ImgElement.module.css'

type ImgElementProps = {
    imgElement: Img,
}

function ImgElement(props: ImgElementProps) {
    const style = {
        top: props.imgElement.cordY,
        left: props.imgElement.cordX,
        width: props.imgElement.width,
        height: props.imgElement.height,
        src: props.imgElement.img?.src
    }

    return(
        <img src={style.src} alt="" className={styles.element} style={style}/>
    )
}

export default ImgElement;