import React, { createContext, useContext, useRef } from "react";
import { ScrollContext } from "../utils/scroll-observer";

interface WrapperProps {
    numOfPages: number;
    children:React.ReactNode;
}
interface TileContextValue {
    numOfPages: number;
    currentPage?: number;
}
export const TileContext = createContext<TileContextValue>({
    numOfPages: 0,
    currentPage:  0
})
export const TileWrapper: React.FC<WrapperProps>=({children,numOfPages}) => {
    const { scrollY} = useContext(ScrollContext);
    const refContainer = useRef<HTMLDivElement>(null)
    const { current: elContainer} = refContainer;
    let currentPage = 0
    if(elContainer) {
        const { clientHeight,offsetTop }= elContainer
        const  halfH = window.innerHeight / 2
        const percentY = Math.min(clientHeight +halfH,
            Math.max(-window.innerHeight, scrollY - offsetTop) + halfH
            ) / clientHeight
        currentPage = percentY * numOfPages 
    }
    return(
        <TileContext.Provider value={{numOfPages, currentPage}}>
            <div  ref={refContainer} className="relative text-white bg-black">
                {children}
            </div>
        </TileContext.Provider>
    )
}
export const TileBackGround: React.FC<{children?:React.ReactNode}> = ({children}) => (
    <div  className="absolute w-full h-full">{ children}</div>
)
export const TileContent: React.FC<{children?:React.ReactNode}> = ({children}) => (
    <div  className="sticky top-0 h-screen overflow-hidden">{ children}</div>
)