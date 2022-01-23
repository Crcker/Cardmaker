import {
    CanvasPart,
    Background,
    Filters,
    CanvasElement,
    CardMakerType
} from "./CardMakerTypes"

let testSetOfArtObj = {
    circle: ""
}

let testArtObj: CanvasPart = {
    id: 1,
    type: "artObj",
    width: 200,
    height: 200,
    cordX: 300,
    cordY: 400,
    artObj: {
        type: testSetOfArtObj.circle
    }
}


let testBackgound: Background = {
    color: "#ffffff",
    src: null,
}

export let testFilter: Filters = {
    color: '#ffffff',
    transparency: 0,
}


export let testCanvas: CanvasElement = {
    width: 600,
    height: 800,
    curFilter: testFilter,
    elementList: [],
    background: testBackgound,
}

export let testCardMaker: CardMakerType = {
    canvas: testCanvas,
    history: {
        canvasState: [],
        stateId: 1,
    },
    templates: [],
    filterList: [],
    selectedElements: []
}