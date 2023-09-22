/**
 * @author Noah Xia
 * @createTime 2023-9-8
 */
/* eslint-disable */

"use client"

import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
    useMemo,
    useImperativeHandle,
    memo
} from "react";
import { usePrevious, isNull } from "../fullpage-scroller/utils";
import SlideSingleContainer from "./slideSingleContainer";

import Image from 'next/image';

type SlideProps = {
    customIndex?: number;
    animationTime?: number;
    animationFunc?: string;
    animationTimerBuffer?: number;
    containerHeight?: number | string,
    containerWidth?: number | string,
    isChildrenFullExpand?: boolean,
    hasPagination?: boolean,
    children: React.ReactNode[] | React.ReactNode;
    sliceNumber?: number;
    prevButtonRef: any;
    nextButtonRef: any;
    paginationPositionClassName?: string;
    callback?: (index: number) => void
}

import { useCurrentIndexContext } from "./context";

const TOUCHMOVE = "touchmove";
const KEYDOWN = "keydown";
const KEY_LEFT = 37;
const KEY_RIGHT = 39;
let previousTouchMove: number | null = null;

const Slide = (props: SlideProps) => {
    const { 
        animationTime = 1000, 
        animationFunc="ease-in-out", 
        animationTimerBuffer=200, 
        containerHeight="100%", 
        containerWidth="100%", 
        sliceNumber = 5,
        isChildrenFullExpand=true, 
        hasPagination=false, 
        prevButtonRef, 
        nextButtonRef, 
        paginationPositionClassName, 
        callback, 
        } = props;

    let isSliding: boolean = false;
    const context = useCurrentIndexContext();
    const { currentIndex, setCurrentIndex } = context;
    const [childrenNodes, createChildrenNodes] = useState<React.ReactNode>([]);
    const children = props.children ?  Array.from(props.children) : [];
    const slideContainer = useRef<HTMLDivElement | null>(null);
    const slideOutContainer = useRef<HTMLDivElement | null>(null);
    const isMounted = useRef<boolean>(false);
    const SLIDES_COUNT = children.length;
    const positions = useMemo(() => {
        return children?.map((_child: React.ReactNode, index: number) => {
            return `${index === 0 ? 0 : -(index / SLIDES_COUNT ) * 100}%`
        })
    }, [children]);

    const slideMove = useCallback((nextSlideIndex: number)=> {
        slideContainer.current && (slideContainer.current.style.transform=`translate3d(${positions[nextSlideIndex]}, 0, 0)`);
        if (callback) {
            callback(nextSlideIndex);
        }
    }, [positions, currentIndex]);

    const slideLeft = useCallback(() => {
        if (!isSliding && currentIndex > 0) {
            isSliding = true;
    
            slideMove(currentIndex -1);

            setTimeout(() => {
                if (isMounted.current) {
                    setCurrentIndex((prev: number) => prev - 1)
                }
            }, animationTime + animationTimerBuffer)
        }
    }, [animationTime, animationTimerBuffer, currentIndex, slideMove]);

    const slideRight = useCallback(() => {
        if (!isSliding && currentIndex < SLIDES_COUNT -1) {
            isSliding = true;
 
            slideMove(currentIndex + 1);

            setTimeout(() => {
                if (isMounted.current) {
                    setCurrentIndex((prev: number) => prev + 1)
                }
            }, animationTime + animationTimerBuffer)
        }
    }, [animationTime, animationTimerBuffer, currentIndex, slideMove]);

    const onTouchMove = useCallback((event: TouchEvent) => {
        if (!isNull(previousTouchMove) && previousTouchMove) {
            if (event.touches[0].clientX > previousTouchMove) {
                slideRight();
            } else {
                slideLeft();
            }
        } else {
            previousTouchMove = event.touches[0].clientX;
        }
    }, [slideRight, slideLeft])

    const onKeypress = useCallback((event: KeyboardEvent) => {
        if (event.keyCode === KEY_LEFT) {
            slideRight();
        }
        if (event.keyCode === KEY_RIGHT) {
            slideLeft();
        }
    }, [slideRight, slideLeft])

    const renderSlides = useCallback(() => {
        const componentsToRender: React.ReactNode[] = [];
        const w = slideOutContainer.current?.clientWidth;
        if (!w) return;
        for(let i = 0; i < children.length; i++) {
            componentsToRender.push(
                <SlideSingleContainer  
                    key={i}
                    slidescount={hasPagination ? children.length: 0 }  
                    width={isChildrenFullExpand ? `${w}px` : `${w / sliceNumber }px`}  >{children[i]}
                </SlideSingleContainer>
            );
        }
        return componentsToRender;
    }, [children])

    useImperativeHandle(prevButtonRef, () => ({
        slideRight
    }))

    useImperativeHandle(nextButtonRef, () => ({
        slideLeft
    }))

    const renderChildren = useCallback(() =>{
        const nodes = renderSlides()
        createChildrenNodes(nodes)
    }, [children])


    useEffect(() => {
        renderChildren()
    }, [isChildrenFullExpand])

    useEffect(() => {
        const containerDom: HTMLElement | null = slideContainer.current;
        if (!containerDom) return;
        containerDom.addEventListener(TOUCHMOVE, onTouchMove)
        containerDom.addEventListener(KEYDOWN, onKeypress)
        window.addEventListener("resize", renderChildren)

        return () => {
            containerDom.removeEventListener(TOUCHMOVE, onTouchMove)
            containerDom.removeEventListener(KEYDOWN, onKeypress)
            window.removeEventListener("resize", renderChildren)
        }
    }, [onKeypress, onTouchMove])

    useEffect(() => {
        isMounted.current = true;
        
        return () => {
            isMounted.current = false;
        };
    }, [children])

    useEffect(() => {
        if (isMounted.current && currentIndex >= 0 && currentIndex <= SLIDES_COUNT - 1) {
            slideMove(currentIndex)
        }
    }, [currentIndex])

    return (
        <div ref={slideOutContainer} style={{
            position: "relative",
            height: containerHeight,
            width: containerWidth,
            overflow: "hidden",
        }} className="slide_outer_box flex">
            <div className="flex" style={{ transition: `transform ${animationTime}ms ${animationFunc}`}} ref={slideContainer} >
                {childrenNodes}
            </div>
        </div>
    )
}

export default memo(Slide);