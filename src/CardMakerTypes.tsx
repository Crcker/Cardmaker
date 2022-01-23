export type CardMakerType = {
    readonly canvas: CanvasElement,
    readonly templates: Template[],
    readonly filterList: Filters[],
    readonly history: EventHistory,
    readonly selectedElements: number[],
}

export type CanvasElement = {
    readonly width: number,
    readonly height: number,
    readonly curFilter: Filters,
    readonly elementList: CanvasPart[],
    readonly background: Background,
}

export type ImgElement = {
    readonly src: string,
}

export type Text = {
    readonly id: number,
    readonly type: 'text',
    readonly text: string,
    readonly fontFamily: string,
    readonly width: number,
    readonly height: number,
    readonly cordX: number,
    readonly cordY: number,
    readonly size: number,
    readonly bold: boolean,
    readonly italic: boolean,
    readonly underlined: boolean,
}

export type Img = {
    readonly id: number,
    readonly type: 'img',
    readonly width: number,
    readonly height: number,
    readonly cordX: number,
    readonly cordY: number,
    readonly img: ImgElement,

}

export type ArtObjElement = {
    readonly type: string,
}

export enum ArtObjects {
    circle = 'object path',
    triangle = 'object path',
    square = 'object path',
}

export type ArtObj = {
    readonly id: number,
    readonly type: 'artObj',
    readonly width: number,
    readonly height: number,
    readonly cordX: number,
    readonly cordY: number,
    readonly artObj: ArtObjElement,
}



export type EventHistory = {
    readonly canvasState: CanvasElement[],
    readonly stateId: number,
}

export type Templates = {
    readonly name: string,
    readonly json: string,
}

export type CanvasPart = Text | Img | ArtObj

export type Background = {
    readonly color: string | null,
    readonly src: string | null,
}

export type Filters = {
    readonly color: string,
    readonly transparency: number,
}

export type Template = {
    readonly name: string,
    readonly json: string,
}