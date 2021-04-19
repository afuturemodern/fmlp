import React from 'react'
import styled from "styled-components";

import panvala from '../../../images/partnersGrid/panvala.png';
import resonate from '../../../images/partnersGrid/resonate.png';
import audius from '../../../images/partnersGrid/audius.png';
import bridgit from '../../../images/partnersGrid/bridgit.png';
import abridged from '../../../images/partnersGrid/abridged.png';
import roll from '../../../images/partnersGrid/roll.png';
import api3 from '../../../images/partnersGrid/api3.png';
import handshake from '../../../images/partnersGrid/handshake.png';
import brightid from '../../../images/partnersGrid/brightid.png';
import fantastic from '../../../images/partnersGrid/fantastic.png';
import pictureplane from '../../../images/partnersGrid/pictureplane.png';
import phlote from '../../../images/partnersGrid/phlote.png';
import codame from '../../../images/partnersGrid/codame.png';
import vocadoventures from '../../../images/partnersGrid/vocadoventures.png';
import universe from '../../../images/partnersGrid/universe.png';

const gridImages = [
    {src: panvala, alt: 'panvala', href:'https://panvala.com/'},
    {src: resonate, alt: 'resonate', href:'https://resonate.is/'},
    {src: audius, alt: 'audius' , href:'https://audius.co/afuturemodern'},
    {src: bridgit, alt: 'bridgit', href: "#"},
    {src: abridged, alt: 'abridged', href: 'https://abridged.io/'},
    {src: roll, alt: 'roll', href: 'https://app.tryroll.com/token/BUILD'},
    {src: api3, alt: 'api3', href:'https://www.api3.org/'},
    {src: handshake, alt: 'handshake', href: 'https://handshake.org'},
    {src: brightid, alt: 'brightid', href: 'https://www.brightid.org'},
    {src: fantastic, alt: 'fantastic', href: '#'},
    {src: pictureplane, alt: 'pictureplane', href: '#'},
    {src: phlote, alt: 'phlote', href: 'https://www.phlote.co/'},
    {src: codame, alt: 'codame', href: 'codame.com'},
    {src: vocadoventures, alt: 'vocadoventures', href: 'https://codame.com'},
    {src: universe, alt: 'universe', href: 'https://universecontemporary.art/'},
 ]


export const PartnersGrid = () => {
    
    const PartnersGridContainer = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        gap: 15px 25px;
        margin: 10px auto;
        width: 30vw;
        justify-items: center;
        justify-content: center;
        background: #ffffffaa;
        align-items: center;
        padding-bottom: 6vh;

    `

    const images = gridImages.map(({alt, src, href}, i) => 
    <a href={href}  >
        <img 
                        src={src}
                        alt={alt}
                        key={'partnersCell-' + i} 
                        className="partnersCell" 
                        style={{
                            background: '#D4DCFB',
                            borderRadius: '36px',
                            width: '9rem',
                            height: '5vh',
                            padding: '.5rem 2rem',
                            justifySelf: 'stretch',
                            objectFit: 'contain'
                    }}/>
    </a>
                )
    return (
        <PartnersGridContainer>
            {images}
        </PartnersGridContainer>
    )
}
