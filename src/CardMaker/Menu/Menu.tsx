import BotMenu from './BotMenu/BotMenu';
import styles from './Menu.module.css';
import TopMenu from './TopMenu/TopMenu';

function Menu() {
    return(
        <div className={styles.Menu}>
            <TopMenu />
            <BotMenu/>

        </div>
    )
}

export default Menu