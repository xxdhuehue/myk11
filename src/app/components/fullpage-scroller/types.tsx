/**
 * @author Noah Xia
 * @createTime 2023-9-6
 * 
 * animationTimer: 
 * 
 * animationTimerBuffer:
 * 
 * blockScrollDown:
 * 
 * renderAllPagesOnFirstRender: if the banners are too many, to improve performance, only load the first two banners if the value is set false
 * 
 * transitionTimingFunction:
 * 
 * blockScrollUp:
 * 
 * children:
 * 
 * containerHeight:
 * 
 * containerWidth:
 * 
 * customPageNumber:
 * 
 * handleScrollUnavailable:
 * 
 * onBeforePageScroll:
 * 
 * pageOnChange:
 */
export type PropsType = {
    animationTimer: number;
    animationTimerBuffer: number,
    blockScrollDown: boolean,
    renderAllPagesOnFirstRender: boolean,
    transitionTimingFunction: string,
    blockScrollUp?: boolean,
    children: React.ReactNode[],
    containerHeight: number | string,
    containerWidth: number | string,
    customPageNumber: number,
    onScrollToLastPage: (index: number) => void
} 

export interface TouchEvent extends Event {
    identifier:number;
    target:EventTarget;
    screenX:number;
    screenY:number;
    clientX:number;
    clientY:number;
    pageX:number;
    pageY:number;
    touches: any
};

export interface KeyboardEvent extends Event {
    altKey: boolean;
    charCode: number;
    ctrlKey: boolean;
    getModifierState(key: string): boolean;
    key: string;
    keyCode: number;
    locale: string;
    location: number;
    metaKey: boolean;
    repeat: boolean;
    shiftKey: boolean;
    which: number;
}

export interface WheelEvent extends Event {
    deltaMode: number;
    deltaX: number;
    deltaY: number;
    deltaZ: number;
}