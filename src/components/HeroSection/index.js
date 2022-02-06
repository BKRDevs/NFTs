import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer,HeroBg,VideoBg,HeroBtnWrapper, HeroContent,HeroH1,HeroP } from './HeroElements'
import {Button} from '../ButtonElement'
import Wallet from '../Wallet/index'
const HeroSection = () => {
    const [hover,setHover]=useState(false);
    const onHover = ()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Dwarfcoin NFT</HeroH1>
            <HeroP>Mint our Collection</HeroP>
            <HeroBtnWrapper>
                <Wallet onMouseEnter={onHover} onMouseLeave={onHover} primary="true"
                dark="true" to='signup'></Wallet>
            </HeroBtnWrapper>
        </HeroContent>


        </HeroContainer>
            
        
    )
}

export default HeroSection
