import { useRef } from 'react';
import styles from './CanvasEditor.module.css';
import { useCanvasRes } from './useCanvasRes';


function CanvasEditor() {

    const newW = useRef<HTMLInputElement>(null);
    const newH = useRef<HTMLInputElement>(null);

    useCanvasRes(
        newW,
        newH,
    );

    return(
        <div className={styles.CanvasEditor}>
            <div className={styles.CanvasEditorBlock}>
                <input id="name" name="name" className={styles.CanvasEditorField} ref={newH}></input>        
                <p>Высота</p>
            </div>
            <div className={styles.CanvasEditorBlock}>
                <input id="name" name="name" className={styles.CanvasEditorField} ref={newW}></input>
                <p>Ширина</p>
            </div>
            <div>Холст</div>
        </div>
    )
}

export default CanvasEditor