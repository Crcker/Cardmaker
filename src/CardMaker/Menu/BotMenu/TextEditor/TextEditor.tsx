import { createTextElement, dispatch, getCardMaker } from '../../../../editor';
import styles from './TextEditor.module.css';

function TextEditor() {
    
    function onButtonClick() {
        const id: number = getCardMaker().canvas.elementList[getCardMaker().canvas.elementList.length - 1].id
        dispatch(createTextElement, id + 1)
    }
    return(
        <div className={styles.TextEditor}>
            <div className={styles.TextEditorBlock}>
                <select name="fonts" id="font-select" className={styles.Fonts}>
                    <option value="Arial">Arial</option>
                    <option value="Calibri">Calibri</option>
                </select>

                <button onClick={onButtonClick} className={styles.Button}
                    type="button">
                    T
                </button>

            </div>
            <div className={styles.TextEditorBlock}>
                <select name="font-sizes" id="font-size-select" className={styles.FontSizes}>
                    <option value="12">12</option>
                    <option value="14">14</option>

                </select>
                <button className={styles.Button}
                    type="button">
                    B
                </button>
                <button className={styles.Button}
                    type="button">
                    I
                </button>
                <button className={styles.Button}
                    type="button">
                    U
                </button>
            </div>
            <div>Текст</div>
        </div>
    )
}

export default TextEditor