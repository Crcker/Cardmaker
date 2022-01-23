import styles from './BotMenu.module.css';
import TextEditor from './TextEditor/TextEditor';
import CanvasEditor from './CanvasEditor/CanvasEditor';
import ImgEditor from './ImgEditor/ImgEditor';
import ArtObjectEditor from './ArtObjectEditor/ArtObjectEditor';
import FilterEditor from './FilterEditor/FilterEditor';
import ElementEditor from './ElementEditor/ElementEditor';

function BotMenu() {
    return(
        <div className={styles.BotMenu}>
            <TextEditor />
            <CanvasEditor />
            <ImgEditor />
            <ArtObjectEditor />
            <FilterEditor />
            <ElementEditor /> 

        </div>
    )
}

export default BotMenu