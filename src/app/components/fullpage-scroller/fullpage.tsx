"use client"

import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
    useMemo,
    memo
} from "react";

import {
    DEFAULT_COMPONENT_INDEX,
    DEFAULT_COMPONENTS_TO_RENDER_LENGTH,
    KEY_UP,
    KEY_DOWN,
    MINIMAL_DELTA_Y_DIFFERENCE,
    TOUCHMOVE,
    WHEEL,
    KEYDOWN
} from "./constants"
import { PropsType, TouchEvent, KeyboardEvent, WheelEvent } from "./types";
import { isNil, isNull, isPositiveNumber, usePrevious } from "./utils";
import  SectionContainer  from "./SectionContainer";
import Image from "next/image";

let previousTouchMove: number | null;
let isScrolling = false;
let isTransitionAfterComponentsToRenderChanged = false;

const PageScroller = (props: PropsType) => {
    const {
        animationTimer,
        renderAllPagesOnFirstRender,
        transitionTimingFunction, blockScrollUp,
        blockScrollDown,
        animationTimerBuffer,
        customPageNumber,
        children,
        containerHeight,
        containerWidth,
        onScrollToLastPage
    } = props;
    const [componentIndex, setComponentIndex] = useState(DEFAULT_COMPONENT_INDEX);
    const [componentsToRenderLength, setComponentsToRenderLength] = useState(DEFAULT_COMPONENTS_TO_RENDER_LENGTH);
    const prevComponentIndex = usePrevious(componentIndex);
    const scrollContainer = useRef<HTMLDivElement | null>(null);
    const pageContainer = useRef<HTMLDivElement | null>(null);
    const isMounted = useRef<boolean>(false);
    const containersRef = useRef<boolean[]>([]);

    const positions: number[] = useMemo(() =>
        children.reduce((_positions: number[], child: any) => {
            const lastElement: number = _positions.slice(-1)[0];
            // const height: number = child.props.height
            //     ? parseInt(child.props.height)
            //     : 100;
            return _positions.concat([lastElement - 100]);
        }, [0]), [children]) as number[];

    const scrollPage = useCallback(
        (nextComponentIndex: number) => {
            pageContainer.current && (pageContainer.current.style.transform = `translate3d(0, ${positions[nextComponentIndex]}%, 0)`);
            if (nextComponentIndex === children.length - 1) {
                onScrollToLastPage(nextComponentIndex)
            }
        },
        [positions]);

    const scrollDown = useCallback(() => {
        if (!isScrolling && !blockScrollDown) {
            if (!isNil(containersRef.current[componentIndex + 1])) {
                isScrolling = true;
                scrollPage(componentIndex + 1);

                setTimeout(() => {
                    if (isMounted.current) {
                        setComponentIndex(prevState => prevState + 1);
                    }
                }, animationTimer + animationTimerBuffer);
            }
        }
    }, [animationTimer,
        animationTimerBuffer,
        blockScrollDown,
        componentIndex,
        scrollPage]);

    const scrollUp = useCallback(() => {
        if (!isScrolling && !blockScrollUp) {
            if (!isNil(containersRef.current[componentIndex - 1])) {
                isScrolling = true;
                scrollPage(componentIndex - 1);

                setTimeout(() => {
                    if (isMounted.current) {
                        setComponentIndex((prevState: number) => prevState - 1);
                    }
                }, animationTimer + animationTimerBuffer);
            }
        }
    }, [animationTimer, animationTimerBuffer, blockScrollUp, componentIndex, scrollPage]);

    const onTouchMove = useCallback((event: any) => {
        if (!isNull(previousTouchMove) && previousTouchMove) {
            if (event.touches[0].clientY > previousTouchMove) {
                scrollUp();
            } else {
                scrollDown();
            }
        } else {
            previousTouchMove = event.touches[0].clientY;
        }
    }, [scrollUp, scrollDown])

    const onKeypress = useCallback((event: any) => {
        if (event.keyCode === KEY_UP) {
            scrollUp();
        }
        if (event.keyCode === KEY_DOWN) {
            scrollDown();
        }
    }, [scrollUp, scrollDown])

    const onWheel = useCallback((event: any) => {
        if (Math.abs(event.deltaY) > MINIMAL_DELTA_Y_DIFFERENCE) {
            if (isPositiveNumber(event.deltaY)) {
                scrollDown();
            } else {
                scrollUp();
            }
        }
    }, [scrollDown, scrollUp])

    const renderChildComponents = useCallback(() => {
        const newComponentsToRender: React.ReactNode[] = [];
        let i = 0;
        while (i < componentsToRenderLength && !isNil(children[i])) {
            containersRef.current[i] = true;
            newComponentsToRender.push(
                <SectionContainer key={i}>{children[i]}</SectionContainer>,
            );
            i++;
        }
        return newComponentsToRender;
    }, [children, componentsToRenderLength]);

    const addNextComponent = useCallback(
        (componentsToRenderOnMountLength = 0) => {
            let tempComponentsToRenderLength = Math.max(
                componentsToRenderOnMountLength,
                componentsToRenderLength,
            );

            if (tempComponentsToRenderLength <= componentIndex + 1) {
                if (!isNil(children[componentIndex + 1])) {
                    tempComponentsToRenderLength++;
                }
            }

            setComponentsToRenderLength(tempComponentsToRenderLength);
        },
        [children, componentIndex, componentsToRenderLength],
    );

    const checkRenderOnMount = useCallback(() => {
        if (renderAllPagesOnFirstRender) {
            setComponentsToRenderLength(React.Children.count(children));
        } else if (!isNil(children[DEFAULT_COMPONENT_INDEX + 1])) {
            const componentsToRenderAdditionally = positions.filter(
                position => Math.abs(position) < 200,
            ).length;

            addNextComponent(
                DEFAULT_COMPONENTS_TO_RENDER_LENGTH + componentsToRenderAdditionally,
            );
        }
    }, [addNextComponent, children, positions, renderAllPagesOnFirstRender]);

    useEffect(() => {
        const containerDom: HTMLElement | null = scrollContainer.current;
        if (!containerDom) return;
        containerDom.addEventListener(TOUCHMOVE, onTouchMove)
        containerDom.addEventListener(KEYDOWN, onKeypress)

        return () => {
            containerDom.removeEventListener(TOUCHMOVE, onTouchMove)
            containerDom.removeEventListener(KEYDOWN, onKeypress)
        }
    }, [onKeypress, onTouchMove])

    useEffect(() => {
        isMounted.current = true;
        checkRenderOnMount();
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        isScrolling = false;
        previousTouchMove = null;
        if (componentIndex > prevComponentIndex) {
            addNextComponent();
        }
    }, [addNextComponent, componentIndex, prevComponentIndex]);

    useEffect(() => {
        if (isNil(customPageNumber)) return;
        let newComponentsToRenderLength = componentsToRenderLength;

        if (customPageNumber !== componentIndex) {
            if (!isNil(containersRef.current[customPageNumber]) && !isScrolling) {
                isScrolling = true;
                scrollPage(customPageNumber);

                if (
                    isNil(containersRef.current[customPageNumber]) &&
                    !isNil(children[customPageNumber])
                ) {
                    newComponentsToRenderLength++;
                }

                setTimeout(() => {
                    setComponentIndex(customPageNumber);
                    setComponentsToRenderLength(newComponentsToRenderLength);
                }, animationTimer + animationTimerBuffer);
            } else if (!isScrolling && !isNil(children[customPageNumber])) {
                for (let i = componentsToRenderLength; i <= customPageNumber; i++) {
                    newComponentsToRenderLength++;
                }
                isScrolling = true;
                isTransitionAfterComponentsToRenderChanged = true;
                setComponentsToRenderLength(newComponentsToRenderLength);
            }
        }
    }, [customPageNumber, scrollPage]);

    useEffect(() => {
        if (isTransitionAfterComponentsToRenderChanged) {
            isTransitionAfterComponentsToRenderChanged = false;
            scrollPage(customPageNumber);
            setTimeout(() => {
                setComponentIndex(customPageNumber);
            }, animationTimer + animationTimerBuffer);
        }
    }, [
        animationTimer,
        animationTimerBuffer,
        componentsToRenderLength,
        customPageNumber,
        scrollPage,
    ]);

    return (
        <div className="relative" ref={scrollContainer}
            style={{
                height: containerHeight,
                width: containerWidth,
                overflow: "hidden",
            }} >
            <div className="k11_vertical_center absolute z-50 left-1/2 bottom-4 lg:bottom-16 text-white translate-x-[-50%] pointer-events-none">
                <div>SCROLL TO HIGHTLIGHT</div>
                <Image src="/icons/arrow-down.svg" width={32} height={32} alt="" />
            </div>
            <div ref={pageContainer}
                onWheel={onWheel}
                style={{
                    height: "100%",
                    width: "100%",
                    transition: `transform ${animationTimer}ms ${transitionTimingFunction}`,
                    outline: "none",
                }}
                tabIndex={0}
            >
                {
                    renderChildComponents()
                }
            </div>
        </div>
    )
}

export default memo(PageScroller);
 