import styles from './FilterEditor.module.css';


function FilterEditor() {
    return(
        <div className={styles.FilterEditor}>
            Изменить фильтр

            <input type="color"  name="color"
            value="ffffff"></input>

            <input type="range" name="transparency"
            min="0" max="100" value="0"></input>
        </div>
    )
}

export default FilterEditor