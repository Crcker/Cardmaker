import styles from './ImgEditor.module.css';


function ImgEditor() {
    return(
        <div className={styles.ImgEditor}>
            <input className={styles.ImgEditorButton}
                 type="button"
                 value="С компьютера">
            </input>

            <button className={styles.ImgEditorButton}
                type="button">
                С Pixels
            </button>

        <div>Картинка</div>

        </div>
    )
}

export default ImgEditor