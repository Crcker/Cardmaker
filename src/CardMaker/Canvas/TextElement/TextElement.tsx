import { useState } from 'react'
import { Text } from '../../../CardMakerTypes'
import styles from './TextElement.module.css'



type TextElementProps = {
    textElement: Text,
}

function TextElement(props: TextElementProps) {

    const [editor, changeEditor] = useState(false)

    let div = document.getElementById("test")

    function handlerOnFocus() {
        document.getElementById("textElement")?.focus()
        console.log("abc")
    }

    const style = {
        top: props.textElement.cordY,
        left: props.textElement.cordX,
        fontSize: props.textElement.size,
        fontWeight: props.textElement.bold ? 700 : 400,
        textDecoration: props.textElement.underlined ? 'underline' : 'none',
        fontStyle: props.textElement.italic ? 'italic' : 'none',
        fontFamily: props.textElement.fontFamily
    }

    return(
        <div id="test" onDoubleClick={() => { changeEditor(true); setTimeout(function() {div?.focus()}, 0) }} onBlur={() => changeEditor(false)} contentEditable={editor} className={styles.element} style={style}>{props.textElement.text}</div>
    );
}

export default TextElement;