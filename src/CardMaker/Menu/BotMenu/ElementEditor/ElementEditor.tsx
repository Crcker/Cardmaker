import styles from './ElementEditor.module.css';


function ElementEditor() {
    return(
        <div className={styles.ElementEditor}>
            <button className={styles.ImgEditorButton}
                type="button">
                Выделить
            </button>   
            <button className={styles.ImgEditorButton}
                type="button">
                Стереть
            </button>  
        </div>
    )
}

export default ElementEditor