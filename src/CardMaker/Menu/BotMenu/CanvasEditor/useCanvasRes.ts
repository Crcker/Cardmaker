import { RefObject, useEffect } from "react";
import { dispatch, editCanvasRes, getCardMaker } from "../../../../editor";

let width: number;
let height: number

export function useCanvasRes(
    newW: RefObject<HTMLInputElement>,
    newH: RefObject<HTMLInputElement>): void {

        const curW = getCardMaker().canvas.width
        const curH  = getCardMaker().canvas.height

        useEffect(() => {

            const fieldW = newW.current;
            const fieldH = newH.current;

            if (fieldW) fieldW.value = String(curW)
            if (fieldH) fieldH.value = String(curH)
        
            function onBlur(): void {
                if (fieldW && fieldH) {
                    width = Number(fieldW.value);
                    height = Number(fieldH.value);
                    if (width <400) width = 400
                    if (height < 400) height = 400
                    if (width > 1500) width = 1500
                    if (height > 1000) height = 1000
                    dispatch(editCanvasRes, {newWidth: width, newHeight: height})
                }
            }        
            if (fieldW) fieldW.addEventListener("blur", onBlur);
            if (fieldH) fieldH.addEventListener("blur", onBlur);
            return () => {
                if (fieldW) fieldW.removeEventListener("blur", onBlur);
                if (fieldH) fieldH.removeEventListener("blur", onBlur);
            };
    
        }, [newW, newH, curH, curW, dispatch, editCanvasRes])


    }