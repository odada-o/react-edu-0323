import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import styled from 'styled-components'
import Button from '../common/Button'

const Header = () => {
    const [selectedMenu, setSelectedMenu] = useState('home')

    return (
        <HeaderWrap>
            <Logo>Header</Logo>
            <Gnb id="gnb">
                <ul>
                    <li>
                        <Link
                            to="/"
                            onClick={() => setSelectedMenu('home')}
                            className={selectedMenu === 'home' ? 'active' : ''}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            onClick={() => setSelectedMenu('about')}
                            className={selectedMenu === 'about' ? 'active' : ''}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            onClick={() => setSelectedMenu('login')}
                            className={selectedMenu === 'login' ? 'active' : ''}
                        >
                            login
                        </Link>
                    </li>
                </ul>
            </Gnb>

            <div className="util">
                <Button primary={true}>마이페이지</Button>
                <Button>장바구니</Button>
                {/* <GhostButton>로그인</GhostButton> */}
            </div>
        </HeaderWrap>
    )
}

const HeaderWrap = tw.header`
    flex flex-col items-center justify-between p-4 bg-gray-200
    md:flex-row
`
const Logo = tw.h1`
    text-3xl font-bold underline
`

const Gnb = styled.nav`
    ul {
        ${tw`flex flex-col gap-4 md:flex-row md:gap-8`}
        li {
            ${tw`text-primary`}
        }
        a {
            &.active {
                ${tw`font-bold`}
            }
        }
    }
`

export default Header
