import React from 'react'
import{SidebarContainer,Icon,CloseIcon,SideBtnWrap,SidebarLink,SidebarMenu,SidebarWrapper,SidebarRoute} from './SidebarElements'
import Wallet from '../Wallet'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink href='https://dwarfcoin.finance/' onClick={(e) => {e.preventDefault();window.location.href= 'https://dwarfcoin.finance/';}} >
                        Dwarfcoin
                    </SidebarLink>
                    <SidebarLink href='https://t.me/dwarfcoinofficial' onClick={(e) => {e.preventDefault();window.location.href= 'https://t.me/dwarfcoinofficial';}}>
                        Telegram
                    </SidebarLink>
                    <SidebarLink href='https://twitter.com/thedwarfcoin' onClick={(e) => {e.preventDefault();window.location.href= 'https://twitter.com/thedwarfcoin';}}>
                        Twitter
                    </SidebarLink>
                    <SidebarLink href='https://www.reddit.com/r/dwarfcoin/' onClick={(e) => {e.preventDefault();window.location.href= 'https://www.reddit.com/r/dwarfcoin/';}} >
                        Reddit
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                
                    <Wallet/>
                    </SideBtnWrap>
                
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
