import React from 'react'
import styled from "styled-components";

import {gridImages} from './partnersGridData'




export const PartnersGrid = () => {

    const PartnersGridContainer = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;

    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
      }
    `

    const images = gridImages.map(({ alt, src, href }, i) =>
        <div
            key={'partnersCell-' + i}
            style={{
                padding: '1rem',
            }}
        >
            <a href={href}  >
                <img
                    src={src}
                    alt={alt}
                    className="partnersCell"
                    style={{
                        background: '#D4DCFB',
                        borderRadius: '36px',
                        width: '100%',
                        height: '3rem',
                        padding: '.5rem 2rem',
                        justifySelf: 'stretch',
                        objectFit: 'contain'
                    }} />
            </a>
        </div>
    )
    return (
        <PartnersGridContainer>
            {images}
        </PartnersGridContainer>
    )
}
