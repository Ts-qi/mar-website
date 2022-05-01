import React from "react";
import { TileWrapper,TileBackGround,TileContent } from "./tile";

const Works = () =>(
    <TileWrapper numOfPages={3}> 
        <TileBackGround></TileBackGround >
        <TileContent> Foo</TileContent>
        <TileContent> Bar</TileContent>
        <TileContent> Baz</TileContent>

    </TileWrapper>
)
export default Works