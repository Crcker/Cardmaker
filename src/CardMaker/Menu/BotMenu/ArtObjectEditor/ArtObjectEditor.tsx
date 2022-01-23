import styles from './ArtObjectEditor.module.css';


function ArtObjectEditor() {
    return(
        <div className={styles.ArtObjectEditor}>
            <button className={styles.BoldButton}
                type="button">
                Вставить арт объект
            </button>

        </div>
    )
}

export default ArtObjectEditor