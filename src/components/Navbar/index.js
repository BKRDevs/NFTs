import React from 'react'
import {Nav,NavBtn,NavBtnLink,NavbarContainer,NavLogo,MobileIcon,NavItem,NavMenu,NavLinks} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import Wallet from '../Wallet/index'


const Navbar = ({toggle}) => {
    return (
        
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        Dwarfcoin NFT
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks href='https://dwarfcoin.finance/' onClick={(e) => {e.preventDefault();window.location.href= 'https://dwarfcoin.finance/';}}>Dwarfcoin</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href='https://t.me/dwarfcoinofficial' onClick={(e) => {e.preventDefault();window.location.href= 'https://t.me/dwarfcoinofficial';}}>Telegram</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href='https://twitter.com/thedwarfcoin' onClick={(e) => {e.preventDefault();window.location.href= 'https://twitter.com/thedwarfcoin';}}>Twitter</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href='https://www.reddit.com/r/dwarfcoin/' onClick={(e) => {e.preventDefault();window.location.href= 'https://www.reddit.com/r/dwarfcoin/';}}>Reddit</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <Wallet/>
                    </NavBtn>
                </NavbarContainer>


            </Nav>  
        
    )
}

export default Navbar
