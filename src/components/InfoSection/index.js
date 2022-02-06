import React from 'react'
import {Button} from '../ButtonElement'
import { 
     Img, 
     ImgWrap,
     InfoContainer, 
     InfoRow, 
     InfoWrapper,
     TopLine, 
     Heading, 
     BtnWrap, 
     Subtitle,
     Column1,
     Column2,
     TextWrapper
    
    } from './InfoElements'

const InfoSection = ({lightBg,lightText,alt,img,id,imgStart,topLine,headline,buttonLabel,description,darkText,primary,dark,dark2,url,infoUrl}) => {
    return (
        <>

        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                         <BtnWrap>
                            <Button to='home'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}
                            onClick={(e) => {e.preventDefault();window.location.href= url;}}
                            href={infoUrl}

                            >{buttonLabel}</Button>
                        </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
            
        
    )
}

export default InfoSection
