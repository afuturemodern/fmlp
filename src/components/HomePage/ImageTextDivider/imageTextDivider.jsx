import styled from "styled-components";

import IntroArt from "../Intro/IntroArt";
import IntroText from "../Intro/IntroText";
import Divider from "../../Divider/Divider";

/**
 * 
 * @param {} param0 
 * @returns a paragraph text and a divider 
 */

export const ImageTextDivider = ({paragraphs, thereAreImages, paragraphText, images}) => {
    if (paragraphs === 2 && thereAreImages){
        return <>
          <IntroText p1={paragraphText.one} p2={paragraphText.two}/> 
          <IntroArt images={images}/>
          <Divider/>
        </>
    }
    else if (paragraphs === 1 && thereAreImages){
        return <>
        <IntroText p1={paragraphText.one} p2={null}/> 
        <IntroArt images={images}/>
        <Divider/>
        </>
    }
    else return (
        <>
        <IntroText/>
        <Divider/>
        </>
    )
}