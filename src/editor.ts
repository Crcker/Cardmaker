import { CardMakerType } from "./CardMakerTypes"
import { testCardMaker } from "./TestData"

let cardMaker: CardMakerType = testCardMaker
let editorChangeHandler: any = null

export function getCardMaker() {
    return cardMaker
}

export function setCardMaker(newCardMaker: CardMakerType) {
    cardMaker = newCardMaker
}

export function addEditorChangeHandler(handler: any) {
    editorChangeHandler = handler
}

export function dispatch(modifyFn: Function, payload: Object) {
    const newCardMaker = modifyFn(cardMaker, payload)
    setCardMaker(newCardMaker)

    if (editorChangeHandler) 
    {
        editorChangeHandler()
    }
}

type EditCanvasResData = {
    newWidth: number, 
    newHeight: number
}

export function editCanvasRes(cardMaker: CardMakerType, {newWidth, newHeight}: EditCanvasResData): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            width: newWidth,
            height: newHeight,
        }
    };
}

export function createTextElement(cardMaker: CardMakerType, newId: number): CardMakerType {
    const standartWidthElement = 100;
    const standartHeightElement = 50;
    const standartSizeText = 32;
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            elementList: [
                ...cardMaker.canvas.elementList,
                {
                    id: newId,
                    type: 'text',
                    text: 'Новый текст',
                    fontFamily: 'Calibri',
                    width: standartWidthElement,
                    height: standartHeightElement,
                    cordX: cardMaker.canvas.width / 2,
                    cordY: cardMaker.canvas.height / 2,
                    size: standartSizeText,
                    bold: false,
                    italic: false,
                    underlined: false,                    
                }
            ],    
        }
    };
}

type editTxtParam = {
    id: number,
    text: string
}

export function editTxt(cardMaker: CardMakerType, { id, text }: editTxtParam): CardMakerType {
    return {
        ...cardMaker,
        canvas: {
            ...cardMaker.canvas,
            elementList: cardMaker.canvas.elementList.map(element => {
                if (element.id == id) {
                    return {
                        ...element,
                        text
                    }
                }
                return {...element}
            })
        }
    };
}
